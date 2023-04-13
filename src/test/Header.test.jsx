import { describe, test, expect } from "vitest"
import Header from "../components/Header.jsx"
import { render, screen } from "@testing-library/react"

describe("Test", () => {
	test("Should render Header Component", () => {
		render(<Header />)
		const linkElement = screen.getByText(/Where in the world?/i)
		expect(linkElement).toBeDefined()
	})
})
