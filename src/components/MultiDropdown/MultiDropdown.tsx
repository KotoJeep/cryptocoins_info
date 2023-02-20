import React, {DetailedHTMLProps, HTMLAttributes, useState} from 'react';
import './Multidropdown.module.scss'
import classNames from "classnames";
import {Button} from "../Button/Button";

export type Option = {
  /** Ключ варианта, используется для отправки на бек/использования в коде */
  key: string;
  /** Значение варианта, отображается пользователю */
  value: string;
};

/** Пропсы, которые принимает компонент Dropdown */
export type MultiDropdownProps = {
  /** Массив возможных вариантов для выбора */
  options: Option[];
  /** Текущие выбранные значения поля, может быть пустым */
  value: Option[];
  /** Callback, вызываемый при выборе варианта */
  onChange: (value: Option[]) => void;
  /** Заблокирован ли дропдаун */
  disabled?: boolean;
  /** Преобразовать выбранные значения в строку. Отображается в дропдауне в качестве выбранного значения */
  pluralizeOptions: (value: Option[]) => string;
};


const defaultPluralizeOptions = (elements: Option[]) =>
    elements.map((el: Option) => el.key).join();

export const MultiDropdown: React.FC<MultiDropdownProps> = ({ options,                                                       value, onChange,  disabled = false, pluralizeOptions = defaultPluralizeOptions, ...props}) =>{
    const [isOpen, setIsOpen] = useState(false)

    function includes(opts: Option[], opt: Option) {
        return opts.some((o) => opt.key === o.key)
    }

    const Value = pluralizeOptions(value)
    return (
        <Button
            {...props}

            className={classNames(styles.MultiDropdown, props.className)}
        >
            <Value
                {...valueProps}
                className={classNames(valueProps?.className, styles.value)}
                onClick={(e) => {
                    setIsOpen((v) => !v)
                    if (valueProps?.onClick) {
                        valueProps.onClick(e)
                    }
                }}
            />
            {isOpen && !disabled ? (
                <div
                    {...optionsProps}
                    className={classNames(styles.optionsParent, optionsProps?.className)}
                >
                    {options.map((option) => (
                        <div
                            key={option.key}
                            className={classNames(styles.option, {
                                [styles.selected]: includes(value, option),
                            })}
                            onClick={() => {
                                if (!includes(value, option)) {
                                    onChange([...value, option])
                                } else {
                                    onChange(value.filter((o) => o.key !== option.key))
                                }
                            }}
                        >
                            {option.value}
                        </div>
                    ))}
                </div>
            ) : null}
        </Button>
    )
};
