import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import webpack from 'webpack'
import { BuildPaths } from './types'

export const buildPlugins = ({
  indexHTML,
}: Pick<BuildPaths, 'indexHTML'>): webpack.WebpackPluginInstance[] => [
  new HtmlWebpackPlugin({
    template: indexHTML,
  }),
  new webpack.ProgressPlugin(),
]
