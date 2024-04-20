import React from "react";
import { render, screen } from "@testing-library/react";
import ShareTrackingModal from ".";

describe("ShareTrackingModal", () => {
  it("renders the component with correct text", () => {
    render(<ShareTrackingModal />);
    expect(screen.getByText("Share tracking link")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Share the link above, and they can securely track this transfer."
      )
    ).toBeInTheDocument();
  });

  it("displays the Copy and Email buttons", () => {
    render(<ShareTrackingModal />);
    expect(screen.getByText("Copy")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
  });
});
