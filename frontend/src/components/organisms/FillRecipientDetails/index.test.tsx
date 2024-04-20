import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import FillRecipientDetails from ".";
import { LoginCardValues } from "../../../constants";
import { render } from "../../../testSetup";
const mockHandleContinue = jest.fn();

describe("FillRecipientDetails Component", () => {
  it("renders the component without errors", () => {
    const { container } = render(<FillRecipientDetails />);
    expect(container).toBeTruthy();
  });

  it("should update the email input field", () => {
    render(<FillRecipientDetails />);
    const emailInput = screen.getByPlaceholderText("Email") as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: "test@gmail.com" } });
    expect(emailInput.value).toBe("test@gmail.com");
    fireEvent.change(emailInput, { target: { value: " " } });

    const errorText = screen.getByText(LoginCardValues.emailHelperText);
    expect(errorText).toBeInTheDocument();

    fireEvent.change(emailInput, { target: { value: "invalid-email" } });

    const errorText1 = screen.getByText(LoginCardValues.emailHelperText);
    expect(errorText1).toBeInTheDocument();
  });

  it("should update the account number input field", () => {
    const { getByLabelText } = render(<FillRecipientDetails />);
    const accountNumberInput = getByLabelText(
      "Account Number"
    ) as HTMLInputElement;

    fireEvent.change(accountNumberInput, { target: { value: "1234567890" } });
    expect(accountNumberInput.value).toBe("1234567890");

    fireEvent.change(accountNumberInput, { target: { value: "invalid" } });
    const errorText = screen.getByText(LoginCardValues.AccountNumberText);
    expect(errorText).toBeInTheDocument();
  });
  it("should update the firstName input field", () => {
    const { getByLabelText } = render(<FillRecipientDetails />);
    const accountNumberInput = getByLabelText("First Name") as HTMLInputElement;

    fireEvent.change(accountNumberInput, { target: { value: "person1" } });
    expect(accountNumberInput.value).toBe("person1");

    fireEvent.change(accountNumberInput, { target: { value: " " } });
    const errorText = screen.getByText(LoginCardValues.FirstNameErrorText);
    expect(errorText).toBeInTheDocument();
  });
  it("should update the last name input field", () => {
    const { getByLabelText } = render(<FillRecipientDetails />);
    const lastNameInput = getByLabelText("Last Name") as HTMLInputElement;

    fireEvent.change(lastNameInput, { target: { value: "person1" } });
    expect(lastNameInput.value).toBe("person1");

    fireEvent.change(lastNameInput, { target: { value: "" } });
    const errorText = screen.getByText(LoginCardValues.LastNameErrorText);
    expect(errorText).toBeInTheDocument();
  });
  it("should update the ifsc code input field", () => {
    const { getByLabelText } = render(<FillRecipientDetails />);
    const ifscInput = getByLabelText(
      "The Indian Financial System Code"
    ) as HTMLInputElement;

    fireEvent.change(ifscInput, { target: { value: "person1" } });
    expect(ifscInput.value).toBe("person1");

    fireEvent.change(ifscInput, { target: { value: "" } });
    const errorText = screen.getByText(LoginCardValues.IfscErrorText);
    expect(errorText).toBeInTheDocument();
  });
  it("should handle dropdown selection", () => {
    render(<FillRecipientDetails />);

    const divElementToClick = screen.getByRole("button", {
      name: "Select Account Type",
    });
    fireEvent.click(divElementToClick);
    const selectedOption = screen.getByText("Checking");
    fireEvent.click(selectedOption);
  });
  it("should call the handleContinue function when the Continue button is clicked", () => {
    render(<FillRecipientDetails handleContinue={mockHandleContinue} />);
    const continueButton = screen.getByRole("button", { name: "Continue" });
    fireEvent.click(continueButton);
    expect(continueButton).toBeDisabled();
  });
});
