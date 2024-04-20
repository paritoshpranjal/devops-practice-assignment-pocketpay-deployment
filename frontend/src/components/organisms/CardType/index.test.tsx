import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import CardType from ".";
import { CARD_ITEMS } from "../../../constants";
import { render } from "../../../testSetup";

describe("CardType Component", () => {
  it("should render without errors", () => {
    const { getByTestId } = render(<CardType cards={CARD_ITEMS} />);
    const outerBox = getByTestId("outer-box");
    expect(outerBox).toBeInTheDocument();
  });

  it("should change the selected value when a radio button is clicked", () => {
    render(<CardType cards={CARD_ITEMS} />);
    const RadioButtons = screen.getAllByRole("radio") as HTMLInputElement[];
    expect(RadioButtons[0]).toBeInTheDocument();

    fireEvent.click(RadioButtons[0]);
    expect(RadioButtons[0]).toBeChecked();
    expect(RadioButtons[1]).not.toBeChecked();

    fireEvent.click(RadioButtons[1]);
    expect(RadioButtons[0]).not.toBeChecked();
    expect(RadioButtons[1]).toBeChecked();
  });
});
