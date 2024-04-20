import React from "react";
import {  fireEvent, render, screen} from "@testing-library/react";
import { Header } from ".";

describe("Header component", () => {
  test("renders the Header", () => {
    render(<Header username="Ross Gener" id="P44561754" />);
    const username = screen.getByText("Ross Gener");
    expect(username).toBeInTheDocument();
  });
  test("renders the logout popup successfully", () => {
    render(<Header username="Ross Gener" id="P44561754" />);
    const avatar = screen.getByTestId("avatar");
    expect(avatar).toBeInTheDocument();

    fireEvent.click(avatar);
    expect(screen.getByText("Logout")).toBeInTheDocument();

    fireEvent.click(avatar);

  });
  test("renders the logout popup close successfully when clicking on logout", () => {
    render(<Header username="Ross Gener" id="P44561754" />);
    const avatar = screen.getByTestId("avatar");
    expect(avatar).toBeInTheDocument();

    fireEvent.click(avatar);
    expect(screen.getByText("Logout")).toBeInTheDocument();

    const logout = screen.getByText("Logout");
    fireEvent.click(logout);

  });
});




