import countriesService from "./services/countries";
import DisplayCountries from "./components/DisplayCountries";
import Search from "./components/Search";
import { useEffect, useState } from "react";


function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  // const [show, setShow] = useState(true);

  console.log(countries)

  useEffect(() => {
    countriesService.getAll().then((initialResponse) => {
      setCountries(initialResponse.map((item,index)=>{
       return  {
        country:item.name.common,
        capital:item.capital,
        area:item.area,
        languages:item.languages,
        flag:item.flag,
        show:true,
        id:index + 1
        }
      }
      )); 
    });
  }, []);


 
const handleChange=(event)=>{
  setSearch(event.target.value);
}


const toggleShow=(id)=>{
  const country = countries.find(n => n.id === id)
  const changedCountry = { ...country, show: !country.show}
  setCountries(countries.map(n => n.id !== id ? n : changedCountry))
  console.log(countries,'click')

  // setShow(!show)

}

  return (
  <section>
  <Search onChange={handleChange}/>
<DisplayCountries search = {search} countries = {countries} onClick = {(countries)=>toggleShow(countries)} />
  </section>)
}

export default App;
