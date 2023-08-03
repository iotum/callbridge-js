/** @jest-environment jsdom */

import Widget from '../widget';

describe('widget', () => {
  const domain = 'test.callbridge';

  let windowSpy: jest.SpyInstance;
  let mockWindow: Window;
  let popupWindow: Window;
  let container: HTMLElement;
  let widget: Widget<{}>;

  const processEvent = (type: string, event: any) => {
    (mockWindow.addEventListener as jest.Mock).mock.calls.find(
      (call) => call[0] === type,
    )[1](event);
  };

  beforeEach(() => {
    popupWindow = Object.assign(Object.create(Window.prototype), {
      close: jest.fn(() => popupWindow),
      postMessage: jest.fn(),
      closed: false,
    });

    mockWindow = Object.assign(Object.create(Window.prototype), {
      open: jest.fn().mockReturnValue(popupWindow),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      postMessage: jest.fn(),
    });

    windowSpy = jest
      .spyOn(window, 'window', 'get')
      .mockImplementation(() => mockWindow as any);
  });

  afterEach(() => {
    widget?.unload();
    windowSpy.mockRestore();
  });

  describe('constructor', () => {
    it('throws Error without a container', () => {
      expect(() => new Widget({ domain } as any)).toThrow();
    });

    describe('supports document selector', () => {
      beforeEach(() => {
        container = document.body.appendChild(
          Object.assign(document.createElement('div'), { className: 'c' }),
        );
        widget = new Widget({ container: '.c', domain }, true);
      });

      it('creates iframe', () => {
        expect(container.childElementCount).toBe(1);
        expect(container.firstElementChild?.tagName).toBe('IFRAME');
        expect(container.firstElementChild?.getAttribute('src')).toBe(
          `https://${domain}/page_to_see?events=true`,
        );
      });

      it('does not listen to beforeunload', () => {
        expect(mockWindow.addEventListener).not.toHaveBeenCalledWith(
          'beforeunload',
          expect.anything(),
        );
      });
    });

    describe('supports window', () => {
      describe('single page app', () => {
        beforeEach(() => {
          widget = new Widget(
            {
              container: window,
              domain,
              target: { name: 'new-tab' },
            },
            true,
          );
        });

        it('opens in popup', () => {
          expect(mockWindow.open).toHaveBeenCalledWith(
            `https://${domain}/page_to_see?events=true`,
            'new-tab',
            undefined,
          );
        });

        it('listens to beforeunload', () => {
          expect(mockWindow.addEventListener).toHaveBeenCalledWith(
            'beforeunload',
            expect.anything(),
          );
        });
      });

      describe('re-attach popup widget', () => {
        beforeEach(() => {
          jest.useFakeTimers();

          widget = new Widget(
            {
              container: window,
              domain,
              target: { name: 'new-tab', checkExisting: true },
            },
            true,
          );
        });

        it('waits for any existing widget', () => {
          expect(mockWindow.open).not.toHaveBeenCalled();
        });

        describe('found', () => {
          beforeEach(() => {
            processEvent('message', {
              data: { type: 'widget', event: '_ping', name: 'new-tab' },
              source: popupWindow,
            });
          });

          it('replies to the widget', () => {
            expect(widget.wnd?.postMessage).toHaveBeenCalledWith(
              {
                type: 'widget',
                action: '_pong',
              },
              '*',
            );
          });

          it('does not open a new window', () => {
            expect(mockWindow.open).not.toHaveBeenCalled();
          });
        });

        describe('after waiting', () => {
          beforeEach(() => {
            jest.runOnlyPendingTimers();
          });

          it('opens a new one if no existing widget', () => {
            expect(mockWindow.open).toHaveBeenCalled();
          });

          it('demands that widget pingback when host app unloads', () => {
            processEvent('beforeunload', {});
            expect(widget.wnd?.postMessage).toHaveBeenCalledWith(
              {
                type: 'widget',
                action: '_ping',
                name: 'new-tab',
              },
              '*',
            );
          });
        });
      });
    });

    describe('detached HTMLElement', () => {
      beforeEach(() => {
        document.body.appendChild = jest.fn();
        container = document.createElement('div');
        widget = new Widget({ container, domain }, true);
        widget.emit = jest.fn();
      });

      it('supports it', () => {
        expect(container.childElementCount).toBe(1);
        expect(container.firstElementChild?.tagName).toBe('IFRAME');
        expect(container.firstElementChild?.getAttribute('src')).toBe(
          `https://${domain}/page_to_see?events=true`,
        );
      });

      it('handles events', () => {
        expect(mockWindow.addEventListener).toHaveBeenCalledTimes(1);
        expect(mockWindow.addEventListener).toHaveBeenCalledWith(
          'message',
          expect.anything(),
        );
      });

      it('waits for the ready event', () => {
        expect(widget.isReady).toBeFalsy();
        expect(widget.emit).not.toHaveBeenCalledWith('widget.LOAD');
      });

      it('attaches the container to DOM', () => {
        expect(document.body.appendChild).toHaveBeenCalledWith(container);
      });

      it('toggles visibility', () => {
        expect(
          (container.firstElementChild as HTMLIFrameElement).style.display,
        ).toBe('none');
        widget.toggle(true);
        expect(
          (container.firstElementChild as HTMLIFrameElement).style.display,
        ).toBe('block');
      });

      it('does not listen to beforeunload', () => {
        expect(mockWindow.addEventListener).not.toHaveBeenCalledWith(
          'beforeunload',
          expect.anything(),
        );
      });

      describe('load/unload', () => {
        beforeEach(() => {
          processEvent('message', {
            data: { type: 'svc', event: 'READY' },
            source: (container.firstElementChild as HTMLIFrameElement)
              .contentWindow,
          });
        });

        it('loads correctly', () => {
          expect(widget.isReady).toBeTruthy();
        });

        it('emits "widget.LOAD" event', () => {
          expect(widget.emit).toHaveBeenCalledWith('widget.LOAD');
        });

        it('unloads correctly', () => {
          widget.unload();
          expect(mockWindow.removeEventListener).toHaveBeenCalledWith(
            'message',
            expect.anything(),
          );
          expect(widget.instance).toBeNull();
          expect(widget.isReady).toBeFalsy();
          expect(widget.emit).not.toHaveBeenCalledWith('widget.UNLOAD');
        });

        it('emits "widget.UNLOAD" event when the widget unloads', () => {
          processEvent('message', {
            data: { type: 'svc', event: 'UNLOAD' },
            source: (container.firstElementChild as HTMLIFrameElement)
              .contentWindow,
          });
          expect(widget.emit).toHaveBeenCalledWith('widget.UNLOAD');
        });
      });
    });
  });

  describe('sso', () => {
    beforeEach(() => {
      container = document.createElement('div');
      widget = new Widget(
        {
          container,
          domain,
          sso: {
            token: 'token',
            hostId: 42,
          },
        },
        true,
      );
    });

    it('loads "/auth"', () => {
      const { host, pathname, searchParams } = new URL(
        container.firstElementChild?.getAttribute('src')!,
      );
      expect(host).toBe(domain);
      expect(pathname).toBe('/auth');

      expect(searchParams.get('events')).toBe(String(true));
      expect(searchParams.get('host_id')).toBe(String(42));
      expect(searchParams.get('login_token_public_key')).toBe('token');
      expect(searchParams.get('redirect_url')).toBe('/page_to_see?events=true');
    });
  });
});
