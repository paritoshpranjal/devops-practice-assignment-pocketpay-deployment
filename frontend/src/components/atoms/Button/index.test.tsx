import React from "react";
import { render } from "@testing-library/react";
import MuiButton from ".";

describe("MuiButton Component", () => {
  it("renders the button with text and icon correctly", () => {
    const { getByText, getByTestId } = render(
      <MuiButton icon="icon.png" text="Button Text" variant="contained" />
    );

    const buttonIcon = getByTestId("icon-button").querySelector("img");
    const buttonText = getByText("Button Text");

    expect(buttonIcon).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
  });
  it("applies background color correctly", () => {
    const backgroundColor = "blue";
    const { getByTestId } = render(
      <MuiButton
        text="Button"
        variant="contained"
        backgroundColor={backgroundColor}
      />
    );

    const button = getByTestId("icon-button");

    expect(button).toHaveStyle(`background-color: ${backgroundColor}`);
  });
});
