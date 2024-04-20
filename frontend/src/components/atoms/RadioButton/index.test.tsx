import React from "react";
import { render } from "@testing-library/react";
import { CustomRadio } from ".";
import "@testing-library/jest-dom/extend-expect";

describe("CustomRadio component", () => {
  test("renders without crashing", () => {
    render(<CustomRadio size={"small"} />);
  });
});