import React, { PropTypes } from 'react';

const SearchField = ({value, placeholder, onChange, onSearch}) =>{
  return (
    <span>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}/>
      <input type="button" value="Search" onClick={onSearch}/>
    </span>
  );
};

SearchField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default SearchField;
