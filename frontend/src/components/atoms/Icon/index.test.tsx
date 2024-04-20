import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MuiIcon from ".";
import url from "../../../../public/assets/icons/Lloydsbank.svg";
const altText = "this is icon";

describe("Icon component", () => {
  test("Should render Icon correctly", () => {
    render(<MuiIcon src={url} alt={altText} />);
    const iconElement = screen.getByRole("img");
    expect(iconElement).toBeInTheDocument();
  });

  test("Shpuld render Alt text correctly", () => {
    render(<MuiIcon src={url} alt={altText} />);
    const iconAltText = screen.getByAltText(altText);
    expect(iconAltText).toBeInTheDocument();
  });
});
