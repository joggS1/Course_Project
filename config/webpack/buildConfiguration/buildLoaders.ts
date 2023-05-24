import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type webpack from 'webpack';

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
  const styleLoader = isDev ? 'style-loader' : MiniCssExtractPlugin.loader;
  const cssLoader = {
    loader: 'css-loader',
    options: {
      modules: {
        auto: (path: string) => path.includes('.module.'),
        localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
      }
    }
  };
  const styleLoaders = {
    test: /\.s[ac]ss$/i,
    use: [styleLoader, cssLoader, 'sass-loader']
  };
  return [fileLoader, svgLoader, babelLoader, typescriptLoader, styleLoaders];
};
