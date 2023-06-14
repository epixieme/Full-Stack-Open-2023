const DisplayPeople = ({ persons, search }) => {
  const people = persons.map((person, ind) =>
  // still returns names as default because the search state is an empty string to start with so empty string returns true
    person.name.toLowerCase().includes(search.toLowerCase()) ? (
      <p key={ind + 1}>
        {person.name} {person.number}
      </p>
    ) : null 
  );
  return <section>{people}</section>;
};

export default DisplayPeople;
