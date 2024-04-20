import React from "react";
import { render, screen } from "@testing-library/react";
import CustomChip from ".";
import "@testing-library/jest-dom/extend-expect";

describe("CustomChip", () => {
  test("should render chip with provided label", () => {
    render(<CustomChip label="Test Chip" />);
    const chipElement = screen.getByText("Test Chip");
    expect(chipElement).toBeInTheDocument();
  });

  test("calls onClick handler when chip is clicked", () => {
    const onClickMock = jest.fn();
    render(<CustomChip label="Clickable Chip" onClick={onClickMock} />);

    const chipElement = screen.getByText("Clickable Chip");
    chipElement.click();

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
