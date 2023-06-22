const DisplayCountries = ({ countries, search, show,onClick }) => {
  const countryNames = countries.filter((item) =>
    item.country.toLowerCase().includes(search.toLowerCase())
  );
  // console.log(countryNames)

  const results = countryNames.map((item) => {
    // console.log(item.id)
    const lang = item.languages;
    if (item.show) {
      return (
        <section>
          <p>{item.country}</p>
          <button onClick={()=>onClick(item.id)}>{item.show ? "show" : "close"}</button>
        </section>
      );
    } 
    else if(!item.show){
      return (
        <section>
          <h1>{item.country}</h1>
          <p>Captial: {item.capital}</p>
          <p>Area: {item.area}</p>
          <p>Languages:</p>
          {item.languages
            ? Object.values(lang).map((item) => <li>{item}</li>)
            : null}
          <h1>{item.flag}</h1>
          <button onClick={()=>onClick(item.id)}>{item.show ? "show" : "close"}</button>
        </section>
        
      );
    }
  });

  const result = countryNames.map((item) => {
    const lang = item.languages;

    return (
      <section>
        <h1>{item.country}</h1>
        <p>Captial: {item.capital}</p>
        <p>Area: {item.area}</p>
        <p>Languages:</p>
        {item.languages
          ? Object.values(lang).map((item) => <li>{item}</li>)
          : null}
        <h1>{item.flag}</h1>
      </section>
    );
  });

  if (search && countryNames.length > 10) {
    return (
      <section>
        <p>Too many matches, specifiy another filter</p>
      </section>
    );
  } else if (search && countryNames.length === 1) {
    return <section> {result}</section>;
  } else {
    return <section>{results}</section>;
  }
};

export default DisplayCountries;
