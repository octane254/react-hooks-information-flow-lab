// Filter.test.js
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter"; // Ensure this path is correct
test("displays the <select> element", () => {
  render(<Filter onCategoryChange={() => {}} />); // Pass a mock function
  const select = screen.getByRole('combobox');
  expect(select).toBeInTheDocument();
});