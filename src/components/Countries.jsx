import { Link } from "react-router-dom"
import useAllCountries from "../hooks/useAllCountries.js"

export default function Countries({ region }) {
	const { countries } = useAllCountries({ region })

	return (
		<>
			<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:gap-8 xl:grid-cols-4 xl:gap-14">
				{countries &&
					countries.map((country, index) => (
						<div
							key={index}
							className="overflow-hidden mx-auto mb-8 rounded-md md:mb-4 shadow-card max-w-[264px]"
						>
							<Link to={`country/${country.name.common.toLowerCase()}`}>
								<img
									src={country.flags.png}
									className="w-[264px] h-[160px]"
									alt={country.flags.alt}
								/>
							</Link>
							<div className="px-6 pt-6 dark:text-white pb-[46px] dark:bg-dark-blue">
								<h1 className="mb-4 text-lg font-extrabold">
									{country.name.common}
								</h1>
								<p className="mb-2 text-sm font-semibold">
									Population:{" "}
									<span className="font-light">
										{country.population.toLocaleString("en-US")}
									</span>
								</p>
								<p className="mb-2 text-sm font-semibold">
									Region: <span className="font-light">{country.region}</span>
								</p>
								<p className="text-sm font-semibold">
									Capital: <span className="font-light">{country.capital}</span>
								</p>
							</div>
						</div>
					))}
			</div>
		</>
	)
}
