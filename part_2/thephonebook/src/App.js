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
    const confirmed = window.confirm(`Delete ${name.name}?`);

    if (confirmed) {
      const person = persons.find((p) => p.id === name.id);
      const deletePerson = { ...person };

      personService
        .deleteObj(person.id, deletePerson)
        .then((returnedPerson) => {
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

    const matching = persons.filter((item) => item.name === newName);

    console.log(matching)
    if (matching.length > 0 && newNumber.length > 0) {
      window.confirm(
        `${newName} is already added to the phonebook. Do you want to update the number?`
      );

      if (window.confirm) {
        const id = matching[0].id;
        const person = persons.find((p) => p.id === id);
        const changedPerson = {
          ...person,
          number: newNumber,
        };

        personService.update(id, changedPerson).then((returnedPerson) => {
          setPersons(
            persons.map((person) =>
              person.id !== id ? person : returnedPerson
            )
          );
        });
      }
    }else if (matching.length > 0) {
      alert(`${newName} is already added to the phonebook.`);
    }
    else if (matching.length === 0 && newName.length > 0) {
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
        key={persons}
      />
    </div>
  );
};

export default App;
