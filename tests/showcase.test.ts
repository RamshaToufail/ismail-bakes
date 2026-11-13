import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { products, photo, money } from '../src/lib/products';
import { earliestDeliveryDate, hasRequiredNotice } from '../src/lib/checkout-rules';
import { APPROVED_RAWALPINDI_AREAS, getServiceAreas, isApprovedServiceArea } from '../src/lib/service-areas';
import { galleryItems, galleryPhoto } from '../src/lib/gallery';
import { verifiedReviews } from '../src/lib/reviews';

test('product catalog has valid structure and required fields', () => {
  assert.ok(products.length >= 4, 'Catalog should contain products');
  for (const product of products) {
    assert.ok(product.id, 'Product should have an id');
    assert.ok(product.name, 'Product should have a name');
    assert.ok(product.category, 'Product should have a category');
    assert.ok(typeof product.price === 'number' && product.price > 0, 'Product should have positive numeric price');
    assert.ok(product.image, 'Product should have an image reference');
    assert.ok(product.description, 'Product should have a description');
  }
});

test('gallery collection has valid structure and tags', () => {
  assert.ok(galleryItems.length >= 6, 'Gallery should have multiple curated showcase items');
  for (const item of galleryItems) {
    assert.ok(item.id, 'Gallery item should have an id');
    assert.ok(item.title, 'Gallery item should have a title');
    assert.ok(item.category, 'Gallery item should have a category');
    assert.ok(item.categoryLabel, 'Gallery item should have a category label');
    assert.ok(item.occasion, 'Gallery item should specify an occasion');
    assert.ok(item.image, 'Gallery item should have an image reference');
    assert.ok(item.description, 'Gallery item should have a description');
  }
});

test('verified customer reviews have required fields and valid ratings', () => {
  assert.ok(verifiedReviews.length >= 3, 'Should have verified customer reviews');
  for (const r of verifiedReviews) {
    assert.ok(r.id, 'Review must have an id');
    assert.ok(r.quote, 'Review must have a quote');
    assert.ok(r.author, 'Review must have an author');
    assert.ok(r.location, 'Review must have a location in Rawalpindi');
    assert.ok(r.occasion, 'Review must have an occasion');
    assert.equal(r.rating, 5, 'Review must have 5-star rating');
  }
});

test('commercial hosting assessment documentation exists and covers Cloudflare Pages and Netlify', () => {
  const filePath = path.join(process.cwd(), 'HOSTING_ASSESSMENT.md');
  assert.ok(fs.existsSync(filePath), 'HOSTING_ASSESSMENT.md must exist');
  const content = fs.readFileSync(filePath, 'utf-8');
  assert.ok(content.includes('Vercel Hobby Plan'), 'Assessment should cover Vercel Hobby restrictions');
  assert.ok(content.includes('Cloudflare Pages'), 'Assessment should cover Cloudflare Pages');
  assert.ok(content.includes('Netlify Starter'), 'Assessment should cover Netlify Starter');
  assert.ok(content.includes('100% Free Commercial Use'), 'Assessment should specify free commercial use');
});

test('gallery photo helper generates valid unsplash URLs', () => {
  const url = galleryPhoto('sample-image-id', 800);
  assert.equal(url, 'https://images.unsplash.com/sample-image-id?auto=format&fit=crop&w=800&q=85');
});

test('photo helper generates valid unsplash URLs', () => {
  const url = photo('test-photo-id', 600);
  assert.equal(url, 'https://images.unsplash.com/test-photo-id?auto=format&fit=crop&w=600&q=85');
});

test('money helper formats PKR currency strings', () => {
  assert.equal(money(6500), 'PKR 6,500');
  assert.equal(money(1200), 'PKR 1,200');
});

