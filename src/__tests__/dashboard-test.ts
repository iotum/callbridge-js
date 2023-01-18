/** @jest-environment jsdom */

import Dashboard from '../dashboard';

const createElement = document.createElement.bind(document);

let myPostMessage: jest.Mock;
const mockIFrame = Object.defineProperty(
  document.createElement('iframe'),
  'contentWindow',
  {
    get() {
      return { postMessage: myPostMessage };
    },
    configurable: false,
  },
);

describe('dashboard', () => {
  const domain = 'test.callbridge';
  const service = 'Drive';

  let container: HTMLElement;
  let dashboard: Dashboard;

  beforeEach(() => {
    container = createElement('div');

    myPostMessage = jest.fn();

    jest
      .spyOn(document, 'createElement')
      .mockImplementation((tag) =>
        tag === 'iframe' ? mockIFrame : createElement(tag),
      );
  });

  afterEach(() => {
    dashboard?.unload();
  });

  it('loads default page', () => {
    dashboard = new Dashboard({ container, domain });
    expect(container.firstElementChild?.getAttribute('src')).toBe(
      `https://${domain}/conf/loading?events=true`,
    );

    dashboard.emit('dashboard.ready');
    expect(dashboard.wnd?.postMessage).not.toHaveBeenCalled();
  });

  it('loads requested page', () => {
    dashboard = new Dashboard({ container, domain }, service);

    const { host, pathname, searchParams } = new URL(
      container.firstElementChild?.getAttribute('src')!,
    );

    expect(host).toBe(domain);
    expect(pathname).toBe(`/conf/loading`);
    expect(searchParams.get('events')).toBe('true');

    dashboard.emit('dashboard.ready');
    expect(dashboard.wnd?.postMessage).toHaveBeenCalledWith(
      {
        type: 'dashboard',
        action: 'load',
        service,
      },
      '*',
    );
  });

  it('supports sso', () => {
    dashboard = new Dashboard(
      { container, domain, sso: { hostId: 42, token: 'token' } },
      service,
    );

    const { host, pathname, searchParams } = new URL(
      container.firstElementChild?.getAttribute('src')!,
    );

    expect(host).toBe(domain);
    expect(pathname).toBe('/auth');
    expect(searchParams.get('events')).toBe('true');

    const redirectUrl = searchParams.get('redirect_url');
    expect(redirectUrl).toBe(`/conf/loading?events=true`);
  });
});
