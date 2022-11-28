/** @jest-environment jsdom */

import Meeting, { MeetingOptions } from '../meeting';

describe('meeting', () => {
  const domain = 'test.callbridge';
  const roomId = 'meeting-room-42';

  let container: HTMLElement;
  let meeting: Meeting;

  beforeEach(() => {
    container = document.createElement('div');
  });

  afterEach(() => {
    meeting?.unload();
  });

  it('loads "/conf/call/<pin>" without options', () => {
    meeting = new Meeting({ container, domain }, roomId);
    expect(container.firstElementChild?.getAttribute('src')).toBe(
      `https://${domain}/conf/call/${roomId}?events=true`,
    );
  });

  it('supports meeting options', () => {
    const options: MeetingOptions = {
      name: 'my-name',
      skipJoin: true,
      mute: { mic: true, camera: true },
      observer: true,
      moderatorToken: 'mod-token',
      resolution: 720,
      view: 'bottom_speaker',
      tiles: 6,
      audioLevel: false,
      stripLayout: false,
      autoView: true,
      afterCallUrl: 'https://test.com/test#done',
    };
    meeting = new Meeting({ container, domain }, roomId, options);

    const { host, pathname, searchParams } = new URL(
      container.firstElementChild?.getAttribute('src')!,
    );

    expect(host).toBe(domain);
    expect(pathname).toBe(`/conf/call/${roomId}`);
    expect(searchParams.get('events')).toBe('true');

    expect(searchParams.get('name')).toBe(options.name);
    expect(searchParams.get('skip_join')).toBe(String(options.skipJoin));
    expect(searchParams.get('observer')).toBe(String(options.observer));
    expect(searchParams.get('moderatorToken')).toBe(options.moderatorToken);
    expect(searchParams.get('res')).toBe(String(options.resolution));
    expect(searchParams.get('view')).toBe(options.view);
    expect(searchParams.get('tiles')).toBe(String(options.tiles));
    expect(searchParams.get('audio_level')).toBe(String(options.audioLevel));
    expect(searchParams.get('strip_layout')).toBe(String(options.stripLayout));
    expect(searchParams.get('auto_view')).toBe(String(options.autoView));
    expect(searchParams.get('after_call_url')).toBe(options.afterCallUrl);
    expect(searchParams.get('mute')).toBe(['mic', 'camera'].join(','));
  });

  it('supports meeting options under sso', () => {
    meeting = new Meeting(
      { container, domain, sso: { hostId: 42, token: 'token' } },
      roomId,
      { name: 'my-name' },
    );

    const { host, pathname, searchParams } = new URL(
      container.firstElementChild?.getAttribute('src')!,
    );

    expect(host).toBe(domain);
    expect(pathname).toBe('/auth');
    expect(searchParams.get('events')).toBe('true');

    const redirectUrl = searchParams.get('redirect_url');
    expect(redirectUrl).toBe(`/conf/call/${roomId}?name=my-name&events=true`);
  });
});
