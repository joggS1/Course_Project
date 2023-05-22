import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { Navbar } from '@/widgets/Navbar'
import { classNames } from '@/shared/lib'

export const App = () => {
  const { theme } = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  )
}
