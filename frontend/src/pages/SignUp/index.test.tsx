import { fireEvent, screen } from "@testing-library/react";
import SignUpPage from ".";
import React from "react";
import { render } from "../../testSetup";
import { useAuth0 } from "@auth0/auth0-react";
jest.mock("@auth0/auth0-react");
describe("Signuppage", () => {
  const login = jest.fn();
  beforeEach(() => {
    (useAuth0 as jest.Mock).mockReturnValue({
      isAuthenticated: false,
      loginWithRedirect: login,
    });
  });
  test("renders with the value", () => {
    render(<SignUpPage />);
    const inputField = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(inputField, { target: { value: "vidhya@gmail.com" } });
    expect(inputField.value).toBe("vidhya@gmail.com");
    const termsButton = screen.getByText("Terms of use");
    const privacyButton = screen.getByText("Privacy Policy");
    expect(termsButton).toBeInTheDocument();
    expect(privacyButton).toBeInTheDocument();
    const b1 = screen.getByText("Log in");
    fireEvent.click(b1);
  });
  test("click on sign in with google", () => {
    render(<SignUpPage />);
    const googleButton = screen.getAllByAltText("Icon");
    fireEvent.click(googleButton[0]);
    expect(login).toBeCalled;
  });
  test("clicking on the signup button",()=>{
    render(<SignUpPage />);

    const inputField = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(inputField, { target: { value: "vidhya@gmail.com" } });

    const signInButton = screen.getByRole("button",{name:"Next"});
    expect(signInButton).toBeInTheDocument();
    fireEvent.click(signInButton);
  })
});
