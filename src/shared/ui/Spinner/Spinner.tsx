import { classNames } from '@/shared/lib';

import './Spinner.scss';

interface SpinnerProps {
    className?: string;
}

export const Spinner = (props: SpinnerProps) => {
    const { className } = props;
    return (
        <div className={classNames('lds-ring', {}, [className])}>
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};
