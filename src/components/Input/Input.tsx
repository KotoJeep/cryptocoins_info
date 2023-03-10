import React from "react";
import cn from "classnames";
import styles from "./Input.module.scss";

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "value"
> & {
  /** Значение поля */
  value: string;
  /** Callback, вызываемый при вводе данных в поле */
  onChange: (value: string) => void;
};

export const Input: React.FC<InputProps> = ({
  value = "",
  onChange,
  ...props
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  const inputClass = cn(
    styles.input,
    { input_disabled: props.disabled },
    `${props.className}`
  );

  return (
    <input
      type="text"
      {...props}
      className={inputClass}
      value={value}
      onChange={handleInputChange}
    />
  );
};
