import { useState } from "react"
import Countries from "../components/Countries"
import SetCountryRegion from "../components/SetCountryRegion"

export default function Home() {
	const [region, setRegion] = useState("all")
	return (
		<main className="pt-6 pb-14 min-h-screen md:pt-12 dark:bg-very-dark-blue">
			<section className="px-4 md:px-8 lg:px-12 xl:px-20">
				<SetCountryRegion setRegion={setRegion} />
				<Countries region={region} />
			</section>
		</main>
	)
}
