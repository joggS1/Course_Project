type Mods = Record<string, boolean | string>
export const classNames = (
  cls: string,
  mods: Mods = {},
  additonal: string[] = []
) => {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
    ...additonal.filter((value) => Boolean(value)),
  ].join(' ')
}
