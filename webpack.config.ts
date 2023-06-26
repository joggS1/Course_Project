import path from 'path';

import type webpack from 'webpack';

import type { BuildEnvironmentVariables, BuildPaths } from './config';
import { buildWebpackConfig } from './config';

export default (env: BuildEnvironmentVariables) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        indexHTML: path.resolve(__dirname, 'public', 'index.html'),
        output: path.resolve(__dirname, 'build'),
        src: path.resolve(__dirname, 'src')
    };

    const mode = env.mode ?? 'development';
    const analyze = Boolean(env.analyze) 
    const isDev = mode === 'development';
    const port = env.port ?? 3000;
    const config: webpack.Configuration = buildWebpackConfig({
        analyze,
        mode,
        paths,
        isDev,
        port
    });

    return config;
};
