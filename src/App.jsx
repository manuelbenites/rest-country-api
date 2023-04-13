import { useState } from "react"

import Countries from "./components/Countries.jsx"
import SelectRegion from "./components/SelectRegion.jsx"
import SearchCountry from "./components/SearchCountry.jsx"

export default function App() {
	const [region, setRegion] = useState("all")

	return (
		<main className="pt-6 pb-14 min-h-screen md:pt-12 dark:bg-very-dark-blue">
			<section className="px-4 xl:px-20">
				<div className="flex flex-col md:flex-row md:justify-between">
					<SearchCountry />
					<SelectRegion setRegion={setRegion} />
				</div>
				<Countries region={region} />
			</section>
		</main>
	)
}
