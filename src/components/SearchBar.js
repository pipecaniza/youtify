import React from 'react';
import history from '../history';

const SearchBar = () => {
  let input;
  return (
    <form id="search-form" className="m-2" onSubmit={(e) => {e.preventDefault(); history.push(`/Search/${input.value}`); input.value = '' }}>
      <div className="input-group">
        <input 
          type="text" 
          className="form-control search-bar" 
          placeholder="Search" 
          ref={(node) => input = node} 
          id="search-bar"
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit"><i className="fas fa-search"></i></button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;