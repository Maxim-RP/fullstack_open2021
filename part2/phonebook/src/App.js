import { React, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')

  const Numbers = () => {

    return (
      <div>
        {namesToShow.map((person) => <p key={person.name}>{person.name} {person.number}</p>)}
      </div>)
  }

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some((item) => item.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
    } else {
      const newObjectName = { name: newName, number: newNumber }
      setPersons(persons.concat(newObjectName))
      setNewName('')
      setNewNumber('')
    }
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePersonChangeNum = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchNameChange = (event) => {
    setSearchName(event.target.value)
  }

  const namesToShow = searchName === ''
  ? persons
  : persons.filter(person => person.name.toLowerCase().match(searchName.toLowerCase()))

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter />
      <PersonForm />
      <Persons />
      <label>Filter shown with:</label>
      <input value={searchName} onChange={handleSearchNameChange}/>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
        <label>Name:</label>
        <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
        <label>Number:</label>
        <input value={newNumber} onChange={handlePersonChangeNum} />
        </div>
        <button type='submit'>Add</button>
      </form>
      <h2>Numbers</h2>
      <Numbers />
    </div>
  )
}

export default App