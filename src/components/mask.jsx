import React from 'react';
import InputMask from 'react-input-mask';

const PhoneNumberInput = ({ value, onChange }) => {
    return (
        <InputMask
            mask="+7 (999) 999-99-99"
            value={value}
            onChange={onChange}
        >
            {inputProps => <input {...inputProps} />}
        </InputMask>
    );
};

export default PhoneNumberInput;