import MoonIcon from "./MoonIcon.jsx"
import SunIcon from "./SunIcon.jsx"

import { useState } from "react"

export default function Layout() {
	const [theme, setTheme] = useState("")
	const handleChangeTheme = () => {
		const htmlClass = document.documentElement.classList
		if (htmlClass.value === "dark") {
			setTheme("dark")
			htmlClass.remove("dark")
		} else {
			setTheme("")
			htmlClass.add("dark")
		}
	}

	return (
		<header className="px-4 md:px-20 shadow-header dark:bg-dark-blue">
			<nav className="flex justify-between items-center h-20">
				<h1 className="font-extrabold sm:text-2xl dark:text-white text-[14px]">
					Where in the world?
				</h1>
				<button
					onClick={handleChangeTheme}
					className="flex items-center text-xs font-semibold"
				>
					{theme !== "dark" ? (
						<>
							<SunIcon className="dark:fill-white" />
							<span className="ml-2 dark:text-white text-[12px] sm:text-[16px]">
								Light Mode
							</span>
						</>
					) : (
						<>
							<MoonIcon className="dark:fill-white" />
							<span className="ml-2 dark:text-white text-[12px] sm:text-[16px]">
								Dark Mode
							</span>
						</>
					)}
				</button>
			</nav>
		</header>
	)
}
