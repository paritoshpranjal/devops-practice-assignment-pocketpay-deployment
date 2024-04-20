import { fireEvent, render, screen } from "@testing-library/react";
import { Dropdown } from ".";
import React from "react";
import { categories, countriesDropdownList } from "../../../constants";
const handleSelectFn = jest.fn();
describe("Dropdown component", () => {
  test("render dropdown correctly and clicking on menu item", () => {
    render(
      <Dropdown
        value={""}
        onSelectValue={handleSelectFn}
        placeholder={"Category"}
        label={"Category"}
        items={categories}
      />
    );
    const selectField = screen.getByRole("button", {
      name: /Category/i,
    });
    expect(selectField).toBeInTheDocument;
    fireEvent.mouseDown(selectField);
    const option = screen.getByRole("option", {
      name: /Others/i,
    });
    expect(option).toBeInTheDocument;
    fireEvent.click(option);
    expect(handleSelectFn).toBeCalled;
  });
  test("render dropdown for countries", () => {
    render(
      <Dropdown
        countries={countriesDropdownList}
        label="Country of registration"
        onSelectValue={handleSelectFn}
        placeholder="Select your country"
        value="India"
      />
    );
    const selectField = screen.getByRole("button", {
      name: /India/i,
    });
    expect(selectField).toBeInTheDocument;
  });
});
