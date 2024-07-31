import React from 'react';

function SearchButtonComponent ({ onChange }) {
  return (
    <button onClick={onChange}>Search</button>
  )
}

export default SearchButtonComponent;