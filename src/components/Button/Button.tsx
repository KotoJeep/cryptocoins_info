import React from "react";
import cn from "classnames";
import { Loader, LoaderSize } from "@components/Loader/Loader";
import styles from "./Button.module.scss";

export type ButtonProps = React.PropsWithChildren<{
  /**
   * Если true, то внутри кнопки вместе с children отображается компонент Loader
   * Также кнопка должна переходить в состояние disabled
   */
  loading?: boolean;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  loading = false,
  ...props
}: ButtonProps) => {
  const btnClasses = cn(
    styles.button,
    `${className}`,
    (loading || props.disabled) && styles.button_disabled
  );

  return (
    <button
      className={btnClasses}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading && <Loader size={LoaderSize.s} />}
      {children}
    </button>
  );
};
