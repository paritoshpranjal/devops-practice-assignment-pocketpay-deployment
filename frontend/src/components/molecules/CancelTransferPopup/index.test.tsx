import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { CancelTransferPopup } from ".";
import { cancelPopUpValues } from "../../../constants";

describe("Cancel Tranfer popup component", () => {
  test("renders the cancel transfer pop up", () => {
    render(<CancelTransferPopup cancelTranfer={true} />);
    const cancelText = screen.getByText(cancelPopUpValues.text2);
    expect(cancelText).toBeInTheDocument();
  });

  test("clicks on the yes button", () => {
    render(<CancelTransferPopup cancelTranfer={true} />);
    const yesButton = screen.getByRole("button", { name: cancelPopUpValues.ButtonYes});
    expect(yesButton).toBeInTheDocument();
    fireEvent.click(yesButton);
  });
  test("clicks on the no button", () => {
    render(<CancelTransferPopup cancelTranfer={true} />);
    const noButton = screen.getByRole("button", { name: cancelPopUpValues.ButtonNo});
    expect(noButton).toBeInTheDocument();
    fireEvent.click(noButton);
  });
});

describe("send money transfer popup component", () => {
  test("renders the send money transfer  pop up", () => {
    render(<CancelTransferPopup cancelTranfer={false} />);
    const cancelText = screen.getByText(cancelPopUpValues.sendTransferText);
    expect(cancelText).toBeInTheDocument();
  });

  test("clicks on the ok button", () => {
    render(<CancelTransferPopup cancelTranfer={false} />);
    const okButton = screen.getByRole("button", { name: cancelPopUpValues.ButtonOk });
    expect(okButton).toBeInTheDocument();
    fireEvent.click(okButton);
  });
});
