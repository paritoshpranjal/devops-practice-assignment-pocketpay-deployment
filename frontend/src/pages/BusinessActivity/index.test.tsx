import React from "react";
import {  fireEvent, screen } from "@testing-library/react";
import { BusinessActivityPage } from ".";
import { render } from "../../testSetup";


describe("Account setup - Business activity page test suit", () => {
    test("renders the business activity", () => {
        render(<BusinessActivityPage />);
        const stepper = screen.getByText("Your business");
        expect(stepper).toBeInTheDocument();
    });
    test("click on continue button when all dropdowns are sleceted", () => {
        render(<BusinessActivityPage />);
    
        const categoryDropdownButton = screen.getByText("Category");
        fireEvent.click(categoryDropdownButton);
        const categoryOption = screen.getByRole("option", { name: /Real estate or construction/i });
        fireEvent.click(categoryOption);
        const subcategoryDropdownButton = screen.getByText("Subcategory");
        fireEvent.click(subcategoryDropdownButton);
        const subcategoryOption = screen.getByRole("option", {
          name: /Real estate construction/i,
        });
        fireEvent.click(subcategoryOption);
        const size = screen.getByText("Size of your business");
        fireEvent.click(size);
        const sizeOption = screen.getByRole("option", {
          name: /50-100/i,
        });
        fireEvent.click(sizeOption);
    
        const continueButton = screen.getByText("Continue");
        expect(continueButton).not.toBeDisabled();
        fireEvent.click(continueButton);
      });
});

