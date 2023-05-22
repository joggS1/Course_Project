import { classNames } from '@/shared/lib'
import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import styles from './AppLink.module.scss'

interface AppLinkProps extends LinkProps {
  className?: string
  type: 'primary' | 'secondary'
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { children, to, className, type, ...otherProps } = props
  return (
    <Link
      to={to}
      className={classNames(styles.AppLink, {}, [className, styles[type]])}
      {...otherProps}
    >
      {children}
    </Link>
  )
}
