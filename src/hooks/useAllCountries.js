import { useState, useEffect } from "react"
import { getCountriesData } from "../services/getData.js"

export default function useAllCountries({ region }) {
	const [countries, setCountries] = useState([])
	useEffect(() => {
		getCountriesData({ region }).then((result) => setCountries(result))
	}, [region])

	return { countries }
}
