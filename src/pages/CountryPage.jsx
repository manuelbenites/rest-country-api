import { useParams, useNavigate } from "react-router-dom"
import { findCountry } from "../utils/countrycode.js"
import useCountry from "../hooks/useCountry.js"

import LeftIcon from "../components/LeftIcon.jsx"

export default function CountryPage() {
	const navigate = useNavigate()
	const { country } = useParams()
	const { currentCountry } = useCountry({ country })

	const handleClick = (e) => {
		e.preventDefault()
		navigate("/")
	}

	return (
		<main className="pt-8 min-h-screen md:pt-20 dark:bg-very-dark-blue">
			{currentCountry && (
				<div className="px-7 pb-10 md:px-20">
					<button
						className="flex justify-center items-center mb-16 h-8 rounded-md sm:h-10 w-[104px] shadow-button sm:w-[136px] dark:bg-dark-blue"
						onClick={handleClick}
					>
						<LeftIcon className="dark:fill-white" />
						<span className="ml-2 sm:text-sm dark:text-white text-[12px]">
							Back
						</span>
					</button>
					<div className="justify-between md:flex md:gap-11">
						<img
							className="mx-auto h-full rounded-md md:mx-0 md:w-full max-w-[560px]"
							src={currentCountry.flags.png}
							alt={currentCountry.flags.alt}
						/>
						<div className="my-auto mx-auto md:mx-0 dark:text-white w-[320px] lg:w-[560px]">
							<h1 className="mt-11 mb-4 font-extrabold md:mt-0 text-[22px] sm:text-[32px]">
								{currentCountry.name.common}
							</h1>
							<div className="mx-auto lg:grid lg:grid-cols-2">
								<div className="mb-8 text-sm leading-8 lg:mb-0 sm:text-[16px]">
									<p className="font-semibold">
										Native Name:{" "}
										<span className="font-light">
											{Object.values(currentCountry.name.nativeName)[0].common}
										</span>
									</p>
									<p className="font-semibold">
										Population:{" "}
										<span className="font-light">
											{currentCountry.population.toLocaleString("en-US")}
										</span>
									</p>
									<p className="font-semibold">
										Region:{" "}
										<span className="font-light">{currentCountry.region}</span>
									</p>
									<p className="font-semibold">
										Sub Region:{" "}
										<span className="font-light">
											{currentCountry.subregion}
										</span>
									</p>
									<p className="font-semibold">
										Capital:{" "}
										<span className="font-light">{currentCountry.capital}</span>
									</p>
								</div>
								<div className="text-sm leading-8 sm:text-[16px]">
									<p className="font-semibold">
										Top Level Domain:{" "}
										<span className="font-light">{currentCountry.tld}</span>
									</p>
									<p className="font-semibold">
										Currencies:{" "}
										<span className="font-light">
											{Object.keys(currentCountry.currencies) &&
												Object.keys(currentCountry.currencies)}
										</span>
									</p>
									<div className="font-semibold break-words">
										<span>Languages: </span>
										{Object.values(currentCountry.languages).map(
											(item, index) => (
												<span className="ml-1 font-light" key={index}>
													{item}
													{index !==
														Object.values(currentCountry.languages).length -
															1 && ","}
												</span>
											)
										)}
									</div>
								</div>
							</div>
							<div className="mt-[34px]">
								<h1 className="mb-4 font-semibold text-[16px]">
									Border Countries:
								</h1>
								<div className="flex flex-wrap gap-3">
									{currentCountry.borders &&
										currentCountry.borders.map((item, index) => (
											<div
												key={index}
												className="flex justify-center w-24 rounded-sm sm:text-sm py-[6px] text-[12px] shadow-label dark:bg-dark-blue"
											>
												{findCountry(item)}
											</div>
										))}
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</main>
	)
}
