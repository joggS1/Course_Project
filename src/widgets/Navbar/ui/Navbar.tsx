import { classNames } from '@/shared/lib'
import styles from './Navbar.module.scss'
import { Link } from 'react-router-dom'
import { AppLink } from '@/shared/ui/AppLink'
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher'

interface NavbarProps {
  className?: string
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props
  return (
    <nav className={classNames(styles.Navbar, {}, [className])}>
      <ThemeSwitcher />
      <ul className={classNames(styles.Menu_items, {}, [])}>
        <li>
          <AppLink type="secondary" to={'/'}>
            Main
          </AppLink>
        </li>
        <li>
          <AppLink type="secondary" to={'/about'}>
            About
          </AppLink>
        </li>
      </ul>
    </nav>
  )
}
