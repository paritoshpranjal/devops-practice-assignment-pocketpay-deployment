import React from "react";
import {  screen, fireEvent } from "@testing-library/react";
import SignUpDetailsPage from ".";
import { LoginCardValues } from "../../constants";
import { render } from "../../testSetup";

describe("SignUpDetailsPage component", () => {
  it("renders the AccountType component initially", () => {
    render(<SignUpDetailsPage />);

    const card = screen.getByText("Business account");
    expect(card).toBeInTheDocument();
    fireEvent.click(card);

    const divElementToClick = screen.getByRole("button", {
      name: "Select your country",
    });
    fireEvent.click(divElementToClick);

    const selectedOption = screen.getByText("India");
    fireEvent.click(selectedOption);

    const continueButt = screen.getByRole("button", { name: "Continue" });
    fireEvent.click(continueButt);

    const inputField = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(inputField, { target: { value: "9898989898" } });
    expect(inputField.value).toBe("+91 9898989898");

    const continueButtonOnclick = screen.getByRole("button", { name: "Continue" });
    fireEvent.click(continueButtonOnclick);
    expect(continueButtonOnclick).toBeEnabled();

    const notReceivedLink = screen.getByTestId("notReceived");
    fireEvent.click(notReceivedLink);
    fireEvent.click(screen.getByText("Use a different phone number"));

    const continueButton = screen.getByRole("button", { name: "Continue" });
    fireEvent.click(continueButton);

    const otpInput = screen.getByPlaceholderText("Enter code here");
    fireEvent.change(otpInput, { target: { value: "123456" } });

    const submitButton = screen.getByRole("button", { name: "Submit" });
    fireEvent.click(submitButton);
    const passwordInput = screen.getByPlaceholderText(
      LoginCardValues.passwordPlaceholder
    ) as HTMLInputElement;
    fireEvent.change(passwordInput, { target: { value: "Password@123" } });
    expect(passwordInput.value).toBe("Password@123");
    const continueButtonClick = screen.getByRole("button", {
      name: "Continue",
    });
    fireEvent.click(continueButtonClick);

    const backButton = screen.getByTestId("back-button");
    fireEvent.click(backButton);
    fireEvent.click(backButton);
  });
  it("click on back button", () => {
    render(<SignUpDetailsPage />);
    const backButton = screen.getByTestId("back-button");
    fireEvent.click(backButton);
  });
  it("rendering two account cards",()=>{
    render(<SignUpDetailsPage />);

    const card = screen.getByText("Personal account");
    expect(card).toBeInTheDocument();
    fireEvent.click(card);
  })
});
