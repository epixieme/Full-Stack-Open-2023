const DisplayPeople = ({ persons, search }) => {
  return (
    <section>
      {persons.map((person) => {
        if (person.name.toLowerCase().includes(search.toLowerCase())) {
          return (
            <p>
            {person.name} {person.number}
          </p>
          )
        }
      })}
    </section>
  );
};

export default DisplayPeople;


