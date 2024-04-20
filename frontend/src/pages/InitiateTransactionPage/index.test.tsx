import React from "react";
import InitiateTransactionPage from ".";
import { render } from "../../testSetup";
import { fireEvent, screen } from "@testing-library/react";

describe("InitiateTransactionPage", () => {
  it("renders the page without errors", () => {
    render(<InitiateTransactionPage />);

    const sendMoneyCard = screen.getByText("Send Money");
    expect(sendMoneyCard).toBeInTheDocument();
    fireEvent.click(sendMoneyCard);
  });
  it("clicking on the finish setup card ", () => {
    render(<InitiateTransactionPage />);

    const finishSetup= screen.getByText("Finish Account Setup");
    expect(finishSetup).toBeInTheDocument();
    fireEvent.click(finishSetup);
  });
  it("clicking on theback button ", () => {
    render(<InitiateTransactionPage />);

    const backButton = screen.getByAltText("arrowRight");
    expect(backButton).toBeInTheDocument();
    fireEvent.click(backButton);
  });
});
