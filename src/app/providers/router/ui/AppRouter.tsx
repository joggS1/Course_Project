import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AboutPage, MainPage } from '@/pages';
import { RouterConfig } from '@/shared/config/routerConfig';

export const AppRouter = () => (
  <Suspense fallback={<div>loading</div>}>
    <Routes>
      {Object.values(RouterConfig).map(({ path, element }) => (
        <Route key={path} element={<div className='page_wrapper'>{element}</div>} path={path} />
      ))}
      <Route element={<MainPage />} path='/' />
      <Route element={<AboutPage />} path='/about' />
    </Routes>
  </Suspense>
);
