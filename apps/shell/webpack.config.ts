import { composePlugins, withNx, ModuleFederationConfig } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/react/module-federation';

import baseConfig from './module-federation.config';

const config: ModuleFederationConfig = {
  ...baseConfig,
  remotes: [
    ['mfe-ex-1', 'http://localhost:9777/remoteEntry.js'],
  ]
};

// Nx plugins for webpack to build config object from Nx options and context.
export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(config)
);
