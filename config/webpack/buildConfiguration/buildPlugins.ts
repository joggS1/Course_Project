import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { BuildPaths } from './types'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const buildPlugins = ({
  indexHTML,
}: Pick<BuildPaths, 'indexHTML'>): webpack.WebpackPluginInstance[] => [
  new HtmlWebpackPlugin({
    template: indexHTML,
  }),
  new webpack.ProgressPlugin(),
  new MiniCssExtractPlugin({
    filename: './css/[name].[contenthash:8].css',
    chunkFilename: './css/[name].[contenthash:8].css',
  }),
]
