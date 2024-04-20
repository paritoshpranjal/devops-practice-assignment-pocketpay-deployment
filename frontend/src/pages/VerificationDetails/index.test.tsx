import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, screen } from "@testing-library/react";
import { VerificationDetailsPage } from ".";
import { VerificationCardValues } from "../../constants";
import { render } from "../../testSetup";
describe("VerificationDetailsPage", () => {
  test("renders the component correctly and click on continue button", () => {
    render(<VerificationDetailsPage />);
    const backButton = screen.getByAltText(/arrowRight/i);
    const divElementToClick = screen.getByRole("button", {
      name: VerificationCardValues.dropDownPlaceHolder,
    });
    fireEvent.click(divElementToClick);

    const selectedOption = screen.getByText(
      VerificationCardValues.dropDownData[2]
    );
    fireEvent.click(selectedOption);
    const continueButton = screen.getByText(/Continue/i);
    fireEvent.click(continueButton);
    fireEvent.click(backButton);
  });
  test("click on continue button and shows the purpose details", () => {
    render(<VerificationDetailsPage />);
    const divElementToClick = screen.getByRole("button", {
      name: VerificationCardValues.dropDownPlaceHolder,
    });
    fireEvent.click(divElementToClick);

    const selectedOption = screen.getByText(
      VerificationCardValues.dropDownData[2]
    );
    fireEvent.click(selectedOption);
    fireEvent.click(screen.getByText(/Continue/i));

    fireEvent.click(screen.getByText(/Continue/i));
    fireEvent.click(screen.getByText(/Continue/i));
  });
  test("clicking on back button",()=>{
    render(<VerificationDetailsPage />);

    const backButton = screen.getByAltText(/arrowRight/i);
    fireEvent.click(backButton);

  })
});