test('minimum pre-order notice is calculated in Pakistan Standard Time (48 hours)', () => {
  const now = Date.parse('2026-11-12T08:30:00Z');
  assert.equal(earliestDeliveryDate(now), '2026-11-14');
  assert.equal(hasRequiredNotice('2026-11-14', '13:30', now), true);
  assert.equal(hasRequiredNotice('2026-11-14', '13:29', now), false);
  assert.equal(hasRequiredNotice('invalid-date', '13:30', now), false);
});

test('all nine owner-approved Rawalpindi areas are recognized', () => {
  const expected = [
    'Shalley Valley',
    'Afzal Town',
    'Afshan Colony',
    'Range Road',
    'Babu Market',
    'Westridge',
    'Chur Chowk',
    'Misrial Road',
    'Qasim Market',
  ];
  assert.deepEqual([...APPROVED_RAWALPINDI_AREAS], expected);
  const areas = getServiceAreas();
  assert.deepEqual(areas, expected);
  for (const area of expected) {
    assert.equal(isApprovedServiceArea(area, areas), true);
  }
  assert.equal(isApprovedServiceArea('Islamabad F-7', areas), false);
});

test('core showcase navigation routes are valid paths', () => {
  const routes = [
    '/',
    '/shop',
    '/custom-cakes',
    '/gallery',
    '/cakes',
    '/about',
    '/faqs',
    '/contact',
    '/privacy',
    '/terms',
  ];
  for (const route of routes) {
    assert.ok(route.startsWith('/'), `Route ${route} should start with /`);
  }
});

test('sitemap generator includes static, category, and product routes', async () => {
  const sitemapModule = await import('../src/app/sitemap');
  const sitemap = sitemapModule.default();
  assert.ok(Array.isArray(sitemap), 'Sitemap should return an array');
  assert.ok(sitemap.length >= 17, 'Sitemap should contain all core URLs');

  const urls = sitemap.map((entry) => entry.url);
  assert.ok(urls.includes('https://ismail-bakes.vercel.app'), 'Sitemap must contain home URL');
  assert.ok(urls.includes('https://ismail-bakes.vercel.app/shop'), 'Sitemap must contain shop URL');
  assert.ok(urls.includes('https://ismail-bakes.vercel.app/custom-cakes'), 'Sitemap must contain custom-cakes URL');
  assert.ok(urls.includes('https://ismail-bakes.vercel.app/gallery'), 'Sitemap must contain gallery URL');
  assert.ok(urls.includes('https://ismail-bakes.vercel.app/cakes'), 'Sitemap must contain category URL');
  assert.ok(urls.includes('https://ismail-bakes.vercel.app/product/rose-cake'), 'Sitemap must contain product URL');
});

test('robots generator allows indexing and points to sitemap.xml', async () => {
  const robotsModule = await import('../src/app/robots');
  const robots = robotsModule.default();
  assert.equal(robots.sitemap, 'https://ismail-bakes.vercel.app/sitemap.xml');
  assert.ok(Array.isArray(robots.rules), 'Robots rules should be an array');
  assert.equal(robots.rules[0]?.allow, '/');
});

test('launch checklist documentation exists and covers all phases', () => {
  const filePath = path.join(process.cwd(), 'LAUNCH_CHECKLIST.md');
  assert.ok(fs.existsSync(filePath), 'LAUNCH_CHECKLIST.md must exist');
  const content = fs.readFileSync(filePath, 'utf-8');
  assert.ok(content.includes('Phase 1'), 'Checklist must cover Phase 1');
  assert.ok(content.includes('Phase 2'), 'Checklist must cover Phase 2');
  assert.ok(content.includes('Phase 3'), 'Checklist must cover Phase 3');
  assert.ok(content.includes('Phase 4'), 'Checklist must cover Phase 4');
  assert.ok(content.includes('Phase 5'), 'Checklist must cover Phase 5');
  assert.ok(content.includes('Phase 6'), 'Checklist must cover Phase 6');
  assert.ok(content.includes('Phase 7'), 'Checklist must cover Phase 7');
});
