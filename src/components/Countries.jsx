import { Suspense, lazy } from "react"
import useAllCountries from "../hooks/useAllCountries.js"

const Country = lazy(() => import("./Country.jsx"))

function PlaceholderCountry() {
	return (
		<img
			className="rounded-lg animate-pulse"
			src="/2B3945.svg"
			height={378}
			width={264}
		/>
	)
}

export default function Countries({ region }) {
	const { countries } = useAllCountries({ region })

	return (
		<div className="flex flex-row flex-wrap gap-x-4 gap-y-10 sm:gap-x-8 md:gap-x-12 lg:gap-x-16">
			{countries &&
				countries.map((country, index) => (
					<Suspense key={index} fallback={<PlaceholderCountry />}>
						<Country country={country} />
					</Suspense>
				))}
		</div>
	)
}
