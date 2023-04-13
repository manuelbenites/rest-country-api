import { options } from "../utils/resources.js"

export default function SelectRegion({ setRegion }) {
	return (
		<div className="">
			<select
				onClick={(e) => setRegion(e.target.value)}
				className="pr-6 pl-6 mb-8 text-xs bg-white rounded-md outline-none sm:text-sm dark:text-white w-[200px] py-[14px] shadow-select dark:bg-dark-blue"
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
	)
}
