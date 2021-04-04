const CountryCard = ({country}) => {

    return (
        <div>
            <h2>{country[0].name}</h2>
            <p>capital: {country[0].capital}</p>
            <p>population: {country[0].population}</p>
            <b>Languages:</b>
            <ul>
                {country[0].languages.map((lang) => <li key={lang.name}>{lang.name}</li>)}
            </ul>
            <img src={country[0].flag} alt=""/>
        </div>
    )
}

export default CountryCard