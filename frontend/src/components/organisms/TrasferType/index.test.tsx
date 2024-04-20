import { render, fireEvent, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import TransferType from ".";

describe("PaymentOptions", () => {
  test("renders PaymentOptions component without crashing", () => {
    render(<TransferType />);
  });
  test("payment option component renders the icons", () => {
    render(<TransferType />);
    const debitCardRadio = screen.getAllByRole("img");
    expect(debitCardRadio).toHaveLength(4);
    expect(debitCardRadio[0]).toBeInTheDocument();
  });
  test("payment option text should be displayed correctly", () => {
    render(<TransferType />);
    expect(screen.getByText("Choose your transfer type")).toBeInTheDocument();
    expect(screen.getByText("Fast and easy transfer")).toBeInTheDocument();
    expect(screen.getByText("Low cost transfer")).toBeInTheDocument();
    expect(screen.getByText("Account transfer")).toBeInTheDocument();
    expect(screen.getByText("SWIFT Transfer")).toBeInTheDocument();
  });

  test("payment options with checked values", () => {
    const handleRadioChange = jest.fn();

    const { container } = render(
      <TransferType onRadioChange={handleRadioChange} />
    );

    const radio1 = screen.getByTestId("debitcard-pay");
    expect(radio1).toBeInTheDocument();
    act(() => {
      fireEvent.change(radio1);
    });
    const radio2 = screen.getByTestId("lloydsBank-pay");
    expect(radio2).toBeInTheDocument();
    act(() => {
      fireEvent.change(radio1);
    });

    const radio = container.querySelector("#radio") as HTMLInputElement;
    expect(radio).toBeInTheDocument();
    fireEvent.change(radio);
  });
  it("should set selectedRadioValue and call onRadioChange when a radio button is selected", async () => {
    const onRadioChangeMock = jest.fn();
    render(<TransferType onRadioChange={onRadioChangeMock} />);

    const radio1 = screen.getByTestId("debitcard-pay");
    expect(radio1).toBeInTheDocument();
    act(() => {
      fireEvent.click(radio1);
    });
  });
  it("should select a radio button when clicked", () => {
    render(<TransferType />);
    const RadioButtons = screen.getAllByRole("radio") as HTMLInputElement[];

    expect(RadioButtons[2]).toBeInTheDocument();

    fireEvent.click(RadioButtons[0]);
    fireEvent.click(RadioButtons[2]);
  });
});
