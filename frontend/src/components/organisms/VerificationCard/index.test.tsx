import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { VerificationCard } from ".";
import { VerificationCardValues } from "../../../constants";
import { render } from "../../../testSetup";
const handleContinue = jest.fn();
describe("Verification card component", () => {
  test("renders the Verification card", () => {
    render(<VerificationCard />);
    const heading = screen.getByText(VerificationCardValues.heading);
    expect(heading).toBeInTheDocument();
  });
  test("renders dropdown correctly and click on continue button", () => {
    render(<VerificationCard handleContinueButton={handleContinue} />);

    const divElementToClick = screen.getByRole("button", {
      name: VerificationCardValues.dropDownPlaceHolder,
    });
    fireEvent.click(divElementToClick);

    const selectedOption = screen.getByText(
      VerificationCardValues.dropDownData[2]
    );
    fireEvent.click(selectedOption);
    fireEvent.click(screen.getByText(/Continue/i));
    expect(handleContinue).toBeCalled;
  });
});
