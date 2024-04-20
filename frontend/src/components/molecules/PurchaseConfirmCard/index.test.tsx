import React from "react";
import {fireEvent, render, screen } from "@testing-library/react";
import { PurchaseconfirmCard } from ".";
import { PurchaseConfirmValues } from "../../../constants";

describe("Purchase confirm card component", () => {
  test("renders the purchase confirm card", () => {
    render(<PurchaseconfirmCard amount={100} currencytype="GBR" cardDigits={9319}  />);
    const modelelement = screen.getByText(PurchaseConfirmValues.label);
    expect(modelelement).toBeInTheDocument();
  });
  test("clicking on the complete button", () => {
    render(<PurchaseconfirmCard amount={100} currencytype="GBR" cardDigits={9319}  />);
    const completeButton = screen.getByRole("button",{name:PurchaseConfirmValues.completeButton});
    expect(completeButton).toBeInTheDocument();
    fireEvent.click(completeButton);
  });
  test("renders the Icon ", () => {
    render(<PurchaseconfirmCard amount={100} currencytype="GBR" cardDigits={9319}  />);
    const lioydsIcon = screen.getByAltText('LIoyds bank');
    expect(lioydsIcon).toBeInTheDocument();
  });
});

