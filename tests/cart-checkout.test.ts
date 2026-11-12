import test from 'node:test';
import assert from 'node:assert/strict';
import { addCartLine, calculateSubtotal, clampQuantity, isCartLine, parseCartStorage } from '../src/lib/cart-utils';
import { earliestDeliveryDate, hasRequiredNotice } from '../src/lib/checkout-rules';
import { getServiceAreas } from '../src/lib/service-areas';

const line = { key:'rose-cake::Vanilla bean::', productId:'rose-cake', name:'The Rose Garden', category:'Custom cakes', image:'photo-1', unitPrice:6500, quantity:2, flavour:'Vanilla bean' };

test('cart subtotal totals quantities in PKR numeric units', () => {
  assert.equal(calculateSubtotal([line, { ...line, key:'pop', unitPrice:1200, quantity:3 }]), 16600);
});

test('adding a matching product/flavour/personalisation increments its quantity', () => {
  const added = addCartLine([line], { productId:'rose-cake', name:'The Rose Garden', category:'Custom cakes', image:'photo-1', unitPrice:6500, flavour:'Vanilla bean' });
  assert.equal(added.length, 1);
  assert.equal(added[0].quantity, 3);
});

test('cart quantity control clamps to one through 99', () => {
  assert.equal(clampQuantity(0), 1);
  assert.equal(clampQuantity(4.9), 4);
  assert.equal(clampQuantity(120), 99);
});

test('persisted cart line validation rejects malformed data', () => {
  assert.equal(isCartLine(line), true);
  assert.equal(isCartLine({ ...line, unitPrice: 'free' }), false);
});

test('saved cart JSON reloads validated lines and safely rejects corrupt storage', () => {
  assert.deepEqual(parseCartStorage(JSON.stringify([line])), [line]);
  assert.deepEqual(parseCartStorage('{bad json'), []);
  assert.deepEqual(parseCartStorage(JSON.stringify([{ ...line, quantity: -1 }])), []);
});

test('minimum delivery time is calculated in Pakistan Standard Time', () => {
  const now = Date.parse('2026-11-12T08:30:00Z');
  assert.equal(earliestDeliveryDate(now), '2026-11-14');
  assert.equal(hasRequiredNotice('2026-11-14', '13:30', now), true);
  assert.equal(hasRequiredNotice('2026-11-14', '13:29', now), false);
  assert.equal(hasRequiredNotice('not-a-date', '13:30', now), false);
});

test('service area policy fails closed when no owner-approved list is configured', () => {
  const previous = process.env.NEXT_PUBLIC_RAWALPINDI_SERVICE_AREAS;
  delete process.env.NEXT_PUBLIC_RAWALPINDI_SERVICE_AREAS;
  assert.deepEqual(getServiceAreas(), []);
  if (previous !== undefined) process.env.NEXT_PUBLIC_RAWALPINDI_SERVICE_AREAS = previous;
});
