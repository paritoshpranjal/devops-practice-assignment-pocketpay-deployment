import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { BankAccountPaymentFlowPage } from ".";
import { render } from "../../testSetup";
import { act } from "react-dom/test-utils";

describe("Bank Account Payment Flow page test suit", () => {
  beforeEach(async () => {
    await act(async () => {
      render(<BankAccountPaymentFlowPage />);
    });
  });
  test("renders the Bank account payment flow", () => {
    const stepper = screen.getByText("Pay");
    expect(stepper).toBeInTheDocument();
  });
  test("renders the entire flow correctly", () => {
    const chooseBank = screen.getByText("Choose your bank");
    expect(chooseBank).toBeInTheDocument();

    const bankItems = screen.getAllByTestId("bankItem");
    expect(bankItems[4]).toBeInTheDocument();
    fireEvent.click(bankItems[4]);

    const payFromAccountComponent = screen.getByText(
      "Pay from your Lloyds account"
    );
    expect(payFromAccountComponent).toBeInTheDocument();

    const ContinueButton = screen.getByRole("button", {
      name: "Continue to pay",
    });
    expect(ContinueButton).toBeInTheDocument();
    fireEvent.click(ContinueButton);

    const OnlineBankComponent = screen.getByText(
      "Next, go to your Lloyds’s online banking and make a payment"
    );
    expect(OnlineBankComponent).toBeInTheDocument();

    const onlineContinueButton = screen.getByRole("button", {
      name: "Continue",
    });
    expect(onlineContinueButton).toBeInTheDocument();
    fireEvent.click(onlineContinueButton);
  });
  test("renders the back button correctly", () => {
    const chooseBank = screen.getByText("Choose your bank");
    expect(chooseBank).toBeInTheDocument();

    const bankItems = screen.getAllByTestId("bankItem");
    expect(bankItems[4]).toBeInTheDocument();
    fireEvent.click(bankItems[4]);

    const payFromAccountComponent = screen.getByText(
      "Pay from your Lloyds account"
    );
    expect(payFromAccountComponent).toBeInTheDocument();

    const ContinueButton = screen.getByRole("button", {
      name: "Continue to pay",
    });
    expect(ContinueButton).toBeInTheDocument();
    fireEvent.click(ContinueButton);

    const OnlineBankComponent = screen.getByText(
      "Next, go to your Lloyds’s online banking and make a payment"
    );
    expect(OnlineBankComponent).toBeInTheDocument();

    const backButton = screen.getByAltText(/arrowRight/i);
    expect(backButton).toBeInTheDocument();
    fireEvent.click(backButton);

    expect(
      screen.getByText("Pay from your Lloyds account")
    ).toBeInTheDocument();
  });
  test("renders the back button when there are no components to go back", () => {
    const chooseBank = screen.getByText("Choose your bank");
    expect(chooseBank).toBeInTheDocument();

    const backButton = screen.getByAltText("arrowRight");
    expect(backButton).toBeInTheDocument();
    fireEvent.click(backButton);
  });
  test("modal pop up in the Choose bank account", () => {
    const cancelTransfer = screen.getByRole("button", {
      name: "Cancle the transfer",
    });
    expect(cancelTransfer).toBeInTheDocument();
    fireEvent.click(cancelTransfer);

    const noButton = screen.getByRole("button", { name: "No" });
    expect(noButton).toBeInTheDocument();
    fireEvent.click(noButton);

    fireEvent.click(cancelTransfer);

    const yesButton = screen.getByRole("button", { name: "Yes" });
    expect(yesButton).toBeInTheDocument();
    fireEvent.click(yesButton);
  });
});
