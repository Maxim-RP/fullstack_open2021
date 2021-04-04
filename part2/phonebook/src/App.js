import { React, useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {

  const [persons, setPersons] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const [searchName, setSearchName] = useState('')

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter searchName={searchName} setSearchName={setSearchName}/>
      <h2>Add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons}/>
      <h2>Numbers</h2>
      <Persons persons={persons} searchName={searchName} />
    </div>
  )
}

export default App