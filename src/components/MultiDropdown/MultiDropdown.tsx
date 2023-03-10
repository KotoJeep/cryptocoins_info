import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  useEffect,
  useState,
} from 'react';
import './Multidropdown.scss';
import classNames from 'classnames';
import { Button } from '../Button/Button';
import cn from 'classnames';

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

export const MultiDropdown: React.FC<MultiDropdownProps> = ({
  options,
  value,
  onChange,
  disabled = false,
  pluralizeOptions,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    const newValue = [...value];
    const optionIndex = newValue.findIndex((v) => v.key === option.key);

    if (optionIndex === -1) {
      newValue.push(option);
    } else {
      newValue.splice(optionIndex, 1);
    }

    onChange(newValue);
    // setInputValue(newValue);
  };

  const checkSelection = (key: string) => {
    return inputValue.some((el) => el.key === key);
  };

  const renderedOptions = options.map((option) => {
    // const isSelected = value.some((v) => v.key === option.key);

    return (
      <li
        key={option.key}
        className={cn('multi-dropdown_list-item', {
          selected: checkSelection(option.key),
        })}
        onClick={() => handleOptionClick(option)}
      >
        {option.value}
      </li>
    );
  });

  const multiDropdownClass = cn('multi-dropdown_text', {
    disabled: disabled,
  });

  return (
    <div className="multi-dropdown">
      <div className={multiDropdownClass} onClick={handleDropdownClick}>
        {pluralizeOptions(value)}
        <span className={'arrow-down'}></span>
      </div>

      {isOpen && !disabled ? (
        <ul className="multi-dropdown_list">{renderedOptions}</ul>
      ) : null}
    </div>
  );
};
