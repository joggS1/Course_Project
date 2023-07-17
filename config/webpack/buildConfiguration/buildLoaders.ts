import type webpack from 'webpack';

import { buildCSSLoaders } from './loaders/buildCssLoaders';
import type { BuildOptions } from './types';

export const buildLoaders = ({ isDev }: Pick<BuildOptions, 'isDev'>): webpack.RuleSetRule[] => {
    const typescriptLoader = {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: 'ts-loader'
    };
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    };
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    };
    const babelLoader = {
        exclude: /node_modules/,
        test: /\.(?:ts|js|tsx)$/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [['i18next-extract', { locales: ['ru', 'en'], keyAsDefaultValue: true }]]
            }
        }
    };
    const styleLoaders = buildCSSLoaders(isDev);

    return [fileLoader, svgLoader, babelLoader, typescriptLoader, styleLoaders];
};
