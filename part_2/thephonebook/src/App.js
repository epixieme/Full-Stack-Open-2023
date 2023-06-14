import { useState, useEffect } from 'react'
import axios from 'axios'

import SearchPerson from "./components/SearchPerson";
import Header from "./components/Header";
import FormDetails from "./components/FormDetails";
import DisplayPeople from "./components/DisplayPeople";



const App = () => {
  const [persons, setPersons] = useState([
   
  ]);

  useEffect(()=>{
    axios.get('http://localhost:3001/persons')
    .then(response=>{
      console.log('fulfilled')
      setPersons(response.data)
    })
  })

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  const handlePersonFilter = (event) => {
    setSearch(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
    };

    const names = persons.map((item) => item.name);

    if (names.includes(newName)) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");
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
      <DisplayPeople persons={persons} search={search} />
    </div>
  );
};

export default App;
