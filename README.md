# callbridge-js

Embed Callbridge meetings, team chat, drive, contacts and livestreams in your web app.

📖 **Documentation: <https://iotum.github.io/callbridge-js/>** (searchable API reference)

🧪 **Live samples: <https://iotum.github.io/iotum-samples/>** ([source](https://github.com/iotum/iotum-samples))

## Installation

### Install the library in your project:

```bash
npm install @iotum/callbridge-js
```

```js
// All widgets
import * as Callbridge from '@iotum/callbridge-js';

// Single widget
import { Meeting } from '@iotum/callbridge-js';
```

### Manually include the script tag in your Single Page App:

Add the following script tag to the `<head>` section on your site.

```html
<script src="https://app.callbridge.com/packs/js/widget.js" async></script>
```

The Widgets are exposed globally under `window.Callbridge`.

## Usage

```js
import { Meeting } from '@iotum/callbridge-js';

const meeting = new Meeting(
  {
    domain: 'your-company.callbridge.com',
    sso: { token: 'sso-token', hostId: 12345 },
    container: '#meeting',
  },
  '1234567', // meeting access code
  { skipJoin: true },
);

meeting.on('widget.ERROR', (error) => console.error(error));

// when your page or component is torn down
meeting.unload();
```

| Widget                                                                               | Use it to                                           |
| ------------------------------------------------------------------------------------ | --------------------------------------------------- |
| [`Meeting`](https://iotum.github.io/callbridge-js/latest/classes/Meeting.html)       | Join a meeting room.                                |
| [`Dashboard`](https://iotum.github.io/callbridge-js/latest/classes/Dashboard.html)   | Embed Team (chat), Drive, Contacts, Meet, Calls, Search or Settings. |
| [`Livestream`](https://iotum.github.io/callbridge-js/latest/classes/Livestream.html) | Watch a meeting livestream.                         |

### Guides

- [Getting started](https://iotum.github.io/callbridge-js/latest/documents/Getting_started.html)
- [Widget lifecycle](https://iotum.github.io/callbridge-js/latest/documents/Widget_lifecycle.html): events, visibility, React.
- [Using the dashboard](https://iotum.github.io/callbridge-js/latest/documents/Using_the_dashboard.html): team chat, drive, contacts and meetings.
- [Joining a meeting](https://iotum.github.io/callbridge-js/latest/documents/Joining_a_meeting.html): devices, participants and pop-up windows.
- [Watching a livestream](https://iotum.github.io/callbridge-js/latest/documents/Watching_a_livestream.html)
- [Third-party cookies and Safari](https://iotum.github.io/callbridge-js/latest/documents/Third-party_cookies_and_Safari.html)
- [All events](https://iotum.github.io/callbridge-js/latest/documents/All_events.html)

See the [API reference](https://iotum.github.io/callbridge-js/) for every option, method and event.
Documentation for a specific release is available at `https://iotum.github.io/callbridge-js/v<version>/`.

## Development

```bash
npm install
npm run lint
npm test
npm run build
npm run doc # generates the documentation site into docs-site/
```

The documentation is generated from the TSDoc comments in `src/` and the guides in `docs/guides/` by [TypeDoc](https://typedoc.org/), configured in `typedoc.json`,
and published to GitHub Pages when a release is published (see `.github/workflows/docs.yml`).
