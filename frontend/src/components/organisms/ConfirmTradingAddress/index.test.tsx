import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { ConfirmTradingAddress } from ".";
import {render} from "../../../testSetup"

describe("Confirm Trading Address component", () => {
    test("renders the Confirm trading address component", () => {
        render(<ConfirmTradingAddress tradeAddress={"#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054"} />);
        const heading = screen.getByText("Confirm trading address");
        expect(heading).toBeInTheDocument();
        
    });
    test("clicking on edit option", () => {
        render(<ConfirmTradingAddress tradeAddress={"#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054"} />);
        const edit = screen.getByText("Edit");
        expect(edit).toBeInTheDocument();
        fireEvent.click(edit);

        expect(screen.getByRole("textbox")).toBeInTheDocument();
        const inputField = screen.getByRole("textbox") as HTMLInputElement; 
        fireEvent.change(inputField, { target: { value: "address1" } });
        
        expect(screen.getByRole("button",{name:"Cancel"})).toBeInTheDocument();

        const saveButton = screen.getByRole("button",{name:"Save"});
        expect(saveButton).toBeInTheDocument();
        fireEvent.click(saveButton);
    });
    test("clicking on add trading address", () => {
        render(<ConfirmTradingAddress tradeAddress={"#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054"} />);
       
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
    });
    test("model close when clicked on the out of card", () => {
        render(<ConfirmTradingAddress tradeAddress={"#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054"} />);
       
        const addTradingAddressbutton = screen.getByRole("button",{name:"Add trading address"});
        expect(addTradingAddressbutton).toBeInTheDocument();
        fireEvent.click(addTradingAddressbutton);

        const popup = screen.getByTestId("tradeAddressCard");
        expect(popup).toBeInTheDocument();

       fireEvent.click(document.body);
    });
    test("selecting the radio button", () => {
        render(<ConfirmTradingAddress tradeAddress={"#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054"} />);
       
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
    });

});

