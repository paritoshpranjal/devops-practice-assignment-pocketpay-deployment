import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { CreatePasswordCard } from ".";
import { LoginCardValues } from "../../../constants";
import { SignUpContextProvider } from "../../../context/CountryContext";

describe("Create password component", () => {
  const handleButton = jest.fn()
  test("renders the Create password", () => {
    render(<CreatePasswordCard handleContinueButton={handleButton}/>,{ wrapper: SignUpContextProvider });
    const loginElement = screen.getByText("Create your password");
    expect(loginElement).toBeInTheDocument();
  });
  test("renders password input field", () => {
    render(<CreatePasswordCard handleContinueButton={handleButton} />,{ wrapper: SignUpContextProvider });
    const passwordInput = screen.getByPlaceholderText(LoginCardValues.passwordPlaceholder);
    expect(passwordInput).toBeInTheDocument();
  });

  test("password input field updates on change", () => {
    render(<CreatePasswordCard handleContinueButton={handleButton}/>,{ wrapper: SignUpContextProvider });
    const passwordInput = screen.getByPlaceholderText(
      LoginCardValues.passwordPlaceholder
    ) as HTMLInputElement;
    fireEvent.change(passwordInput, { target: { value: "Password@123" } });
    expect(passwordInput.value).toBe("Password@123");

    const eyeButton = screen.getAllByRole("button");
    expect(eyeButton[0]).toBeInTheDocument();
    fireEvent.click(eyeButton[0]);
    expect(passwordInput.type).toBe("text");
    const continueButton = screen.getByRole("button", { name: "Continue" });
    fireEvent.click(continueButton)
  });
  test("password input field updates on change with error", () => {
    render(<CreatePasswordCard handleContinueButton={handleButton}/>,{ wrapper: SignUpContextProvider });
    const passwordInput = screen.getByPlaceholderText(
     LoginCardValues.passwordPlaceholder
    ) as HTMLInputElement;
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    expect(
      screen.getByText(LoginCardValues.passwordHelperText)
    ).toBeInTheDocument();
  });
  test("input fields focus correctly", () => {
    render(<CreatePasswordCard handleContinueButton={handleButton} />,{ wrapper: SignUpContextProvider });
    const passwordInput = screen.getByPlaceholderText(LoginCardValues.passwordPlaceholder);
    fireEvent.focus(passwordInput);
    fireEvent.blur(passwordInput);
    fireEvent.change(passwordInput, { target: { value: "password@123" } });
    fireEvent.blur(passwordInput);
  });

});
