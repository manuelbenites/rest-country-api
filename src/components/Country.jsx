import { Link } from "react-router-dom"

export default function Country({ country }) {
	return (
		<div className="overflow-hidden rounded-md shadow-card w-[264px]">
			<Link to={`country/${country.name.common.toLowerCase()}`}>
				<img
					className="object-cover w-[264px] h-[160px]"
					src={country.flags.png}
					alt={country.flags.alt}
					loading="lazy"
				/>
			</Link>
			<div className="px-6 pt-6 dark:text-white pb-[46px] dark:bg-dark-blue">
				<h1 className="mb-4 text-lg font-extrabold">{country.name.common}</h1>
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
	)
}
