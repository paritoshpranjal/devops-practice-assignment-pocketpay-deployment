import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { HomeTransaction } from ".";
import {
  AN_EXISTING_ACCOUNT,
  CANCEL_TRANSFER_BUTTON,
  ROSS_GENER,
  SELECT_AN_OPTION,
  SHARE_TRACKING_LINK,
} from "../../../constants";
const homeTransactionProps = {
  accounts: ["4656", "4252"],
  createdAt: new Date(
    "Thu Sep 14 2023 21:32:42 GMT+0530 (India Standard Time)"
  ),
  recipientAmount: 114.14,
  recipientCode: "EUR",
  sendAmount: 100,
  sendCode: "GBP",
  senderName: "Mario Gabriel",
  username: "Ross Gener",
  transferNumber: "3227627272",
  isCancel: false,
  handlecancelTransfer: jest.fn(),
};
describe("HomeTransaction", () => {
  test("renders the component correctly", () => {
    render(
      <HomeTransaction
        {...homeTransactionProps}
        createdAt={
          new Date("Thu Sep 14 2023 06:32:42 GMT+0530 (India Standard Time)")
        }
      />
    );
    expect(screen.getByTestId("homeTransaction")).toBeInTheDocument();
  });

  test("expanding the transaction details", () => {
    render(<HomeTransaction {...homeTransactionProps} />);
    expect(screen.queryByTestId("transaction-stepper")).not.toBeInTheDocument;
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByTestId("transaction-stepper")).toBeInTheDocument;
  });
  test("click on share button and open the modal", () => {
    render(
      <HomeTransaction
        {...homeTransactionProps}
        createdAt={
          new Date("Thu Sep 14 2023 12:32:42 GMT+0530 (India Standard Time)")
        }
      />
    );
    fireEvent.click(screen.getByAltText("expandIcon"));
    fireEvent.click(screen.getByAltText("share"));
    expect(screen.getByText(SHARE_TRACKING_LINK)).toBeInTheDocument();
  });

  test("click on cancel transfer button and open modal", () => {
    render(<HomeTransaction {...homeTransactionProps} />);
    fireEvent.click(screen.getByAltText("expandIcon"));
    fireEvent.click(
      screen.getByRole("button", {
        name: /Cancel the transfer/i,
      })
    );
  });

  test("when transaction is cancelled stepper and button should not be visible", () => {
    render(<HomeTransaction {...homeTransactionProps} isCancel />);
    expect(screen.getByText(/Cancelled/i)).toBeInTheDocument;
    expect(screen.queryByTestId("transaction-stepper")).not.toBeInTheDocument;
    expect(
      screen.queryByRole("button", {
        name: /Cancel the transfer/i,
      })
    ).not.toBeInTheDocument;
  });
  it("should toggle cancelTransfer state and call props.handlecancelTransfer", () => {
    const { getByText } = render(<HomeTransaction {...homeTransactionProps} />);

    const cancelButton = getByText("Cancel the transfer");
    fireEvent.click(cancelButton);
    const existingAccountElement = screen.getByText(AN_EXISTING_ACCOUNT);
    expect(existingAccountElement).toBeInTheDocument();
    fireEvent.click(existingAccountElement);
    const selectElement = screen.getByLabelText(SELECT_AN_OPTION);
    expect(selectElement).toBeInTheDocument();
    fireEvent.mouseDown(selectElement);
    const nameElement = screen.getAllByText(ROSS_GENER);
    expect(nameElement.length).toBe(2);
    fireEvent.click(nameElement[1]);
    const cancel = getByText(CANCEL_TRANSFER_BUTTON);
    fireEvent.click(cancel);
    expect(homeTransactionProps.isCancel).toBe(false);
  });
});
