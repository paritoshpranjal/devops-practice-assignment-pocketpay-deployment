import React from "react";
import { SelectCountry } from ".";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { SignUpContextProvider } from "../../../context/CountryContext";

const mockHandleClick = jest.fn();

describe("SelectCountry Component", () => {
  it("renders without errors", async () => {
    render(<SelectCountry handleClick={mockHandleClick} />,{ wrapper: SignUpContextProvider });
    const headerElement = screen.getByText("Your country of registration");
    expect(headerElement).toBeInTheDocument();

    const inputElement = screen.getByText("Select your country");
    const inputfield = screen.getByTestId("input-field");
    expect(inputElement).toBeInTheDocument();
    expect(inputfield).toBeInTheDocument();

    const divElementToClick = screen.getByRole("button", {
      name: "Select your country",
    });
    fireEvent.click(divElementToClick);

    const selectedOption = screen.getByText("United Kingdom");
    fireEvent.click(selectedOption);
  });
});
