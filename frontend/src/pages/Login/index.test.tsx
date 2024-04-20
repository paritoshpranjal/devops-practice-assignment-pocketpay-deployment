import "@testing-library/jest-dom";
import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import LoginPage from ".";
import { LoginCardValues } from "../../constants";
import { useAuth0 } from "@auth0/auth0-react";
import { render } from "../../testSetup";
jest.mock("@auth0/auth0-react");
describe("Login Page rendering correctly", () => {
  const login = jest.fn();
  beforeEach(() => {
    (useAuth0 as jest.Mock).mockReturnValue({
      isAuthenticated: false,
      loginWithRedirect: login,
    });
  });
  test("login component rendering correctly", () => {
    render(<LoginPage />);
    const emailInput = screen.getByPlaceholderText(
      LoginCardValues.emailPlaceholder
    ) as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: "vidhyagmail.com" } });
    expect(
      screen.getByText(LoginCardValues.emailHelperText)
    ).toBeInTheDocument();
    const passwordInput = screen.getByPlaceholderText(
      LoginCardValues.passwordPlaceholder
    ) as HTMLInputElement;
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    expect(
      screen.getByText(LoginCardValues.passwordHelperText)
    ).toBeInTheDocument();
  });
  test("click on sign in with google", () => {
    render(<LoginPage />);
    const googleButton = screen.getByAltText("google");
    fireEvent.click(googleButton);
    expect(login).toBeCalled;
  });
  test("clicking on the login button",()=>{
    render(<LoginPage />);

    const emailInput = screen.getByPlaceholderText(
      LoginCardValues.emailPlaceholder
    ) as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: "vidhya@gmail.com" } });

    const passwordInput = screen.getByPlaceholderText(
      LoginCardValues.passwordPlaceholder
     ) as HTMLInputElement;
     fireEvent.change(passwordInput, { target: { value: "Password@123" } });

     const signInButton = screen.getByRole("button",{name:"Log in"});
     expect(signInButton).toBeInTheDocument();
     fireEvent.click(signInButton);
  })
});
