import { fireEvent, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import Register, { validateEmail } from "./";
import { render } from "../../../testSetup"

describe("Register", () => {
  it('should render a "Create your PocketPay account" header', () => {
    render(<Register />);
    const header = screen.getByText("Create your PocketPay account");
    expect(header).toBeInTheDocument();
  });
  it('should render a "Next" button with a primary color', () => {
    render(<Register />);
    const button = screen.getByRole("button", { name: "Next" });
    expect(button).toHaveClass("MuiButton-containedPrimary");
    const b1 = screen.getByRole("button", { name: "Next" });
    fireEvent.click(b1);
  });
  it('should render "Terms of use" and "Privacy Policy" buttons', () => {
    render(<Register />);
    const termsButton = screen.getByText("Terms of use");
    const privacyButton = screen.getByText("Privacy Policy");
    expect(termsButton).toBeInTheDocument();
    expect(privacyButton).toBeInTheDocument();
    const b1 = screen.getByText("Log in");
    fireEvent.click(b1);
  });
  it("should validate valid email addresses", () => {
    expect(validateEmail("test@gmail.com")).toBe(true);
    expect(validateEmail("user@zemosolabs.com")).toBe(true);
  });

  it("should reject invalid email addresses", () => {
    expect(validateEmail("invalid-email")).toBe(false);
    expect(validateEmail("user@invalid-domain")).toBe(false);
  });
  test("renders with the value", () => {
    render(<Register />);
    const inputField = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(inputField, { target: { value: "vidhya@gmail.com" } });
    expect(inputField.value).toBe("vidhya@gmail.com");
  });
  test("renders with the value", () => {
    render(<Register />);
    const inputField = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(inputField, { target: { value: "vidhyagmail.com" } });
    expect(inputField.value).toBe("vidhyagmail.com");
    expect(screen.getByText("Enter a valid email")).toBeInTheDocument();
  });
});
