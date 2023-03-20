# Shared

Shared resources for Websites services within the fe-monorepo.

### Sharable resources

```sh
.
├── assets/           # Static assets files (ex: imgs, fonts etc...)
├── constants/        # Website global constants
├── components/       # React components
├── contexts/         # React contexts
├── hooks/            # React hooks
├── jest/             # Jests global configs and helpers
├── nextJs/           # NextJs global configs and helpers
├── propTypes/        # Global PropTypes
├── styles/           # Styling css, styled components etc...
├── utils/            # Tools
```

### How to use in a workspace

Anything from this `shared` workspace can be imported in other micro(?) service. Example to use the
`packages/websites/shared/components/EnvironmentBadge` React component in `@namespace/web-template` service.

- Add the shared workspace as a dependencies in the package.json file

```javascript
// packages/websites/template/package.json
"dependencies": {
  "@namespace/web-shared": "0.1.0"
// [...]
```

- Then import it where needed

```javascript
// packages/websites/template/container/src/components/shared/Layout.js
import React, { useContext } from 'react';

// [...]
import EnvironmentBadge from '@namespace/web-shared/components/EnvironmentBadge';
// [...]
```
