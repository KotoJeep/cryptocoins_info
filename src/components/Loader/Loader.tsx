import React from "react";
import cn from "classnames";
import styles from "./Loader.module.scss";

export enum LoaderSize {
  s = "s",
  m = "m",
  l = "l",
}

export type LoaderProps = {
  loading?: boolean;
  size?: LoaderSize;
  className?: string;
};

export const Loader: React.FC<LoaderProps> = ({
  loading = true,
  size = LoaderSize.m,
  className,
}) => {
  const loaderClasses = cn(styles.loader, className, styles[`loader_${size}`]);
  return loading ? <div className={loaderClasses} /> : null;
};
