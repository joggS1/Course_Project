import { Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import { Link } from 'react-router-dom'
import { Suspense, useState } from 'react'
import { MainPageAsync } from './pages/Main/MainPage.async'
import { AboutPageAsync } from './pages/About/AboutPage.async'
import { useTheme } from './utils'

export const App = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Switch Theme</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}
