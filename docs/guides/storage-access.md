---
title: Third-party cookies and Safari
category: Guides
---

# Third-party cookies and Safari

The widget keeps the user signed in with a cookie. Inside an iframe on your site, that cookie is a third-party cookie,
which some browsers block, e.g. Safari. The widget then asks the user to grant it storage access, which requires the
user to click **inside the widget** and, in some browsers, to interact with a pop-up window.

The widget first checks whether its cookie works, including partitioned cookies. Most of the time, no action is needed.

## Handling the storage access events

Subscribe to the events right after creating the widget:

```ts
const widget = new Dashboard(options, Service.Team);

widget.on('widget.STORAGE_ACCESS_REQUIRED', ({ step }) => {
  // The user must click inside the widget.
  showWidgetForInteraction(); // e.g. widget.toggle(true), in a visible modal
  setHint(
    step === 'interaction'
      ? 'Allow the pop-up window to continue.'
      : 'Click the button in the widget to continue.',
  );
});

widget.on('widget.STORAGE_ACCESS_GRANTED', restoreLayout);
widget.on('widget.STORAGE_ACCESS_DENIED', () => {
  restoreLayout();
  showError('Unable to sign in without cookie access.');
});
widget.on('widget.ERROR', restoreLayout);
```

| Event                            | Meaning                                                                                                                                                                                       |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `widget.STORAGE_ACCESS_REQUIRED` | The user must interact with the widget. `step` is `request` (click the widget button), `interaction` (click through, or allow, the pop-up window) or `retry` (click the widget button again). |
| `widget.STORAGE_ACCESS_GRANTED`  | Access is granted and sign in continues. This is **not** a sign in success; wait for `widget.LOAD` and the `*.READY` event. It may be emitted again after the widget reloads.                 |
| `widget.STORAGE_ACCESS_DENIED`   | The user or the browser denied access. The widget cannot sign in.                                                                                                                             |
| `widget.ERROR`                   | A request or sign in failed.                                                                                                                                                                  |

## Guidelines

- **Make the widget visible and clickable** on `widget.STORAGE_ACCESS_REQUIRED`, including widgets you normally keep
  hidden, e.g. one used only for unread counts. Call {@link Widget.toggle | toggle(true)}, remove loading overlays,
  and make sure nothing covers the widget.
- A widget in a detached container is not visible; show it in a visible overlay or modal.
- **Restore** your layout after `GRANTED`, `DENIED` or `ERROR`. It is then safe to hide the widget again.
- There is no timeout for the user to click. Provide your own cancel button or deadline if needed.
- If you listen to `message` events of the widget directly, validate the origin and the source window.

## Avoiding third-party cookies

For enterprise deployments, the widget can be served from a hostname of your own site,
e.g. `https://meet.your-company.com` inside `https://app.your-company.com`, so that its cookie is not a third-party
cookie. This requires DNS, TLS certificate and account configuration; contact iotum to set it up.
This does not help when the user blocks all cookies.
