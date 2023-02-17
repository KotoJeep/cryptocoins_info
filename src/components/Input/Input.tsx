import React from 'react';

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'value'> & {
    /** Значение поля */
    value: string;
    /** Callback, вызываемый при вводе данных в поле */
    onChange: (value: string) => void;
};

export const Input: React.FC<InputProps> = ({value, onChange, ...rest}) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return <input {...rest} className="input" value={value} onChange={handleInputChange}/>;
};
