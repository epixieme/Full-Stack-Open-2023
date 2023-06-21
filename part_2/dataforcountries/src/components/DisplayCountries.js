const DisplayCountries = ({ countries, search }) => {
  const countryNames = countries.filter((item) =>
    item.name.common.toLowerCase().includes(search.toLowerCase())
  );

  console.log(countryNames)

  const results = countryNames.map((item) =><p>{item.name.common}</p> );

  const result = countryNames.map((item) =>{
   
  
const lang = item.languages

    return (
        <section>
             <h1>{item.name.common}</h1> 
             <p>Captial: {item.capital}</p>
             <p>Area: {item.area}</p>
             <p>Languages:</p>
             {item.languages? Object.values(lang).map(item=><li>{item}</li>):null}
             <h1>{item.flag}</h1>
        </section>
    )
 
});

  if (search && countryNames.length > 10) {
    return (
      <section>
        <p>Too many matches, specifiy another filter</p>
      </section>
    );
  } else if(search && countryNames.length === 1){
        return <section> {result}</section>
           
        
  }
  
  else {
    return <section>{results}</section>;
  }
};

export default DisplayCountries;
