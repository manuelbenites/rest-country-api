import SearchCountry from "./SearchCountry"
import SelectRegion from "./SelectRegion"

export default function SetCountryRegion({ setRegion }) {
	return (
		<div className="flex flex-col md:flex-row md:justify-between">
			<SearchCountry />
			<SelectRegion setRegion={setRegion} />
		</div>
	)
}
