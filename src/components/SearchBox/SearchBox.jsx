const SearchBox = ({ onChange }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"  />
        <button type='submit'>Search</button>
      </form>
      
    </div>
  )
}

export default SearchBox;