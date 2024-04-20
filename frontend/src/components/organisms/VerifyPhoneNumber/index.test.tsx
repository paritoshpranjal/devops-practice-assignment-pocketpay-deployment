import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { MOBILE_NUMBER_DROPDOWN } from "../../../constants";
import VerifyPhoneNumber from ".";
import { SignUpContextProvider } from "../../../context/CountryContext";

describe("DropdownTypography", () => {
  const handleClick = jest.fn();
  beforeEach(() => {
    render(<VerifyPhoneNumber array={MOBILE_NUMBER_DROPDOWN} onClick={handleClick} />,{ wrapper: SignUpContextProvider });
  });

  test("component renders with the correct content", () => {
    const componentContent = screen.getByText(
      "Verify your phone number with a code"
    );
    expect(componentContent).toBeInTheDocument();
  });

  test("textfield rendering correctly", () => {
    const inputField = screen.getByRole("textbox");
    expect(inputField).toBeInTheDocument();
  });

  test("icon rendering correctly when popover is closed", () => {
    const iconElements = screen.getAllByRole("img");
    expect(iconElements.length).toBe(2);
  });

  test("popover is closed by default ", () => {
    const iconButtonElement = screen.getByTestId("country-select-button");
    expect(iconButtonElement).toBeInTheDocument();
    fireEvent.click(iconButtonElement);
  });

  test("popover is opened when clicked", () => {
    const iconElementsBeforeClick = screen.getAllByRole("img");
    expect(iconElementsBeforeClick.length).toBe(2);
    const iconButtonElement = screen.getByTestId("country-select-button");
    expect(iconButtonElement).toBeInTheDocument();
    fireEvent.click(iconButtonElement);
    const iconElements = screen.getAllByRole("img");
    expect(iconElements.length).toBe(4);
    fireEvent.click(iconElements[2]);
  });

  test("textfield value change working correctly", () => {
    const inputField = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(inputField, { target: { value: "98989898" } });
    expect(inputField.value).toBe(" 98989898");
    const button = screen.getByRole("button", {name: "Continue"})
    fireEvent.click(button)
  });

  test("popover is closed on click", () => {
    const iconButtonElement = screen.getByTestId("country-select-button");
    expect(iconButtonElement).toBeInTheDocument();
    fireEvent.click(iconButtonElement);
    const popoverElement = screen.getByTestId("pop-over");
    expect(popoverElement).toBeInTheDocument();
    const iconButtonInsidePopover = screen.getAllByTestId("pop-over-click");
    fireEvent.click(iconButtonInsidePopover[2]);
    const iconElements = screen.getAllByRole("img");
    expect(iconElements.length).toBe(2);
  });
});
