import React from "react";
import { render, screen } from "@testing-library/react";
import { TransactionStepper } from ".";
import { TransactionStepperValues } from "../../../constants";

describe("Transaction Stepper component", () => {
  test("renders the Transaction stepper", () => {
    render(
      <TransactionStepper
        presentValue={2}
        verticalStepperValues={TransactionStepperValues}
      />
    );
    const stepper = screen.getByTestId("transaction-stepper");
    expect(stepper).toBeInTheDocument();
  });
  test("displays the correct step labels", () => {
    render(
      <TransactionStepper
        presentValue={2}
        verticalStepperValues={TransactionStepperValues}
      />
    );

    TransactionStepperValues.forEach((step) => {
      const leftLabel = screen.getByText(step.leftLable);
      const rightLabel = screen.getByText(step.rightLable);
      expect(leftLabel).toBeInTheDocument();
      expect(rightLabel).toBeInTheDocument();
    });
  });
});
