import React from "react";
import "@testing-library/jest-dom";
import { screen, fireEvent } from "@testing-library/react";
import { RECIPEINT_TYPE_VALUES_DATA } from "../../../constants";
import RecipientCard from ".";
import { render } from "../../../testSetup";

describe("Recipient Type molecule", () => {
  test("Icons rendering correctly", () => {
    render(<RecipientCard cardId={3} labels={RECIPEINT_TYPE_VALUES_DATA} />);
    const icons = screen.getAllByRole("img");
    expect(icons.length).toBe(3);
  });
  test("onClick working correctly", () => {
    const mockHandleClick = jest.fn();
    render(
      <RecipientCard
        cardId={3}
        labels={RECIPEINT_TYPE_VALUES_DATA}
        handleClick={mockHandleClick}
      />
    );
    const icons = screen.getAllByRole("img");
    expect(icons.length).toBe(3);

    const clickableIcon = screen.getByAltText("dollar logo");
    expect(clickableIcon).toBeInTheDocument();
    fireEvent.click(clickableIcon);
    expect(mockHandleClick).toBeCalled();
  });
});
