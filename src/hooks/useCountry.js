import { useState, useEffect } from "react"
import { getCountryData } from "../services/getData.js"

export default function useCountry({ country }) {
	const [currentCountry, setCurrentCountry] = useState()

	useEffect(() => {
		getCountryData({ country })
			.then((data) => data.json())
			.then((result) => setCurrentCountry(result[0]))
	}, [])

	return { currentCountry }
}
