import { React } from 'react'

const Persons = ({persons, searchName}) => {
    
    const namesToShow = searchName === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().match(searchName.toLowerCase()))

    return (
        <div>
            {namesToShow.map((person) => <p key={person.name}>{person.name} {person.number}</p>)}
        </div>
    )
}

export default Persons