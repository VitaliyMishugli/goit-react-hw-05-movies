const SearchBox = ({ onChange }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.searchFilter.value;
    console.log(e.target.elements.searchFilter.value);
    onChange(value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="searchFilter" />
        <button type='submit'>Search</button>
      </form>
      
    </div>
  )
}

export default SearchBox;