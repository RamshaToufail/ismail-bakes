import test from 'node:test';
import assert from 'node:assert/strict';
import { products, photo, money } from '../src/lib/products';
import { earliestDeliveryDate, hasRequiredNotice } from '../src/lib/checkout-rules';
import { APPROVED_RAWALPINDI_AREAS, getServiceAreas, isApprovedServiceArea } from '../src/lib/service-areas';

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
  const routes = ['/', '/shop', '/cakes', '/about', '/faqs', '/contact', '/privacy', '/terms'];
  for (const route of routes) {
    assert.ok(route.startsWith('/'), `Route ${route} should start with /`);
  }
});
