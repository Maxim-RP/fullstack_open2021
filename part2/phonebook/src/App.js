import { React, useState } from 'react'

const App = () => {

  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const Numbers = () => {

    return (
    <div>
      {persons.map((person)=><p>{person.name}</p>)}
    </div>)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const newObjectName = {name: newName}
    setPersons(persons.concat(newObjectName))
    setNewName('')
    console.log(persons)
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Numbers />
      <form onSubmit={addPerson}>
        <input value={newName} onChange={handlePersonChange}/>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default App