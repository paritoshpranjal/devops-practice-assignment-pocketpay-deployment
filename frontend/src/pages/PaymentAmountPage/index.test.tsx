import React from "react";
import "@testing-library/jest-dom";
import { screen, fireEvent } from "@testing-library/react";
import { PaymentAmountPage } from ".";
import { render } from "../../testSetup";

describe("PaymentAmountPage tests", () => {
  test("renders the component correctly", () => {
    render(<PaymentAmountPage />);
    expect(screen.getByTestId("amountCard")).toBeInTheDocument();
  });
  test("clicking on theback button ", () => {
    render(<PaymentAmountPage />);
    const backButton = screen.getByAltText("arrowRight");
    expect(backButton).toBeInTheDocument();
    fireEvent.click(backButton);
  });
  test("change the country on send money and change the value and click on continue button", () => {
    render(<PaymentAmountPage />);

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
});
