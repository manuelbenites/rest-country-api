import { createRoot } from "react-dom/client"
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from "react-router-dom"
import "./main.css"
import App from "./App.jsx"
import CountryPage from "./pages/CountryPage.jsx"
import NotFound from "./pages/NotFound.jsx"
import Layout from "./components/Layout.jsx"

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<App />} />
			<Route path="country/:country" element={<CountryPage />} />
			<Route path="*" element={<NotFound />} />
		</Route>
	)
)

const root = createRoot(document.getElementById("app"))

root.render(<RouterProvider router={router} />)
