import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, screen } from "@testing-library/react";
import { ReviewTransferDetails } from ".";
import { accountNoHelperText, invalidEmail } from "../../../constants";
import { render } from "../../../testSetup";
const reviewTransferDetailsProps = {
  amount: 77.74,
  fee: "00.00",
  rate: 1.14,
  reciepientCountryCode: "EUR",
  sendAmount: 100,
  sendCountryCode: "GBP",
  name: "Mario Gabriel",
  email: "mario.gabriel@gmail.com",
  accountNo: "213637383919",
  accountType: "Checking",
};
const onClickFn = jest.fn();
describe("ReviewTransferDetails", () => {
  test("renders the component correctly", () => {
    render(<ReviewTransferDetails {...reviewTransferDetailsProps} />);
    expect(screen.getByTestId("reviewTransferDetails")).toBeInTheDocument();
  });
  test("click on transfer details edit link and click on cancel and save button", () => {
    render(<ReviewTransferDetails {...reviewTransferDetailsProps} />);
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
  test("click on recipient details change link and click on cancel and save button", () => {
    render(
      <ReviewTransferDetails
        {...reviewTransferDetailsProps}
        onClickContinueButton={onClickFn}
      />
    );
    const editLink = screen.getByText("Change");
    fireEvent.click(editLink);
    expect(screen.getByTestId("editDetails")).toBeInTheDocument;
    const cancelButton = screen.getByText(/Cancel/i);
    fireEvent.click(cancelButton);
    expect(screen.queryByTestId("editDetails")).not.toBeInTheDocument;
    fireEvent.click(screen.getByText("Change"));
    const nameField = screen.getAllByRole("textbox")[0];
    expect(nameField).toBeInTheDocument;
    fireEvent.change(nameField, { target: { value: "Pavan" } });
    const saveButton = screen.getByText(/Save/i);
    const accountType = screen.getByRole("button", {
      name: /Checking/i,
    });
    fireEvent.mouseDown(accountType);
    const selectedOption = screen.getByRole("option", {
      name: /Saving/i,
    });
    fireEvent.click(selectedOption);
    fireEvent.click(saveButton);
    fireEvent.click(screen.getByText(/Confirm and continue/i));
    expect(onClickFn).toBeCalled();
  });
  test("check validations of fields in recipient details", () => {
    render(<ReviewTransferDetails {...reviewTransferDetailsProps} />);
    const editLink = screen.getByText("Change");
    fireEvent.click(editLink);
    const inputFields = screen.getAllByRole("textbox");
    fireEvent.change(inputFields[1], { target: { value: "email" } });
    expect(screen.getByText(invalidEmail)).toBeInTheDocument;
    fireEvent.change(inputFields[2], { target: { value: "accountNo" } });
    expect(screen.getByText(accountNoHelperText)).toBeInTheDocument;
  });
});
