import { Link } from "react-router-dom"

export default function NotFound() {
	return (
		<main className="min-h-screen dark:bg-very-dark-blue">
			<section className="">
				<div className="absolute top-2/4 left-2/4 text-center -translate-x-2/4 -translate-y-2/4">
					<div className="flex flex-col gap-4 items-center">
						<h1 className="font-semibold sm:text-sm dark:text-white text-[12px]">
							Error, Page Not Found
						</h1>
						<Link to="/">
							<div className="flex justify-center items-center w-28 h-8 font-semibold rounded-sm sm:text-sm dark:text-white shadow-button text-[12px] dark:bg-dark-blue">
								Go to Home
							</div>
						</Link>
					</div>
				</div>
			</section>
		</main>
	)
}
