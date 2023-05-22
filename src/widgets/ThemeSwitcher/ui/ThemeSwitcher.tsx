import { useTheme } from '@/app/providers/ThemeProvider'
import { classNames } from '@/shared/lib'
import { Theme } from '@/app/providers/ThemeProvider'
import styles from './ThemeSwitcher.module.scss'
import ThemeIcon from '@/shared/assets/icons/theme_icon.svg'
import { Button } from '@/shared/ui/Button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { className } = props
  const { toggleTheme, theme } = useTheme()
  return (
    <div className={classNames(styles.ThemeSwitcher, {}, [className])}>
      <Button theme="outlined" onClick={toggleTheme}>
        <ThemeIcon fill={theme !== Theme.DARK ? '#000' : '#fff'} />
      </Button>
    </div>
  )
}
