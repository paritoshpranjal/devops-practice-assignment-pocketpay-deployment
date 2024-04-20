import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import BusinessSearch from ".";
import {render} from "../../../testSetup"

const handleDropDownClick = jest.fn();
describe("BusinessSearch", () => {
  it("renders without errors", () => {
    render(<BusinessSearch handleDropdownClick={handleDropDownClick} />);
    const headerElement = screen.getByText("Search for your business");
    expect(headerElement).toBeInTheDocument();
  });

  it("updates the search value when the input changes", () => {
    render(<BusinessSearch handleDropdownClick={handleDropDownClick} />);
    const inputElement = screen.getByPlaceholderText("Select your Business");

    fireEvent.change(inputElement, { target: { value: "Test Value" } });

    expect(inputElement).toHaveValue("Test Value");
  });
  it("renders the input field with the correct placeholder", () => {
    render(<BusinessSearch handleDropdownClick={handleDropDownClick} />);
    const inputElement = screen.getByPlaceholderText("Select your Business");
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, { target: { value: "z" } });
    const option = screen.getByText(/zemoso/i);
    expect(option).toBeInTheDocument;
    fireEvent.click(option);
    expect(screen.queryByText(/Zentech/i)).not.toBeInTheDocument;
  });
});
