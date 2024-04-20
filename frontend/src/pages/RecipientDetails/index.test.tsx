import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, screen } from "@testing-library/react";
import { RecipientDetailsPage } from ".";
import { FillRecipientConst } from "../../constants";
import { render } from "../../testSetup";
const headingText = "Who are you sending money to?";
describe("RecipientDetailsPage", () => {
  beforeEach(() => {
    render(<RecipientDetailsPage />);
  });
  test("renders the component correctly", () => {
    const text = screen.getByText(headingText);
    expect(text).toBeInTheDocument();
  });
  test("click on back button and continue button", () => {
    fireEvent.click(screen.getByAltText(/arrowRight/i));
    expect(screen.getByText(headingText)).toBeInTheDocument();
    const clickableIcon = screen.getByAltText("dollar logo");
    fireEvent.click(clickableIcon);
    expect(screen.getByText(FillRecipientConst.MAIN_TEXT)).toBeInTheDocument();
    fireEvent.click(screen.getByAltText(/arrowRight/i));
    expect(screen.getByText(headingText)).toBeInTheDocument();
  });
  test("fill recipeint details and click on continue button", () => {
    const clickableIcon = screen.getByAltText("dollar logo");
    fireEvent.click(clickableIcon);
    const inputFields = screen.getAllByRole("textbox");
    fireEvent.change(inputFields[0], { target: { value: "test@gmail.com" } });
    fireEvent.change(inputFields[1], { target: { value: "123456789101" } });
    fireEvent.change(inputFields[2], { target: { value: "pavan" } });
    fireEvent.change(inputFields[3], { target: { value: "kumar" } });
    fireEvent.change(inputFields[4], { target: { value: "ifsc" } });
    const divElementToClick = screen.getByRole("button", {
      name: "Select Account Type",
    });
    fireEvent.click(divElementToClick);
    const selectedOption = screen.getByText("Checking");
    fireEvent.click(selectedOption);
    const continueButton = screen.getByRole("button", { name: "Continue" });
    expect(continueButton).not.toBeDisabled();
    fireEvent.click(continueButton);
  });
});
