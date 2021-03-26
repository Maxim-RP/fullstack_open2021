import { React, useState } from 'react'

const PersonForm = ({persons, setPersons}) => {

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

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

    return (
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
    )
}

export default PersonForm