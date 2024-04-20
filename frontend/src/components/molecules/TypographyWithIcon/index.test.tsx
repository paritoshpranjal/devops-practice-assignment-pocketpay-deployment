import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import IconTypograpy from ".";

describe("IconTypograpy Component", () => {
  it("should render with provided icon and content", () => {
    const { getByTestId } = render(
      <IconTypograpy icon="icon-source.png" content="Example Content" />
    );

    const contentElement = getByTestId("icon-typography-content");
    expect(contentElement).toBeInTheDocument();
    expect(contentElement).toHaveTextContent("Example Content");
  });

  it("should apply provided color and variant to the content", () => {
    const { getByTestId } = render(
      <IconTypograpy
        icon="icon-source.png"
        content="Colored Content"
        color="red"
        variant="h3"
      />
    );

    const contentElement = getByTestId("icon-typography-content");

    expect(contentElement).toHaveStyle("color: red");
    expect(contentElement).toHaveClass("MuiTypography-h3");
  });
});
