import { AboutPage, MainPage } from '@/pages'
import { RouterConfig } from '@/shared/config'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <Routes>
        {Object.values(RouterConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Suspense>
  )
}
