import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { CheckBoxText } from ".";

describe("Typography tests", () => {
  test("renders the typography component", () => {
    render(<CheckBoxText label="Remember me" gap="16px" checked={true} />);
    const text = screen.getByText(/Remember me/i);
    expect(text).toBeInTheDocument();
  });
});
