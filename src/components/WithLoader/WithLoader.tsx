import React from "react";
import { Loader } from "../Loader/Loader";
import styles from "./WithLoader.module.scss";

export type WithLoaderProps = React.PropsWithChildren<{
  loading: boolean;
}>;

export const WithLoader: React.FC<WithLoaderProps> = ({
  loading,
  children,
}) => {
  return (
    <div className={styles[`with-loader`]}>
      {children}
      {loading && (
        <div className={styles["with-loader__active"]}>
          <Loader />
        </div>
      )}
    </div>
  );
};
