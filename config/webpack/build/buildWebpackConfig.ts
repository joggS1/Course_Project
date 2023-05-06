import path from 'path'
import { BuildOptions } from './types'
import webpack from 'webpack'
import { buildPlugins, buildLoaders, buildResolvers } from './index'

export const buildWebpackConfig = (
  options: BuildOptions
): webpack.Configuration => {
  const {
    mode,
    paths: { indexHTML, output, entry },
  } = options
  return {
    mode: mode,
    entry: entry,
    output: {
      filename: '[name].[contenthash].js',
      path: output,
      clean: true,
    },
    plugins: buildPlugins({ indexHTML }),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
  }
}
