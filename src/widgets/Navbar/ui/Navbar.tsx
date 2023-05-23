import { classNames } from '@/shared/lib'
import styles from './Navbar.module.scss'
import { AppLink } from '@/shared/ui/AppLink'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props
  const { t } = useTranslation()
  return (
    <nav className={classNames(styles.Navbar, {}, [className])}>
      <ul className={classNames(styles.Menu_items, {}, [])}>
        <li>
          <AppLink type="secondary" to={'/'}>
            {t('страницы.главная')}
          </AppLink>
        </li>
        <li>
          <AppLink type="secondary" to={'/about'}>
            {t('страницы.онас')}
          </AppLink>
        </li>
      </ul>
    </nav>
  )
}
