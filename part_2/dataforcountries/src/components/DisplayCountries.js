import WeatherDetails from "./WeatherDetails";

const DisplayCountries = ({ countries, search, onClick }) => {
  const countryNames = countries.filter((item) =>
    item.country.toLowerCase().includes(search.toLowerCase())
  );
  const results = countryNames.map((item) => {
    let today = new Date().toISOString().slice(0, 10);
    const days = item.days.filter((item) => today === item.datetime)[0] || 0;
    const lang = item.languages;
    if (item.show) {
      return (
        <section key={item.id}>
          <p>{item.country}</p>
          <button onClick={() => onClick(item.id)}>
            {item.show ? "show" : "close"}
          </button>
        </section>
      );
    } else if (!item.show) {
      return (
        <section className="country-details-container" key={item.id}>
          <h2 className="main-header">{item.country}</h2>
          <p>Captial: {item.capital}</p>
          <p>Area: {item.area}</p>
          <h2 className="secondary-header">Languages:</h2>
          {item.languages
            ? Object.values(lang).map((item,ind) => <li key={ind + 1}>{item}</li>)
            : null}
          <p className="flag">{item.flag}</p>
          <WeatherDetails
            countryName={item.country}
            temp={days.temp}
            wind={days.windspeed}
            key={item.id}
          />
          <button onClick={() => onClick(item.id)}>
            {item.show ? "show" : "close"}
          </button>
        </section>
      );
    } else {
      return null;
    }
  });

  const singleResult = countryNames.map((item) => {
    const lang = item.languages;
    let today = new Date().toISOString().slice(0, 10);
    const days = item.days.filter((item, ind) => today === item.datetime)[0];
    return (
      <section key={item.id}>
        <h1>{item.country}</h1>
        <p>Captial: {item.capital}</p>
        <p>Area: {item.area}</p>
        <p>Languages:</p>
        {item.languages
          ? Object.values(lang).map((item, ind) => <li key={ind + 1}>{item}</li>)
          : null}
        <h1>{item.flag}</h1>
        <WeatherDetails
          countryName={item.country}
          temp={days.temp}
          wind={days.windspeed}
          key={item.id}
        />
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
    return <section> {singleResult}</section>;
  } else {
    return <section>{results}</section>;
  }
};

export default DisplayCountries;
