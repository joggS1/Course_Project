export type BuildMode = 'production' | 'development';
export interface BuildPaths {
    entry: string;
    output: string;
    indexHTML: string;
    src: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}
export interface BuildEnvironmentVariables {
    port: number | undefined;
    mode: BuildMode | undefined;
}
