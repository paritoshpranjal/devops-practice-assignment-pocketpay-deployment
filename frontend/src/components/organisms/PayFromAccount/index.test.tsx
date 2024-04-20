import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { PayFromAccountCard } from ".";
import { PayFromAccountCardValues } from "../../../constants";

describe("Pay from account card component", () => {
    test("renders the pay from account card", () => {
        render(<PayFromAccountCard   accountType ="business" amount="75.38 GBP"/>);

        const heading = screen.getByText(PayFromAccountCardValues.heading);
        expect(heading).toBeInTheDocument();

    });
    test("renders the icons correctly", () => {
        render(<PayFromAccountCard   accountType ="business" amount="75.38 GBP"/>);

        const icons = screen.getByAltText("accounts");
        expect(icons).toBeInTheDocument();

    });
    test("renders the button correctly", () => {
        render(<PayFromAccountCard   accountType ="business" amount="75.38 GBP"/>);

        const continueButton = screen.getByRole("button",{name:PayFromAccountCardValues.continueButtonName});
        expect(continueButton).toBeInTheDocument();
        fireEvent.click(continueButton);

    });


});

