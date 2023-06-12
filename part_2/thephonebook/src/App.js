import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
console.log(persons)
  const addDetails = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
    };

    persons.forEach((item) =>
      item.name.toLowerCase() === newPerson.name.toLowerCase()
        ? alert(`${item.name} is already added to the phonebook`)
        : setPersons(persons.concat(newPerson))
    );
  };

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addDetails}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <section>
        {persons.map((person) => (
          <p>{person.name}</p>
        ))}
      </section>
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
