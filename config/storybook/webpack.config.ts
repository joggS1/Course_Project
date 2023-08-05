import path from 'path';

import { buildCSSLoaders } from 'config/webpack/buildConfiguration/loaders/buildCssLoaders';
import { svgLoader } from 'config/webpack/buildConfiguration/loaders/svgLoader';
import type { Configuration, RuleSetRule } from 'webpack';

import type { BuildPaths } from '../webpack';

export default ({ config }: { config: Configuration }) => {
    const paths: BuildPaths = {
        output: '',
        indexHTML: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', './src')
    };
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('ts', 'tsx');
    config.resolve.alias = {
        ...config.resolve.alias,
        '@': paths.src
    };

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if(/svg/.test(rule.test as string)){
            return {...rule, exclude: /.svg$/i}
        }
        return rule
    } )

    config.module.rules.push(svgLoader)
    
    config.module.rules.push(buildCSSLoaders(true))
    return config;
};
