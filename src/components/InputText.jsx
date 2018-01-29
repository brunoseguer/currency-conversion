import React from 'react';

const InputText = ({ handleChange, text, readOnly }) => (
  <input
    className="currency"
    type="number"
    step="0.01"
    onChange={handleChange}
    value={text}
    readOnly={readOnly}
  />
);

export default InputText;
