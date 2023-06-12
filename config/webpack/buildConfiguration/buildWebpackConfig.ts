import type webpack from 'webpack';

import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import type { BuildOptions } from './types';

export const buildWebpackConfig = (
    options: BuildOptions
): webpack.Configuration => {
    const {
        mode,
        paths: { output, entry },
        port,
        isDev
    } = options;
    return {
        devServer: isDev ? buildDevServer({ port }) : undefined,
        devtool: isDev ? 'inline-source-map' : undefined,
        entry,
        mode,
        module: {
            rules: buildLoaders({ isDev })
        },
        output: {
            clean: true,
            filename: '[name].[contenthash].js',
            path: output
        },

        plugins: buildPlugins(options),

        resolve: buildResolvers(options)
    };
};
