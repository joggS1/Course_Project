import path from 'path'
import webpack from 'webpack'
import {
  BuildPaths,
  BuildEnvironmentVariables,
  buildWebpackConfig,
} from './config'

export default (env: BuildEnvironmentVariables) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    indexHTML: path.resolve(__dirname, 'public', 'index.html'),
    output: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
  }

  const mode = env.mode ?? 'development'
  const isDev = mode === 'development'
  const port = env.port ?? 3000
  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
  })

  return config
}
