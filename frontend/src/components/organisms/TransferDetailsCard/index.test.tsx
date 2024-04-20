import React from "react";
import { render, screen } from "@testing-library/react";
import { TransferDetailsCard } from ".";
import { TransferDetailsCardValues } from "../../../constants";

const receiverData = {
  firstName: "Mario",
  lastName: "Gabriel",
  email: "mario.gabriel@gmail.com",
  accountNo: "21363738391910",
  accountType: "Checking",
  ifsc:"scfdw"
};
describe("Transfer Details card component", () => {
  test("renders the Transfer Details card without buttons", () => {
    render(
      <TransferDetailsCard
        payState={false}
        receiverCurrencyType="EUR"
        senderCurrencyType="GBR"
        currencyExchangeRate={1.14}
        amount_to_convert={77.74}
        totalAmount={100}
        fee={0}
        receiverData={receiverData}
      />
    );

    const component = screen.getByText(TransferDetailsCardValues.heading1);
    expect(component).toBeInTheDocument();
  });
  test("renders the Transfer Details card with button", () => {
    render(
      <TransferDetailsCard
        payState={true}
        receiverCurrencyType="EUR"
        senderCurrencyType="GBR"
        currencyExchangeRate={1.14}
        amount_to_convert={77.74}
        totalAmount={100}
        fee={0}
        receiverData={receiverData}
      />
    );

    const button = screen.getByRole("button", {
      name: TransferDetailsCardValues.continueButton,
    });
    expect(button).toBeInTheDocument();
  });
});
