import { Route, Routes } from 'react-router-dom'
import './index.scss'
import { Link } from 'react-router-dom'
import { Suspense } from 'react'
import { MainPageAsync } from './pages/Main/MainPage.async'
import { AboutPageAsync } from './pages/About/AboutPage.async'

export const App = () => {
  return (
    <div className="app">
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
