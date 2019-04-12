import React from 'react';

const SearchBar = ({addPlaylist}) => {
  let input;
  return (
    <form className="m-2" onSubmit={(e) => {e.preventDefault(); addPlaylist(input.value); input.value = '' }}>
      <input 
        type="text" 
        className="form-control bg-dark border-dark text-white" 
        placeholder="New Playlist" 
        ref={(node) => input = node} 
      />
    </form>
  );
};

export default SearchBar;