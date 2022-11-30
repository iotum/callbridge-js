/** @jest-environment jsdom */

import Dashboard from '../dashboard';

describe('dashboard', () => {
  const domain = 'test.callbridge';
  const page = 'drive';

  let container: HTMLElement;
  let dashboard: Dashboard;

  beforeEach(() => {
    container = document.createElement('div');
  });

  afterEach(() => {
    dashboard?.unload();
  });

  it('loads default page', () => {
    dashboard = new Dashboard({ container, domain });
    expect(container.firstElementChild?.getAttribute('src')).toBe(
      `https://${domain}/conf/?events=true`,
    );
  });

  it('loads requested page', () => {
    dashboard = new Dashboard({ container, domain }, page);

    const { host, pathname, searchParams } = new URL(
      container.firstElementChild?.getAttribute('src')!,
    );

    expect(host).toBe(domain);
    expect(pathname).toBe(`/conf/${page}`);
    expect(searchParams.get('events')).toBe('true');
  });

  it('supports sso', () => {
    dashboard = new Dashboard(
      { container, domain, sso: { hostId: 42, token: 'token' } },
      page,
    );

    const { host, pathname, searchParams } = new URL(
      container.firstElementChild?.getAttribute('src')!,
    );

    expect(host).toBe(domain);
    expect(pathname).toBe('/auth');
    expect(searchParams.get('events')).toBe('true');

    const redirectUrl = searchParams.get('redirect_url');
    expect(redirectUrl).toBe(`/conf/${page}?events=true`);
  });
});
