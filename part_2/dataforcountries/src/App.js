import countriesService from "./services/countries";
import DisplayCountries from "./components/DisplayCountries";
import Search from "./components/Search";

import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const countriesResponse = await countriesService.getAll();
        const formattedCountries = countriesResponse.map((item, index) => ({
          country: item.name.common,
          capital: item.capital,
          area: item.area,
          languages: item.languages,
          flag: item.flag,
          show: true,
          id: index + 1,
        }));

        const weatherResponse = await countriesService.getWeather("kuwait");
        const formattedWeather = weatherResponse;

        setCountries(
          formattedCountries.map((item) => ({ ...item, ...formattedWeather }))
        );
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const fetchToggleData = async (id) => {
    const country = countries.find((n) => n.id === id);
    const weatherResponse = await countriesService.getWeather(country.country);
    const formattedWeather = weatherResponse;
    toggleShow(id, formattedWeather,country)
   
  };

  const toggleShow = (id, formattedWeather,country) => {
    const changedCountry = {
      ...country,
      show: !country.show,
      days: formattedWeather.days,
    };
    setCountries(countries.map((n) => (n.id !== id ? n : changedCountry)));
  };

  return (
    <section>
      <Search onChange={handleChange} />
      <DisplayCountries
        search={search}
        countries={countries}
        onClick={(countries) => fetchToggleData(countries)}
        key={countries}
      />
    </section>
  );
}

export default App;
