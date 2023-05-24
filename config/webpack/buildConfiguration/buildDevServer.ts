import { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { BuildOptions } from './index'

export const buildDevServer = ({
  port,
}: Pick<BuildOptions, 'port'>): DevServerConfiguration => {
  return {
    port: port,
    open: true,
    historyApiFallback: true,
    hot: true,
  }
}
