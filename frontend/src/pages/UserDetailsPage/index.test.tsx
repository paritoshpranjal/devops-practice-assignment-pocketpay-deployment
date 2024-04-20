import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { UserDetailsPage } from ".";
import { render } from "../../testSetup";

describe("user details page component", () => {
  test("renders the user details page", () => {
    render(<UserDetailsPage />);
    const stepper = screen.getByText("Your details");
    expect(stepper).toBeInTheDocument();
  });

  test("enters the value to input fields ,dropdown,calendar input", () => {
    render(<UserDetailsPage />);
    const firstNameInput = screen.getByLabelText("First name");
    const lastNameInput = screen.getByLabelText("Last name");
    const dobInput = screen.getByLabelText("Date of birth");
    const selectCountryField = screen.getByRole("button", {
      name: "Country of residence",
    });
    const addressInput = screen.getByLabelText("Home Address");
    const cityInput = screen.getByLabelText("City");
    const postalCodeInput = screen.getByLabelText("Postal code");
    const continueButton = screen.getByText("Continue");

    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(dobInput, { target: { value: "18-11-2001" } });
    fireEvent.mouseDown(selectCountryField);
    fireEvent.click(screen.getByRole("option", { name: /India/i }));
    fireEvent.change(addressInput, { target: { value: "123 Main St" } });
    fireEvent.change(cityInput, { target: { value: "New York" } });
    fireEvent.change(postalCodeInput, { target: { value: "10001" } });

    expect(continueButton).not.toBeDisabled();
    fireEvent.click(continueButton);
  });
  test("Continue button to be disabled initially", () => {
    render(<UserDetailsPage />);
    const continueButton = screen.getByRole("button",{name : "Continue"});
    expect(continueButton).toBeDisabled();
  });
  test("Continue button to be disabled if all the data are not filled", () => {
    render(<UserDetailsPage />);
    const continueButton = screen.getByRole("button",{name : "Continue"});
    expect(continueButton).toBeDisabled();

    const firstNameInput = screen.getByLabelText("First name");
    const lastNameInput = screen.getByLabelText("Last name");
    const dobInput = screen.getByLabelText("Date of birth");
    const selectCountryField = screen.getByRole("button", {
      name: "Country of residence",
    });

    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(dobInput, { target: { value: "18-11-2001" } });
    fireEvent.mouseDown(selectCountryField);
    fireEvent.click(screen.getByRole("option", { name: /India/i }));

    expect(continueButton).toBeDisabled();

  });
});
