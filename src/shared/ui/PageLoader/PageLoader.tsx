import { classNames } from '@/shared/lib';
import { Spinner } from '@/shared/ui/Spinner';

import styles from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = (props: PageLoaderProps) => {
    const { className } = props;
    return (
        <div className={classNames(styles.PageLoader, {}, [className])}>
            <Spinner />
        </div>
    );
};
