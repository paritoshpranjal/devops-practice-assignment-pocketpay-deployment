import React from "react";
import "@testing-library/jest-dom";
import {screen } from "@testing-library/react";
import { MainTemplate } from ".";
import { LoginCard } from "../../organisms/LoginCard";
import { LoginCardValues, HORIZONTAL_STEPPER_VALUES } from "../../../constants";
import { FillUserDetails } from "../../organisms/FillUserDetails";
import {render} from "../../../testSetup"
describe("MainTemplate", () => {
  test("renders the component correctly", () => {
    render(
      <MainTemplate>
        <LoginCard />
      </MainTemplate>
    );
    expect(screen.getByTestId("mainTemplate")).toBeInTheDocument();
    expect(screen.getByText(LoginCardValues.heading)).toBeInTheDocument;
  });
  test("renders the component when props value are true", () => {
    render(
      <MainTemplate
        showClose
        showStepper
        stepperValues={HORIZONTAL_STEPPER_VALUES}
        presentValue={1}
        showBack
        stepperWidth="788px"
      >
        <FillUserDetails onClickContinue={() => {}} />,
      </MainTemplate>
    );
    expect(screen.getByText(HORIZONTAL_STEPPER_VALUES[1])).toBeInTheDocument;
  });
  test("renders the component with default step value", () => {
    render(
      <MainTemplate
        showClose
        showStepper
        stepperValues={HORIZONTAL_STEPPER_VALUES}
        showBack
        stepperWidth="788px"
      >
        <FillUserDetails onClickContinue={() => {}} />
      </MainTemplate>
    );
    expect(screen.getByText(HORIZONTAL_STEPPER_VALUES[1])).toBeInTheDocument;
  });
});
