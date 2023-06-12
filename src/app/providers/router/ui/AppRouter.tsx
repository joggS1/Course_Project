import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AboutPage, MainPage } from '@/pages';
import { RouterConfig } from '@/shared/config/routerConfig';
import { PageLoader } from '@/shared/ui/PageLoader';

export const AppRouter = () => (
    // eslint-disable-next-line
    <Suspense fallback={<PageLoader />}>
        <Routes>
            {Object.values(RouterConfig).map(({ path, element }) => (
                <Route
                    key={path}
                    element={<div className='page_wrapper'>{element}</div>}
                    path={path}
                />
            ))}
            <Route element={<MainPage />} path='/' />
            <Route element={<AboutPage />} path='/about' />
        </Routes>
    </Suspense>
);
