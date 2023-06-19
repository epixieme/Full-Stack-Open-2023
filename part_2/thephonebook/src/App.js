import { useState, useEffect } from "react";

import SearchPerson from "./components/SearchPerson";
import Header from "./components/Header";
import FormDetails from "./components/FormDetails";
import DisplayPeople from "./components/DisplayPeople";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    personService.getAll().then((initialResponse) => {
      console.log("fulfilled");
      setPersons(initialResponse);
    });
  }, []);

  const handlePersonFilter = (event) => {
    setSearch(event.target.value);
  };

  const handleDelete = (name) => {

console.log(name.name)
    const confirmed = window.confirm(`Delete ${name.name}?`);

    if (confirmed) {
      const person = persons.find((p) => p.id === name.id);
      const deletePerson = { ...person };

      personService.deleteObj(person.id, deletePerson).then((returnedPerson) => {
        setPersons(persons.filter((p) => p.id !== name.id));
      });
    } else {
      console.log("cannot delete");
    }
  };

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
    };

    const names = persons.map((item) => item.name.toLowerCase());

    if (names.includes(newName.toLowerCase())) {
      alert(`${newName} is already added to the phonebook`);
    } else if (newName.length > 0) {
      personService.create(newPerson).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <SearchPerson onChange={handlePersonFilter} />
      <Header text="Phone Book" />
      <FormDetails
        newName={newName}
        newNumber={newNumber}
        handlePersonChange={handlePersonChange}
        handleNumberChange={handleNumberChange}
        onSubmit={addPerson}
      />
      <Header text="Numbers" />
      <DisplayPeople
        persons={persons}
        search={search}
        onClick={(persons) => handleDelete(persons)}
      />
    </div>
  );
};

export default App;
