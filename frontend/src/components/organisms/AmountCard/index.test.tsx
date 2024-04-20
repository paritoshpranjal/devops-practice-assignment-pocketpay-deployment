import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { AmountCard } from ".";
import { amountCardProps, cancelPopUpValues } from "../../../constants";
import { TransactionContextProvider } from "../../../context/TransactionContext";
describe("AmountCard", () => {
  beforeEach(() => {
    render(<AmountCard {...amountCardProps} />, {
      wrapper: TransactionContextProvider,
    });
  });
  test("renders the component correctly", () => {
    expect(screen.getByTestId("amountCard")).toBeInTheDocument();
  });
  test("change the country on send money and change the value and click on continue button", () => {
    const sendInput = screen.getAllByRole("textbox")[0];
    fireEvent.change(sendInput, { target: { value: "send" } });
    fireEvent.change(sendInput, { target: { value: 100 } });
    const sendButton = screen.getAllByAltText("expandIcon")[0];
    fireEvent.click(sendButton);
    const indiaOption = screen.getByText(/Austria/i);
    expect(indiaOption).toBeInTheDocument;
    fireEvent.click(indiaOption);
    const recepientButton = screen.getAllByAltText("expandIcon")[1];
    fireEvent.click(recepientButton);
    const indiaOption1 = screen.getByText(/India/i);
    expect(indiaOption1).toBeInTheDocument;
    fireEvent.click(indiaOption1);
    fireEvent.click(screen.getByText(/Continue/i));
  });
  test("click on rate button and open modal", () => {
    fireEvent.click(screen.getByAltText("sendAmountIcon"));
    expect(screen.getByText(cancelPopUpValues.sendTransferText))
      .toBeInTheDocument;
  });
});
