import React from 'react';
import NumberFormat from 'react-number-format';

const InputText = ({ handleChange, text, readOnly, className }) => (
  <NumberFormat
    className={className}
    thousandSeparator={true}
    thousandSeparator={','}
    decimalSeparator={'.'}
    decimalScale={4}
    onValueChange={handleChange}
    value={text}
    isNumericString={false}
    readOnly={readOnly}
  />
);

export default InputText;
