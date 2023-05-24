import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

export const buildPlugins = (
  options: BuildOptions
): webpack.WebpackPluginInstance[] => {
  const {
    isDev,
    paths: { indexHTML },
  } = options
  return [
    new HtmlWebpackPlugin({
      template: indexHTML,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: './css/[name].[contenthash:8].css',
      chunkFilename: './css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    new webpack.HotModuleReplacementPlugin({}),
    new ReactRefreshWebpackPlugin(),
  ]
}
