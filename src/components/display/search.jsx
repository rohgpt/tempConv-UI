import React from 'react';
import './display.css'
const Search = (props) => <input className="search-contain" type="text" onChange={(e) => props.onSearch(e.target.value)} />;

export default Search;
