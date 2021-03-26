import { React } from 'react'

const Filter = ({searchName, setSearchName}) => {

    const handleSearchNameChange = (event) => {
        setSearchName(event.target.value)
    }

    return (
        <div>
            <label>Filter shown with:</label>
            <input value={searchName} onChange={handleSearchNameChange} />
        </div>
    )
}

export default Filter