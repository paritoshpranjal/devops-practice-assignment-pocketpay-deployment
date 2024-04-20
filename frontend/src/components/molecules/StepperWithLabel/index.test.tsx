import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StepperWithLabel from "./index";

describe("CustomStepper", () => {
  const horizontalStepperValues = ["Step 1", "Step 2", "Step 3"];
  const presentValue = 2;
  const width = "800px";

  it("Should render horizontal stepper correctly", () => {
    render(
      <StepperWithLabel
        presentValue={presentValue}
        horizontalStepperValues={horizontalStepperValues}
        width={width}
      />
    );

    const slider = screen.getByTestId("horizontal-slider");
    expect(slider).toBeInTheDocument();
  });

  it("renders horizontal stepper correctly with different values and label", () => {
    const marks = [
      { value: 0, label: "Start" },
      { value: 50, label: "Middle" },
      { value: 100, label: "End" },
    ];

    render(
      <StepperWithLabel
        presentValue={presentValue}
        horizontalStepperValues={horizontalStepperValues}
        width={width}
        marks={marks}
      />
    );

    const slider = screen.getByTestId("horizontal-slider");
    expect(slider).toBeInTheDocument();

    marks.forEach((mark) => {
      const markLabel = screen.getByText(mark.label);
      expect(markLabel).toBeInTheDocument();
    });
  });
  it("should return null when horizontalStepperValues are not provided", () => {
    const props = {
      presentValue: 3,
    };
    const { container } = render(<StepperWithLabel {...props} />);
    expect(container.firstChild).toBeNull();
  });
});
