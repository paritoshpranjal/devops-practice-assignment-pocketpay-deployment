import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, screen } from "@testing-library/react";
import { ConfirmBuisnessDetails } from ".";
import { confirmDetails } from "../../../constants";
import {render} from "../../../testSetup"

describe("ConfirmBuisnessDetails", () => {
  test("renders the component correctly", () => {
    render(<ConfirmBuisnessDetails {...confirmDetails} />);
    expect(screen.getByTestId("confirmBuisnessDetails")).toBeInTheDocument();
  });
  test("click on edit button and change the address field and click on save button", () => {
    render(<ConfirmBuisnessDetails {...confirmDetails} />);
    const edit = screen.getByText(/Edit/i);
    fireEvent.click(edit);
    const addressTestField = screen.getAllByRole("textbox")[2];
    expect(addressTestField).toBeInTheDocument();
    fireEvent.change(addressTestField, {
      target: { value: "value for address" },
    });
    fireEvent.click(screen.getByText(/Save/i));
    expect(screen.getByText(/value for address/i)).toBeInTheDocument;
  });
});
