import React from 'react';
import SearchButtonComponent from './search-button.component';
import { fetchMovies } from '../services/OMDbAPI.service';

function SearchInputComponent () {
  return(
    <form>
      <input 
        type="text" 
        placeholder="what movie do you want to go to?"
      >
      </input>
      <SearchButtonComponent
        onChange={fetchMovies}
      ></SearchButtonComponent>
    </form>
  )
}

export default SearchInputComponent;