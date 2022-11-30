import * as Callbridge from '../index';

test('exports', () => {
  expect(Callbridge.Dashboard).toBeDefined();
  expect(Callbridge.Meeting).toBeDefined();
  expect(Callbridge.Livestream).toBeDefined();
});
