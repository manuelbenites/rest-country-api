import { Suspense, lazy } from "react"
import { Routes, Route } from "react-router-dom"

const Layout = lazy(() => import("./components/Layout"))
const CountryPage = lazy(() => import("./pages/CountryPage"))
const NotFound = lazy(() => import("./pages/NotFound"))
const Home = lazy(() => import("./pages/Home"))

export default function App() {
	return (
		<Suspense fallback={null}>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="country/:country" element={<CountryPage />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</Suspense>
	)
}
