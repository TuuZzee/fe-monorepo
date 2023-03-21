# Web App Micro-frontend Shared

Shared resources for Micro services exclusively within the `web-micro-fe` namespace. Unlike the
@namespace/web-shared which can share ressources across all micro frontends application of the
websites namespace `web`.

Any resources that is used in more than one `web-micro-fe` namespace must be in this shared
namespace.

This namespace also contains all local proxi(s) for the `web-micro-fe` services.

### Sharable resources

```sh
.
├── assets/           # Static shared assets
├── components/       # React components
├── envs/             # Envs files
├── local/            # locale common translations
├── nextJs/           # NextJs related ressource App.js etc...\
├── redux/            # Global store with auth and organizations management etc...
├── styles/           # Styling css, styled components etc...
├── utils/            # Tools
```
