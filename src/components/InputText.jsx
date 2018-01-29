import React from 'react';

const InputText = ({ handleChange, text }) => (
  <input type="text" onChange={handleChange} value={text} />
);

export default InputText;
