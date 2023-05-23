import { classNames } from '@/shared/lib'
import { Button } from '@/shared/ui/Button'
import { LocaleSwitcher } from '@/widgets/LocaleSwitcher'
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher'
import { useState } from 'react'
import styles from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar = (props: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const { className } = props
  const toggleSidebar = () => {
    setCollapsed((prevState) => !prevState)
  }
  return (
    <div
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button theme="outlined" onClick={toggleSidebar}>
        Toggle
      </Button>
      <div className={styles.swtichers}>
        <ThemeSwitcher />
        <LocaleSwitcher />
      </div>
    </div>
  )
}
