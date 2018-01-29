import React from 'react';

const InputSelect = ({ currencyList, handleInputSelect, name, value }) => (
  <select onChange={handleInputSelect} name={name} value={value} >
    {currencyList.map(option => <option key={option} value={option}>{option}</option>)}
  </select>
);

export default InputSelect;
