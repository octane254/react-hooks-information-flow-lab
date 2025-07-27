// Header.test.js
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header"; // Ensure this path is correct
test("displays the toggle button", () => {
  render(<Header onDarkModeClick={() => {}} />); // Pass a mock function
  const button = screen.getByRole('button', { name: /toggle dark mode/i });
  expect(button).toBeInTheDocument();
});