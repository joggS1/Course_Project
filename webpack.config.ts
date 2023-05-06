import path from 'path'
import webpack from 'webpack'
import { BuildPaths, buildWebpackConfig } from './config'

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  indexHTML: path.resolve(__dirname, 'public', 'index.html'),
  output: path.resolve(__dirname, 'build'),
}

const mode = 'development'
const isDev = mode === 'development'

const config: webpack.Configuration = buildWebpackConfig({
  mode,
  paths,
  isDev,
})

export default config
