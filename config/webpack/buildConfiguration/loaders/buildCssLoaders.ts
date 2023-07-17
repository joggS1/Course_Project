import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildCSSLoaders = (isDev: boolean) => {
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
    return styleLoaders
}