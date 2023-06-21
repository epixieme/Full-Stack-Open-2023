import countriesService from "./services/countries";
import DisplayCountries from "./components/DisplayCountries";
import Search from "./components/Search";
import { useEffect, useState } from "react";


function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    countriesService.getAll().then((initialResponse) => {
      setCountries(initialResponse);
    });
  }, []);

const handleChange=(event)=>{
  setSearch(event.target.value);
}

  return (
  <section>
  <Search onChange={handleChange}/>
<DisplayCountries search = {search} countries = {countries}/>
  </section>)
}

export default App;
