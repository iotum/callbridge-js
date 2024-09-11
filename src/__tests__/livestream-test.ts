/** @jest-environment jsdom */

import Livestream, { LivestreamOptions } from '../livestream';

describe('livestream', () => {
  const domain = 'test.callbridge';
  const roomId = 'meeting-room-42';

  let container: HTMLElement;
  let livestream: Livestream;

  beforeEach(() => {
    container = document.createElement('div');
  });

  afterEach(() => {
    livestream?.unload();
  });

  it('loads "/livestream/<pin>" without options', () => {
    livestream = new Livestream({ container, domain }, roomId);
    expect(container.firstElementChild?.getAttribute('src')).toBe(
      `https://${domain}/livestream/${roomId}?events=true`,
    );
  });

  it('supports livestream options', () => {
    const options: LivestreamOptions = {
      name: 'my-name',
      chat: 'intercept',
      hideControls: true,
    };
    livestream = new Livestream({ container, domain }, roomId, options);

    const { host, pathname, searchParams } = new URL(
      container.firstElementChild?.getAttribute('src')!,
    );

    expect(host).toBe(domain);
    expect(pathname).toBe(`/livestream/${roomId}`);
    expect(searchParams.get('events')).toBe('true');

    expect(searchParams.get('name')).toBe(options.name);
    expect(searchParams.get('chat')).toBe(options.chat);
    expect(searchParams.get('hideControls')).toBe(String(options.hideControls));
  });

  it('supports livestream options under sso', () => {
    livestream = new Livestream(
      { container, domain, sso: { hostId: 42, token: 'token' } },
      roomId,
      { chat: true },
    );

    const { host, pathname, searchParams } = new URL(
      container.firstElementChild?.getAttribute('src')!,
    );

    expect(host).toBe(domain);
    expect(pathname).toBe('/auth');
    expect(searchParams.get('events')).toBeNull();

    const redirectUrl = searchParams.get('redirect_url');
    expect(redirectUrl).toBe(`/livestream/${roomId}?chat=true&events=true`);
  });
});
