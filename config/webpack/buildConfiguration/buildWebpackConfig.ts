import webpack from 'webpack'
import {
  buildPlugins,
  buildLoaders,
  buildResolvers,
  buildDevServer,
} from './index'
import { BuildOptions } from './types'

export const buildWebpackConfig = (
  options: BuildOptions
): webpack.Configuration => {
  const {
    mode,
    paths: { output, entry },
    port,
    isDev,
  } = options
  return {
    mode: mode,
    entry: entry,
    output: {
      filename: '[name].[contenthash].js',
      path: output,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders({ isDev }),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer({ port }) : undefined,
  }
}
