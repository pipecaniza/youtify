import React from 'react';
import history from '../history';

const SearchBar = () => {
  let input;
  return (
    <form className="m-2" onSubmit={(e) => {e.preventDefault(); history.push(`/Search/${input.value}`); input.value = '' }}>
      <input 
        type="text" 
        className="form-control bg-dark border-dark text-white" 
        placeholder="Search" 
        ref={(node) => input = node} 
      />
    </form>
  );
};

export default SearchBar;