import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { InputField } from ".";


describe("Input Field component", () => {
    test("renders the Input field", () => {
      render(<InputField />);
      const inputField = screen.getByRole("textbox");
      expect(inputField).toBeInTheDocument();
    });

    test("renders with the value",()=>{
        render(<InputField />);
        const inputField = screen.getByRole("textbox") as HTMLInputElement; 
        fireEvent.change(inputField, { target: { value: "vidhya@gmail.com" } });
        expect(inputField.value).toBe("vidhya@gmail.com");
    })
    
  });