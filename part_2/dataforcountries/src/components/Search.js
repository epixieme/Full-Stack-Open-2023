const Search =({search, onChange})=>{
    return (
        <section>
          Find Countries: <input value={search} onChange={onChange} />
        </section>
      );
    };



export default Search