import { React } from 'react'
import CountryCard from './CountryCard'

const FilteredCountries = ({ searchName, setSearchName, countries }) => {

    const handleSearchNameChange = (event) => {
        setSearchName(event.target.value)
    }

    const filterBySearch = (country) => (country.name.toLowerCase().match(searchName.toLowerCase()))

    const countriesToShow = searchName === ''
        ? ''
        : countries
            .filter(country => filterBySearch(country))
            .length <= 10
            &&
            countries
                .filter(country => filterBySearch(country))
                .length !== 1
            ? countries
                .filter(country => filterBySearch(country))
                .map((country) => <p key={country.name}>{country.name}</p>)
            : countries
                .filter(country => filterBySearch(country))
                .length === 1
                ? <CountryCard country={countries.filter(country => filterBySearch(country))}/>
                : <p>Too many</p>

    return (
        <div>
            <label>Find countries: </label>
            <input value={searchName} onChange={handleSearchNameChange} />
            {countriesToShow}
        </div>
    )
}

export default FilteredCountries