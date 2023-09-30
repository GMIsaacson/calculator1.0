import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PercentageChangeCalculator from "./PercentageChangeCalculator";

test("it should calculate percentage increase", () => {
  render(<PercentageChangeCalculator />);

  // Fill in the input fields
  fireEvent.change(screen.getByPlaceholderText("Enter a number"), {
    target: { value: "100" }
  });
  fireEvent.change(screen.getByPlaceholderText("Enter a percentage"), {
    target: { value: "10" }
  });

  // Select 'Increase' from the dropdown
  fireEvent.change(screen.getByRole("combobox"), {
    target: { value: "increase" }
  });

  // Click the Calculate button
  fireEvent.click(screen.getByText("Calculate"));

  // Assert that the correct result is displayed
  expect(screen.getByText("Result: 110.00")).toBeInTheDocument();
});

test("it should calculate percentage decrease", () => {
  render(<PercentageChangeCalculator />);

  // Fill in the input fields
  fireEvent.change(screen.getByPlaceholderText("Enter a number"), {
    target: { value: "200" }
  });
  fireEvent.change(screen.getByPlaceholderText("Enter a percentage"), {
    target: { value: "20" }
  });

  // Select 'Decrease' from the dropdown
  fireEvent.change(screen.getByRole("combobox"), {
    target: { value: "decrease" }
  });

  // Click the Calculate button
  fireEvent.click(screen.getByText("Calculate"));

  // Assert that the correct result is displayed
  expect(screen.getByText("Result: 166.67")).toBeInTheDocument();
});
