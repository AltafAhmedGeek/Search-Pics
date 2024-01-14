import { useState } from "react";
import "../styles/custom.css";

function SearchBar({ onSubmit }) {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value.replace(/[0-9]/,''));
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(search)
    // never ever do this
    // onSubmit(document.querySelector("input").value);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input className="searchBar" value={search} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
