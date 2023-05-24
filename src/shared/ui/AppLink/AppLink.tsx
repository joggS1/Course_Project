import type { FC } from 'react';
import type { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { classNames } from '@/shared/lib';

import styles from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
  className?: string;
  type: 'primary' | 'secondary';
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { children, to, className, type, ...otherProps } = props;
  return (
    <Link
      className={classNames(styles.AppLink, {}, [className, styles[type]])}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
