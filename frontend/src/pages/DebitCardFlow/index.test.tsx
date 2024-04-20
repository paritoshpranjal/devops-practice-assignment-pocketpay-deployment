import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import DebitCardFlow from ".";
import { render } from "../../testSetup";

describe("DebitCardFlow component", () => {
  it("renders the component with default state", () => {
    render(<DebitCardFlow />);

    const button = screen.getByRole("button", {name: 'Continue to pay'})
    fireEvent.click(button)

    const RadioButtons = screen.getAllByRole("radio") as HTMLInputElement[];
    fireEvent.click(RadioButtons[0]);
    
    fireEvent.click(button)
    fireEvent.click(button)
  });
  it("clicking on cancel transfer button",()=>{
    render(<DebitCardFlow />);

    const canceltransferButton = screen.getByRole("button",{name:"Cancel this transfer"});
    expect(canceltransferButton).toBeInTheDocument();
    fireEvent.click(canceltransferButton);
  })
  it("rendering entire debit flow with complete button",()=>{
    render(<DebitCardFlow />);

    const RadioButtons = screen.getAllByRole("radio") as HTMLInputElement[];
    fireEvent.click(RadioButtons[0]);

    const button = screen.getByRole("button", {name: 'Continue to pay'})
    fireEvent.click(button)
    fireEvent.click(button)

    const completeButton = screen.getByRole("button", {name: 'Complete'})
    expect(completeButton).toBeInTheDocument();
    fireEvent.click(completeButton)

  })
  test("clicking on back button",()=>{
    render(<DebitCardFlow />);

    const backButton = screen.getByAltText(/arrowRight/i);
    fireEvent.click(backButton);

  })

});
