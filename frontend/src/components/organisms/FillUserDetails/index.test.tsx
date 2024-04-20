import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, screen } from "@testing-library/react";
import { FillUserDetails } from ".";
import { emptyFieldText } from "../../../constants";
import {render} from "../../../testSetup"
const clickContinue = jest.fn();
describe("Fill user details", () => {
  test("renders the component correctly and click on continue button", () => {
    render(<FillUserDetails onClickContinue={clickContinue} />);
    expect(screen.getByTestId("fillUserDetails")).toBeInTheDocument;
  });
  test("enters the value to input fields ,dropdown,calendar input", () => {
    render(<FillUserDetails onClickContinue={clickContinue} />);
    const textfields = screen.getAllByRole("textbox");
    fireEvent.change(textfields[0], { target: { value: "first name" } });
    fireEvent.change(textfields[2], { target: { value: "18-11-2001" } });
    const selectCountryField = screen.getByRole("button", {
      name: "Country of residence",
    });
    fireEvent.mouseDown(selectCountryField);
    fireEvent.click(screen.getByRole("option", { name: /India/i }));
  });
  test("should disable the continue button initially", () => {
    render(<FillUserDetails onClickContinue={clickContinue} />);
    const continueButton = screen.getByRole("button", { name: "Continue" });
    expect(continueButton).toBeDisabled();
  });
  test("should enable the continue button when all fields are filled", () => {
    const onClickContinue = jest.fn();
    const { getByLabelText, getByText } = render(
      <FillUserDetails onClickContinue={onClickContinue} />
    );

    const firstNameInput = getByLabelText("First name");
    const lastNameInput = getByLabelText("Last name");
    const dobInput = getByLabelText("Date of birth");
    const selectCountryField = screen.getByRole("button", {
      name: "Country of residence",
    });
    const addressInput = getByLabelText("Home Address");
    const cityInput = getByLabelText("City");
    const postalCodeInput = getByLabelText("Postal code");
    const continueButton = getByText("Continue");

    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(dobInput, { target: { value: "18-11-2001" } });
    fireEvent.mouseDown(selectCountryField);
    fireEvent.click(screen.getByRole("option", { name: /India/i }));
    fireEvent.change(addressInput, { target: { value: "123 Main St" } });
    fireEvent.change(cityInput, { target: { value: "New York" } });
    fireEvent.change(postalCodeInput, { target: { value: "10001" } });

    expect(continueButton).not.toBeDisabled();
  });
  test("firsetname text field should show the helper text", () => {
    const onClickContinue = jest.fn();
    const { getByLabelText } = render(
      <FillUserDetails onClickContinue={onClickContinue} />
    );

    const firstNameInput = getByLabelText("First name");

    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(firstNameInput, { target: { value: "" } });
    expect(screen.getByText(emptyFieldText)).toBeInTheDocument();
  });
  test("lastname text field should show the helper text", () => {
    const onClickContinue = jest.fn();
    render(<FillUserDetails onClickContinue={onClickContinue} />);

    const lastNameInput = screen.getByLabelText("Last name");
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(lastNameInput, { target: { value: "" } });
    expect(screen.getByText(emptyFieldText)).toBeInTheDocument();
  });
  test("addressInput text field should show the helper text", () => {
    const onClickContinue = jest.fn();
    render(<FillUserDetails onClickContinue={onClickContinue} />);

    const addressInput = screen.getByLabelText("Home Address");
    fireEvent.change(addressInput, { target: { value: "123 Main St" } });
    fireEvent.change(addressInput, { target: { value: "" } });
    expect(screen.getByText(emptyFieldText)).toBeInTheDocument();
  });
  test("cityInput text field should show the helper text", () => {
    const onClickContinue = jest.fn();
    render(<FillUserDetails onClickContinue={onClickContinue} />);

    const cityInput = screen.getByLabelText("City");
    fireEvent.change(cityInput, { target: { value: "New York" } });
    fireEvent.change(cityInput, { target: { value: "" } });
    expect(screen.getByText(emptyFieldText)).toBeInTheDocument();
  });
  test("postalCodeInput text field should show the helper text", () => {
    const onClickContinue = jest.fn();
    render(<FillUserDetails onClickContinue={onClickContinue} />);

    const postalCodeInput = screen.getByLabelText("Postal code");
    fireEvent.change(postalCodeInput, { target: { value: "10001" } });
    fireEvent.change(postalCodeInput, { target: { value: "" } });
    expect(screen.getByText(emptyFieldText)).toBeInTheDocument();
  });
});
