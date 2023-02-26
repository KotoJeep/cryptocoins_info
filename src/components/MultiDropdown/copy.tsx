import React, { useState } from 'react';
import cn from 'classnames';
import { MultiDropdownProps, Option } from './MultiDropdown';

export const MultiDropdown: React.FC<MultiDropdownProps> = ({
  options,
  value,
  onChange,
  disabled = false,
  pluralizeOptions,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const checkSelection = (key: string) => {
    return inputValue.some((el) => el.key === key);
  };

  const MultiDropdownClass = cn('multi-dropdown', {
    'multi-dropdown_disabled': disabled,
  });

  const onClickItem = (option: Option) => {
    const isSelected = checkSelection(option.key);
    if (isSelected) {
      const newArrValue = inputValue.filter(({ key }) => key !== option.key);
      setInputValue(newArrValue);
      onChange(newArrValue);
    } else {
      setInputValue([...inputValue, option]);
      onChange([...inputValue, option]);
    }
  };

  const renderValue = pluralizeOptions(inputValue);

  return (
    <div className={MultiDropdownClass}>
      <input
        type="text"
        readOnly
        className="multi-dropdown_input"
        placeholder="Chose category"
        disabled={disabled}
        value={renderValue}
        onClick={handleOpen}
        // onChange={onChange}
      />
      {isOpen && !disabled ? (
        <ul className="multi-dropdown_list">
          {options.map((option) => (
            <li
              key={option.key}
              className={cn('multi-dropdown_list-item', {
                selected: checkSelection(option.key),
              })}
              onClick={() => onClickItem(option)}
            >
              {option.value}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
