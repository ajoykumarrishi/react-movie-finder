import React from 'react';

function SearchButtonComponent ({ handleUserSearchSubmit }) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        handleUserSearchSubmit();
      }}
    >Search</button>
  )
}

export default SearchButtonComponent;