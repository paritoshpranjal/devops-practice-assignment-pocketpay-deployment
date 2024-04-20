import React from "react";
import {  fireEvent, screen } from "@testing-library/react";
import { YourBusinessPage } from ".";
import {render} from "../../testSetup"


describe("Account setup - Business activity page test suit", () => {
    test("renders the business activity", () => {
        render(<YourBusinessPage />);
        const stepper = screen.getByText("Your business");
        expect(stepper).toBeInTheDocument();
    });
    it("renders the entire flow of the YourBusinessPage", () => {
        render(<YourBusinessPage />);
        const inputElement = screen.getByPlaceholderText("Select your Business");
        expect(inputElement).toBeInTheDocument();
        fireEvent.change(inputElement, { target: { value: "z" } });
        const option = screen.getByText(/zemoso/i);
        expect(option).toBeInTheDocument;
        fireEvent.click(option);

        expect(screen.getByText("Confirm your business details")).toBeInTheDocument();

        const edit = screen.getByText(/Edit/i);
        fireEvent.click(edit);
        const addressTestField = screen.getAllByRole("textbox")[2];
        expect(addressTestField).toBeInTheDocument();
        fireEvent.change(addressTestField, {
          target: { value: "value for address" },
        });
        fireEvent.click(screen.getByText(/Save/i));
        expect(screen.getByText(/value for address/i)).toBeInTheDocument;

        const confirmButton = screen.getByRole("button",{name:"Confirm"});
        expect(confirmButton).toBeInTheDocument();
        fireEvent.click(confirmButton);

        expect(screen.getByText("Confirm trading address")).toBeInTheDocument();

        const addTradingAddressbutton = screen.getByRole("button",{name:"Add trading address"});
        expect(addTradingAddressbutton).toBeInTheDocument();
        fireEvent.click(addTradingAddressbutton);

        const popup = screen.getByTestId("tradeAddressCard");
        expect(popup).toBeInTheDocument();

        const inputField = screen.getByRole("textbox") as HTMLInputElement; 
        fireEvent.change(inputField, { target: { value: "address1" } });

        const addButton = screen.getByRole("button",{name:"Add"});
        expect(addButton).toBeInTheDocument();
        fireEvent.click(addButton);

        const radioButtons = screen.getAllByRole("radio");
        expect(radioButtons[1]).toBeInTheDocument();
        fireEvent.click(radioButtons[1]);

        const confirmbutton = screen.getByRole("button",{name:"Confirm"});
        expect(confirmbutton).toBeInTheDocument();
        fireEvent.click(confirmbutton);
      });
      it("clicking on back button", () => {
        render(<YourBusinessPage />);
        const inputElement = screen.getByPlaceholderText("Select your Business");
        expect(inputElement).toBeInTheDocument();
        fireEvent.change(inputElement, { target: { value: "z" } });
        const option = screen.getByText(/zemoso/i);
        expect(option).toBeInTheDocument;
        fireEvent.click(option);

        expect(screen.getByText("Confirm your business details")).toBeInTheDocument();

        const backButton = screen.getByAltText("arrowRight");
        expect(backButton).toBeInTheDocument();
        fireEvent.click(backButton);

        expect(screen.getByText("Search for your business")).toBeInTheDocument();

      });
});

