import React, { PropTypes } from 'react';

const SearchField = ({value, placeholder, onChange, onSearch}) =>{
  return (
    <div className="col-lg-6">
      <div className="input-group">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="form-control"/>
        <span className="input-group-btn">
        <input type="button" value="Search" className="btn btn-primary" onClick={onSearch}/>
        </span>
      </div>
    </div>
  );
};

SearchField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default SearchField;
