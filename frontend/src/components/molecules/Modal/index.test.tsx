import React from "react";
import {render, screen } from "@testing-library/react";
import { MuiModal } from ".";

describe("Mui modal component", () => {
  test("renders the Mui Modal", () => {
    render(<MuiModal open={true} element={<div>Hello</div>} />);
    const modalelement = screen.getByText("Hello");
    expect(modalelement).toBeInTheDocument();
  });
  test("clicking on close modal", () => {
    const handleClose = jest.fn();
    render(<MuiModal open={true} element={<div>Hello</div>} onClose={handleClose} />);
    const modalelement = screen.getByText("Hello");
    expect(modalelement).toBeInTheDocument();

  });
  test("when the modal is closed", () => {
    const handleClose = jest.fn();
    render(<MuiModal open={false} element={<div>Hello</div>} onClose={handleClose} />);
    const modalelement = screen.queryByText("Hello");
    expect(modalelement).not.toBeInTheDocument();

  });

});

