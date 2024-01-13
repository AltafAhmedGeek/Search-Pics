function SearchBar({onSubmit}) {
  const handlerFormSubmit = (event) => { 
    event.preventDefault();
    // never ever do this 
    onSubmit(document.querySelector('input').value)
   }
  return (
    <div>
      <form onSubmit={handlerFormSubmit}>
        <input />
      </form>
    </div>
  );
}

export default SearchBar;
