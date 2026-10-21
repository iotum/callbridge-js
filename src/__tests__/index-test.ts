import { expect, test } from 'vitest';
import * as Callbridge from '../index';

test('exports', () => {
  expect(Callbridge.Dashboard).toBeDefined();
  expect(Callbridge.Meeting).toBeDefined();
  expect(Callbridge.Livestream).toBeDefined();
  expect(Callbridge.Widget).toBeDefined();
  expect(Callbridge.Room).toBeDefined();
  expect(Object.getPrototypeOf(Callbridge.Meeting)).toBe(Callbridge.Room);
  expect(Object.getPrototypeOf(Callbridge.Room)).toBe(Callbridge.Widget);
  expect(Object.getPrototypeOf(Callbridge.Dashboard)).toBe(Callbridge.Widget);
});
