import MoonIcon from "./MoonIcon.jsx"

export default function Layout() {
	return (
		<header className="px-4 mb-6 shadow-header">
			<nav className="flex justify-between items-center h-20">
				<a className="font-extrabold text-[14px]" href="/">
					Where in the world?
				</a>
				<button className="flex items-center text-xs font-semibold">
					<MoonIcon />
					<span className="ml-2">Dark Mode</span>
				</button>
			</nav>
		</header>
	)
}
