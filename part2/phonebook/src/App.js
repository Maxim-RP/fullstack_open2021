import { React, useState } from 'react'

const App = () => {

  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const Numbers = () => {

    return (
    <div>
      {persons.map((person)=><p key={person.name}>{person.name}</p>)}
    </div>)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const newObjectName = {name: newName}
    setPersons(persons.concat(newObjectName))
    setNewName('')
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={addPerson}>
        <label>Name:</label>
        <input value={newName} onChange={handlePersonChange}/>
        <div><button type='submit'>Add</button></div>
      </form>
      <h2>Numbers</h2>
      <Numbers />
    </div>
  )
}

export default App