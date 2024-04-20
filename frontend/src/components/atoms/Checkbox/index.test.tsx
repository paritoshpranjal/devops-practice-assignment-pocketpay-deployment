import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CheckboxAtom from "./index";
import React from "react";

describe("CustomCheckbox", () => {
  test("renders  checkbox with default props", () => {
    render(<CheckboxAtom />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
  });
  test("renders checked checkbox when 'checked' prop is passed as true", () => {
    render(<CheckboxAtom checked={true} />);
    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });
});
