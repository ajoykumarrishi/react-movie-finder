import React from 'react';
import SearchButtonComponent from './search-button.component';

function SearchInputComponent () {
  return(
    <form>
      <input 
        type="text" 
        placeholder="what movie do you want to go to?"
      >
      </input>
      <SearchButtonComponent></SearchButtonComponent>
    </form>
  )
}

export default SearchInputComponent;