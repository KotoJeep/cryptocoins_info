import React from "react";
import styles from "./CheckBox.module.scss";
import cn from "classnames";

export type CheckBoxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  /** Вызывается при клике на чекбокс */
  onChange: (value: boolean) => void;
};

export const CheckBox: React.FC<CheckBoxProps> = ({
  onChange,
  className = "",
  ...props
}) => {
  const inputCheckClass = cn(styles.checkbox, `${className}`);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange(e.currentTarget.checked);

  return (
    <input
      {...props}
      className={inputCheckClass}
      type="checkbox"
      onChange={handleChange}
    />
  );
};
