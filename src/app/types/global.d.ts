declare module '*.module.css'
declare module '*.module.scss' {
  const classes: { [key: string]: string }
  export default classes
}

declare const __IS_DEV__: boolean

declare module '*.svg' {
  import React from 'react'
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
  export default SVG
}
declare module '*.png'
declare module '*.jpeg'
declare module '*.jpg'

// declare module '*.scss' {
//   interface IClassNames {
//     [className: string]: string
//   }
//   const classNames: IClassNames
//   export default classNames
// }

// declare module '*.module.scss' {
//   const classes: { [key: string]: string }
//   export default classes
// }
// declare module '*.css' {
//   interface IClassNames {
//     [className: string]: string
//   }
//   const classNames: IClassNames
//   export = classNames
// }
