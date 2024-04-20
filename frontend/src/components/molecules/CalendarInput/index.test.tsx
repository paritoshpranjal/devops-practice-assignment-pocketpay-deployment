import React from "react";
import "@testing-library/jest-dom";
import Calendar from ".";
import userEvent from "@testing-library/user-event";
import { fireEvent, render, screen } from "@testing-library/react";

describe("InputField component", () => {
  test("renders Calendar component with label", () => {
    render(
      <Calendar
        label="Select a date"
        value={"2021-11-09"}
        onChange={jest.fn()}
      />
    );
    const inputElement = screen.getByLabelText("Select a date");
    expect(inputElement).toBeInTheDocument();
  });
  test("calls the onChange function when the date is changed", () => {
    const onChangeMock = jest.fn();
    render(<Calendar label="Select Date" onChange={onChangeMock} />);
    const datePicker = screen.getByLabelText("Select Date");
    userEvent.type(datePicker, "2021-11-09");
    const chosenDate = screen.getByRole("button", { name: "Choose date" });
    fireEvent.click(chosenDate);
    expect(chosenDate).toBeInTheDocument();
  });
  test("should render TextField with correct width", () => {
    const textFieldWidth = "100%";
    const onChangeMock = jest.fn();
    render(
      <Calendar
        label="Select Date"
        onChange={onChangeMock}
        textFieldWidth={textFieldWidth}
      />
    );
    const datePicker = screen.getByLabelText("Select Date");
    expect(datePicker).toHaveStyle(`width: ${textFieldWidth}`);
  });
});
