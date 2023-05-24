import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import type { BuildOptions } from './index';

export const buildDevServer = ({ port }: Pick<BuildOptions, 'port'>): DevServerConfiguration => ({
  port,
  open: true,
  historyApiFallback: true,
  hot: true
});
