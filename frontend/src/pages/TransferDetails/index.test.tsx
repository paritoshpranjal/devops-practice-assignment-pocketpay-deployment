import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import TransferDetailsPage from ".";
import { accountNoHelperText, invalidEmail } from "../../constants";
import { render } from "../../testSetup";

describe("TransferDetailsPage", () => {
  it("renders without errors", () => {
    render(<TransferDetailsPage />);

    expect(screen.getByTestId("reviewTransferDetails")).toBeInTheDocument();
  });

  it("displays transfer details correctly", () => {
    render(<TransferDetailsPage />);

    const editLink = screen.getAllByText("Edit")[0];
    expect(editLink).toBeInTheDocument;
    fireEvent.click(editLink);
    expect(screen.getByTestId("editDetails")).toBeInTheDocument;
    const cancelButton = screen.getByText(/Cancel/i);
    expect(cancelButton).toBeInTheDocument;
    fireEvent.click(cancelButton);
    expect(screen.queryByTestId("editDetails")).not.toBeInTheDocument;
    fireEvent.click(screen.getAllByText("Edit")[0]);
    const amountField = screen.getAllByRole("textbox")[0];
    expect(amountField).toBeInTheDocument;
    fireEvent.change(amountField, { target: { value: "110.00 GBP" } });
    const saveButton = screen.getByText(/Save/i);
    fireEvent.click(saveButton);
  });

  it("displays MainTemplate with the correct props", () => {
    render(<TransferDetailsPage />);

    const editLink = screen.getByText("Change");
    fireEvent.click(editLink);
    const inputFields = screen.getAllByRole("textbox");
    fireEvent.change(inputFields[1], { target: { value: "email" } });
    expect(screen.getByText(invalidEmail)).toBeInTheDocument;
    fireEvent.change(inputFields[2], { target: { value: "accountNo" } });
    expect(screen.getByText(accountNoHelperText)).toBeInTheDocument;
  });
  it("clicking on theback button ", () => {
    render(<TransferDetailsPage />);

    const backButton = screen.getByAltText("arrowRight");
    expect(backButton).toBeInTheDocument();
    fireEvent.click(backButton);
  });
  it("clicking on the confirm and continue button",()=>{
    render(<TransferDetailsPage />);

    const continueButton = screen.getByRole("button",{name:"Confirm and continue"});
    expect(continueButton).toBeInTheDocument();
    fireEvent.click(continueButton);
  })
});
