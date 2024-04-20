import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { OnlineBankingCard } from ".";
import { OnlineBankingCardValues } from "../../../constants";

const Data = {
  name: "Mario Gabriel",
  amount: "100.00 GBP",
  accountNo: "729019188810",
  sortCode: "9-21-32",
};
describe("Online Banking card component", () => {
  test("renders the online Banking card card", () => {
    render(<OnlineBankingCard data={Data} />);
    const component = screen.getByText(OnlineBankingCardValues.heading);
    expect(component).toBeInTheDocument();
  });
  test("renders the button correctly", () => {
    render(<OnlineBankingCard data={Data} />);

    const continueButton = screen.getByRole("button", {
      name: OnlineBankingCardValues.continueButton,
    });
    expect(continueButton).toBeInTheDocument();
    fireEvent.click(continueButton);
  });
});
