import React from 'react';
import cn from "classnames";
import {Loader, LoaderSize} from "../Loader/Loader";
import './Button.scss'

export type ButtonProps = React.PropsWithChildren<{
    /**
     * Если true, то внутри кнопки вместе с children отображается компонент Loader
     * Также кнопка должна переходить в состояние disabled
     */
    loading?: boolean;
}> & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({children, className, loading, ...props}: ButtonProps) => {

    const btnClasses = cn('button', `${className}`, {'button_disabled': loading || props.disabled})

    return <button className={btnClasses} disabled={loading || props.disabled} {...props}>
        <Loader loading={false} size={LoaderSize.s}/>
        {children}
    </button>
};
