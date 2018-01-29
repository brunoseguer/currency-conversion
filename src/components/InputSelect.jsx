import React from 'react';

const InputSelect = ({ options, handleInputSelect }) => (
  <select onChange={handleInputSelect} >
    {options.map(option =>
      <option key={option} value={option}>{option}</option>)}
  </select>
);

export default InputSelect;
