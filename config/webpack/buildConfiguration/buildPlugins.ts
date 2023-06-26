import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'

import type { BuildOptions } from './types';

export const buildPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => {
    const {
        analyze,
        isDev,
        paths: { indexHTML }
    } = options;
    return [
        new HtmlWebpackPlugin({
            template: indexHTML
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: './css/[name].[contenthash:8].css',
            chunkFilename: './css/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            IS_DEV: JSON.stringify(isDev)
        }),
        new webpack.HotModuleReplacementPlugin({}),
        new ReactRefreshWebpackPlugin({ overlay: false }),
        new BundleAnalyzerPlugin({
            analyzerMode: analyze ? 'server' : 'disabled'
        })
    ];
};
