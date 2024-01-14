import { useState } from "react";

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
        <input value={search} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
