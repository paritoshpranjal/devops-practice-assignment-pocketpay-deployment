import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { LoginCard } from ".";
import { LoginCardValues } from "../../../constants";
import { render } from "../../../testSetup";

describe("Login Card component", () => {
  test("renders the Login card", () => {
    render(<LoginCard />);
    const loginElement = screen.getByText(LoginCardValues.heading);
    expect(loginElement).toBeInTheDocument();
  });

  test("renders the text field successfully", () => {
    render(<LoginCard />);
    const inputFields = screen.getAllByRole("textbox") as HTMLElement[];

    inputFields.forEach((inputField) => {
      expect(inputField).toBeInstanceOf(HTMLInputElement);
    });
  });
  test("renders email input field", () => {
    render(<LoginCard />);
    const emailInput = screen.getByPlaceholderText(LoginCardValues.emailPlaceholder);
    expect(emailInput).toBeInTheDocument();
  });

  test("renders password input field", () => {
    render(<LoginCard />);
    const passwordInput = screen.getByPlaceholderText(LoginCardValues.passwordPlaceholder);
    expect(passwordInput).toBeInTheDocument();
  });

  test("email input field updates on change", () => {
    render(<LoginCard />);
    const emailInput = screen.getByPlaceholderText(
      LoginCardValues.emailPlaceholder
    ) as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: "vidhya@gmail.com" } });
    expect(emailInput.value).toBe("vidhya@gmail.com");
  });

  test("password input field updates on change", () => {
    render(<LoginCard />);
    const passwordInput = screen.getByPlaceholderText(
      LoginCardValues.passwordPlaceholder
    ) as HTMLInputElement;
    fireEvent.change(passwordInput, { target: { value: "password@123" } });
    expect(passwordInput.value).toBe("password@123");
    fireEvent.focus(passwordInput);

    const eyeButton = screen.getAllByRole("button");

    expect(eyeButton[0]).toBeInTheDocument();

    fireEvent.click(eyeButton[0]);
    expect(passwordInput.type).toBe("text");
  });
  test("email input field updates on change with error", () => {
    render(<LoginCard />);
    const emailInput = screen.getByPlaceholderText(
      LoginCardValues.emailPlaceholder
    ) as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: "vidhyagmail.com" } });
    expect(screen.getByText(LoginCardValues.emailHelperText)).toBeInTheDocument();
  });

  test("password input field updates on change with error", () => {
    render(<LoginCard />);
    const passwordInput = screen.getByPlaceholderText(
     LoginCardValues.passwordPlaceholder
    ) as HTMLInputElement;
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    expect(
      screen.getByText(LoginCardValues.passwordHelperText)
    ).toBeInTheDocument();
  });

  test("input fields focus correctly", () => {
    render(<LoginCard />);
    const emailInput = screen.getByPlaceholderText(LoginCardValues.emailPlaceholder);
    const passwordInput = screen.getByPlaceholderText(LoginCardValues.passwordPlaceholder);
    fireEvent.focus(emailInput);
    fireEvent.focus(passwordInput);

    fireEvent.blur(emailInput);
    fireEvent.blur(passwordInput);

    fireEvent.change(emailInput, { target: { value: "vidhya@gmail.com" } });

    fireEvent.change(passwordInput, { target: { value: "password@123" } });
    fireEvent.blur(emailInput);
    fireEvent.blur(passwordInput);
  });
});
