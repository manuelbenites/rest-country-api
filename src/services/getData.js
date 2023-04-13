export const getCountryData = ({ country }) => {
	return fetch(
		`https://restcountries.com/v3.1/name/${country}?fullText=true`
	).then((data) => data)
}

export const getCountriesData = ({ region }) => {
	return fetch(`https://restcountries.com/v3.1/${region}`).then((data) =>
		data.json()
	)
}
