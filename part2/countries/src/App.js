import { React, useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'

const App = () => {

  const [countries, setCountries] = useState([])
  const [searchName, setSearchName] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  return (
    <div>
      <Filter searchName={searchName} setSearchName={setSearchName} countries={countries}/>
    </div>
  )
}

export default App