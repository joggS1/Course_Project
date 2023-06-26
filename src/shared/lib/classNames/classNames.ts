type Mods = Record<string, boolean | string>;
export const classNames = (cls: string, mods: Mods = {}, additonal: string[] = []) =>
    [
        cls,
        ...Object.entries(mods)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className),
        ...additonal.filter((value) => Boolean(value))
    ].join(' ');
