import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import CancelTransferModal from ".";
import {
  SELECT_AN_OPTION,
  ROSS_GENER,
  CANCEL_TRANSFER_BUTTON,
  AN_EXISTING_ACCOUNT,
} from "../../../constants";
const cancelTransferProps = {
  accounts: ["4656", "4242"],
  transferId: "3227627272",
  username: "Ross Gener",
};
describe("CancelTransferModal", () => {
  it("renders without errors", () => {
    render(<CancelTransferModal {...cancelTransferProps} />);
  });

  it('displays the "Cancel transfer" button when selecting an option', () => {
    const { getByText } = render(
      <CancelTransferModal {...cancelTransferProps} />
    );
    fireEvent.click(getByText("An existing account"));

    const selectElement = screen.getByLabelText(SELECT_AN_OPTION);
    expect(selectElement).toBeInTheDocument();
    fireEvent.mouseDown(selectElement);

    const nameElement = screen.getAllByText(ROSS_GENER);
    expect(nameElement.length).toBe(2);
    fireEvent.click(nameElement[0]);
    const button = screen.queryByRole("button", {
      name: CANCEL_TRANSFER_BUTTON,
    });
    waitFor(() => {
      expect(button).toBeInTheDocument();
    });
  });

  test("selecting 2nd select option working correct", () => {
    render(<CancelTransferModal {...cancelTransferProps} />);
    const existingAccountElement = screen.getByText(AN_EXISTING_ACCOUNT);
    expect(existingAccountElement).toBeInTheDocument();
    fireEvent.click(existingAccountElement);
    const selectElement = screen.getByLabelText(SELECT_AN_OPTION);
    expect(selectElement).toBeInTheDocument();
    fireEvent.mouseDown(selectElement);
    const nameElement = screen.getAllByText(ROSS_GENER);
    expect(nameElement.length).toBe(2);
    fireEvent.click(nameElement[1]);
    const button = screen.queryByRole("button", {
      name: CANCEL_TRANSFER_BUTTON,
    });
    waitFor(() => {
      expect(button).toBeInTheDocument();
    });
  });
});
