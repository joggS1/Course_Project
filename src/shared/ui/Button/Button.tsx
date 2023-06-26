import type { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from '@/shared/lib';

import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme: 'outlined';
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme, ...otherProps } = props;
    return (
        <button
            className={classNames(styles.Button, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
