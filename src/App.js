import SearchBar from "./components/SearchBar";
function App() {
  const onSubmit = (term) => {
    console.log(term)
  }
  return <div>
    <SearchBar onSubmit ={onSubmit} />
  </div>;
}

export default App;
