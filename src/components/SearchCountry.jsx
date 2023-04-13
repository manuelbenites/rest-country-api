import { useNavigate } from "react-router-dom"
import { getCountryData } from "../services/getData.js"
import { useState } from "react"
import SearchIcon from "./SearchIcon.jsx"

export default function SearchCountry() {
	const navigate = useNavigate()
	const [errorMessage, setErrorMessage] = useState("")
	const handleFindCountry = async (e) => {
		e.preventDefault()
		const country = e.target.country.value
		const response = await getCountryData({ country })
		if (!response.ok) {
			setErrorMessage("Country Not Found")
			setTimeout(() => {
				setErrorMessage("")
			}, 2000)
		} else {
			navigate(`/country/${country}`)
		}
	}
	return (
		<form
			onSubmit={handleFindCountry}
			className="flex overflow-hidden relative mb-10 rounded-md max-w-[480px] shadow-input md:w-[480px] dark:bg-dark-blue"
		>
			<button type="submit" className="pr-6 pl-8">
				<SearchIcon className="dark:fill-white" />
			</button>
			<input
				className="w-full text-xs outline-none sm:text-sm dark:text-white py-[14px] placeholder:text-xs placeholder:sm:text-sm dark:bg-dark-blue dark:placeholder:text-white"
				name="country"
				placeholder="Search for a country..."
			/>
			<span className="absolute right-3 text-xs font-semibold text-[#b91c1c] sm:text-sm py-[14px]">
				{errorMessage}
			</span>
		</form>
	)
}
