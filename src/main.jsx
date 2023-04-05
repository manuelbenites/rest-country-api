import { createRoot } from "react-dom/client"
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link,
} from "react-router-dom"
import "./main.css"
import App from "./App.jsx"
import CountryPage from "./components/CountryPage.jsx"

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/:country",
		element: <CountryPage />,
	},
])

const root = createRoot(document.getElementById("app"))

root.render(<RouterProvider router={router} />)
