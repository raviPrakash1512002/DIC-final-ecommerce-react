import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./Search.css"


const Search = () => {

  const [search, setNewSearch] = useState("");

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };


  return (
    
    <div id="Search">
         <input type="text"  value={search} onChange={handleSearchChange} placeholder="Search....." />
         <FontAwesomeIcon id="iconsearch"icon={faSearch} />
    </div>
    
  );
};

export default Search;
