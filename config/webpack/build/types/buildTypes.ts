export type BuildMode = 'production' | 'development'
export interface BuildPaths {
  entry: string
  output: string
  indexHTML: string
}

export interface BuildOptions {
  mode: BuildMode
  paths: BuildPaths
  isDev: boolean
}
