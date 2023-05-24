import './styles/index.scss';
import { Suspense } from 'react';

import { classNames } from '@/shared/lib';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar />
        <div className='content_page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
