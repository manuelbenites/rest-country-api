import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import Header from "./components/Header.jsx"
import SearchIcon from "./components/SearchIcon.jsx"

const options = [
	{
		value: "region/africa",
		content: "Africa",
	},
	{
		value: "region/americas",
		content: "America",
	},
	{
		value: "region/asia",
		content: "Asia",
	},
	{
		value: "region/europe",
		content: "Europe",
	},
	{
		value: "region/oceania",
		content: "Oceania",
	},
]

export default function App() {
	const [countries, setCountries] = useState()
	const [region, setRegion] = useState("all")
	const handleSelect = (e) => {
		setRegion(e.target.value)
	}
	useEffect(() => {
		fetch(`https://restcountries.com/v3.1/${region}`)
			.then((response) => response.json())
			.then((data) => setCountries(data))
	}, [region])
	return (
		<main>
			<Header />
			<div className="px-4">
				<div className="flex mb-10 w-full rounded-md shadow-input">
					<button className="pr-6 pl-8">
						<SearchIcon />
					</button>
					<input
						className="w-full text-xs outline-none py-[14px] placeholder:text-xs"
						placeholder="Search for a country..."
					/>
				</div>
				<div className="">
					<select
						onClick={handleSelect}
						className="pl-6 mb-8 text-xs bg-white outline-none w-[200px] py-[14px] shadow-select"
					>
						<option value="all" className="hidden">
							Filter by Region
						</option>
						{options.map((option, index) => (
							<option key={index} value={option.value}>
								{option.content}
							</option>
						))}
					</select>
				</div>
				<div className="grid gap-10 mx-auto max-w-[264px]">
					{countries &&
						countries.map((country, index) => (
							<div key={index} className="shadow-card">
								<img
									src={country.flags.png}
									className="w-[264px] h-[160px]"
									alt={country.flags.alt}
								/>
								<div className="px-6 pt-6 pb-[46px]">
									<h1 className="mb-4 text-lg font-extrabold">
										{country.name.common}
									</h1>
									<p className="mb-2 text-sm font-semibold">
										Population:{" "}
										<span className="font-light">{country.population}</span>
									</p>
									<p className="mb-2 text-sm font-semibold">
										Region: <span className="font-light">{country.region}</span>
									</p>
									<p className="text-sm font-semibold">
										Capital:{" "}
										<span className="font-light">{country.capital}</span>
									</p>
								</div>
							</div>
						))}
				</div>
			</div>
		</main>
	)
}
