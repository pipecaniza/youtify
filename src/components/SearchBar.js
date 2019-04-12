import React from 'react';
import history from '../history';

const SearchBar = () => {
  let input;
  return (
    <form id="search-form" className="m-2" onSubmit={(e) => {e.preventDefault(); history.push(`/Search/${input.value}`); input.value = '' }}>
      <input 
        type="text" 
        className="form-control " 
        placeholder="Search" 
        ref={(node) => input = node} 
        id="search-bar"
      />
    </form>
  );
};

export default SearchBar;