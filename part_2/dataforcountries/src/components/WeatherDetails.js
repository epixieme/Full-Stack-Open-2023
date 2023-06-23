const WeatherDetails = ({ countryName, temp, wind, key}) => {
  return (
    <section key={key}>
      <h2 className = 'secondary-header'>Weather in {countryName}</h2>
      <p>Temperature is {temp} celcius</p>
      <p>Windspeed is {wind} mph</p>
    </section>
  );
};

export default WeatherDetails;
