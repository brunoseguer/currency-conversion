import React from 'react';

const InputText = ({ handleChange, text, readOnly }) => (
  <input type="number" onChange={handleChange} value={text} readOnly={readOnly} />
);

export default InputText;
