import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch ,faClose} from "@fortawesome/free-solid-svg-icons";
import "./search.css";

function Search({ searchValue,isVisible,handleSearch, toggleSearch}) {
  
  return (
    <div className="search-container">
      <FontAwesomeIcon
        icon={isVisible ? faClose: faSearch}
        className="search-icon"
        onClick={() => toggleSearch()}
      />
      <div className={`search-box ${isVisible ? "visible" : ""}`}>
        <input
          type="text"
          placeholder="Search..."
          onChange={handleSearch}
          style={{ opacity: isVisible ? 1 : 0 }}
          value={searchValue}
        />
      </div>
    </div>
  );
}

export default Search;