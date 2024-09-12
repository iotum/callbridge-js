/** @jest-environment jsdom */

import Dashboard, { LayoutOption, Service } from '../dashboard';

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
  const service = Service.Drive;

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

    dashboard.emit('dashboard.READY');
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

    dashboard.emit('dashboard.READY');
    expect(dashboard.wnd?.postMessage).toHaveBeenCalledWith(
      {
        type: 'dashboard',
        action: 'load',
        service,
      },
      '*',
    );
  });

  it('loads a specific path with options', () => {
    dashboard = new Dashboard({ container, domain }, service);

    dashboard.load(service, {
      pathname: '/path',
      layout: LayoutOption.main,
      hiddenElements: [1, 2, 3, 4],
    });

    expect(dashboard.wnd?.postMessage).toHaveBeenCalledWith(
      {
        type: 'dashboard',
        action: 'load',
        service,
        pathname: '/path',
        layout: 'main',
        hiddenElements: [1, 2, 3, 4],
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
    expect(searchParams.get('events')).toBeNull();

    const redirectUrl = searchParams.get('redirect_url');
    expect(redirectUrl).toBe(`/conf/loading?events=true`);
  });

  it('can navigate the history', () => {
    dashboard = new Dashboard({ container, domain }, service);

    dashboard.go(-2);

    expect(dashboard.wnd?.postMessage).toHaveBeenCalledWith(
      {
        type: 'dashboard',
        action: 'go',
        delta: -2,
      },
      '*',
    );
  });

  it('can set hidden elements', () => {
    dashboard = new Dashboard({ container, domain }, service);

    dashboard.setHiddenElements([1, 2, 3, 4]);

    expect(dashboard.wnd?.postMessage).toHaveBeenCalledWith(
      {
        type: 'dashboard',
        action: 'setHiddenElements',
        ids: [1, 2, 3, 4],
      },
      '*',
    );
  });
});
