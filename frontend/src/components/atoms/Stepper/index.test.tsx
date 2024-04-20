import React from "react";
import { render, screen } from "@testing-library/react";
import { MuiStepper } from ".";
import { Step, StepLabel } from "@mui/material";

const steps = [
  "Select master blaster campaign settings",
  "Create an ad group",
  "Create an ad",
];

describe("Stepper Component", () => {
  test("renders the stepper with no steps", () => {
    render(<MuiStepper activeStep={0} />);
    const stepper = screen.getByTestId("stepper");
    expect(stepper).toBeInTheDocument();
  });
  test("renders the stepper with steps", () => {
    render(
      <MuiStepper
        activeStep={0}
        children={steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      />
    );
    const stepper = screen.getByTestId("stepper");
    expect(stepper).toBeInTheDocument();

    const step = screen.getByText("Select master blaster campaign settings");
    expect(step).toBeInTheDocument();
  });
});
