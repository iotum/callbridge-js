/** @jest-environment jsdom */

import Widget from '../widget';

describe('widget', () => {
  const domain = 'test.callbridge';

  let eventAddSpy: jest.SpyInstance;
  let eventRmSpy: jest.SpyInstance;
  let container: HTMLElement;
  let widget: Widget<{}>;

  beforeEach(() => {
    eventAddSpy = jest.spyOn(window, 'addEventListener');
    eventRmSpy = jest.spyOn(window, 'removeEventListener');
  });

  afterEach(() => {
    eventAddSpy.mockReset();
    eventRmSpy.mockReset();
    widget?.unload();
  });

  describe('constructor', () => {
    it('throws Error without a container', () => {
      expect(() => new Widget({ domain } as any)).toThrow();
    });

    it('supports document selector', () => {
      container = document.body.appendChild(
        Object.assign(document.createElement('div'), { className: 'c' }),
      );
      widget = new Widget({ container: '.c', domain }, true);
      expect(container.childElementCount).toBe(1);
      expect(container.firstElementChild?.tagName).toBe('IFRAME');
      expect(container.firstElementChild?.getAttribute('src')).toBe(
        `https://${domain}/page_to_see?events=true`,
      );
    });

    it('supports window', () => {
      const mockWindow = Object.assign(Object.create(Window.prototype), {
        open: jest.fn(),
      });
      widget = new Widget(
        {
          container: mockWindow,
          domain,
          target: { name: 'new-tab' },
        },
        true,
      );
      expect(mockWindow.open).toHaveBeenCalledWith(
        `https://${domain}/page_to_see?events=true`,
        'new-tab',
        undefined,
      );
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
        expect(eventAddSpy).toHaveBeenCalledTimes(1);
        expect(eventAddSpy).toHaveBeenCalledWith('message', expect.anything());
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

      describe('load/unload', () => {
        beforeEach(() => {
          eventAddSpy.mock.calls[0][1]({
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
          expect(eventRmSpy).toHaveBeenCalledWith('message', expect.anything());
          expect(widget.instance).toBeNull();
          expect(widget.isReady).toBeFalsy();
          expect(widget.emit).not.toHaveBeenCalledWith('widget.UNLOAD');
        });

        it('emits "widget.UNLOAD" event when the widget unloads', () => {
          eventAddSpy.mock.calls[0][1]({
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
