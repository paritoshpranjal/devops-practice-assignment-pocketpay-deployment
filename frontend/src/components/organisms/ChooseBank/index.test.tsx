import React from "react";
import { render, screen } from "@testing-library/react";
import ChooseBank from ".";

describe("ChooseBank Component", () => {
  it("should render without errors", () => {
    render(<ChooseBank />);
    expect(screen.getByTestId("select-bank")).toBeInTheDocument();
  });
});
