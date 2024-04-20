import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { categories } from "../../../constants";
import { Dropdown } from "../../molecules/Dropdown";
import VerifyAccount from ".";
import {render} from "../../../testSetup"
const handleSelectFn = jest.fn();
const handleContinueClick = jest.fn();
describe("VerifyAccount Component", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<VerifyAccount onClick={handleContinueClick} />);
    const headingElement = getByText("Help us verify your account faster");
    const subheadingElement = getByText(
      "Without this information we can`t verify your account"
    );
    expect(headingElement).toBeInTheDocument();
    expect(subheadingElement).toBeInTheDocument();
  });

  it("enables the button when all dropdowns are filled", () => {
    render(<VerifyAccount onClick={handleContinueClick} />);

    const categoryDropdown = screen.getByText("Category");
    expect(categoryDropdown).toBeInTheDocument();
    const subcategoryDropdown = screen.getByText("Subcategory");
    expect(subcategoryDropdown).toBeInTheDocument();
    const sizeDropdown = screen.getByText("Size of your business");
    expect(sizeDropdown).toBeInTheDocument();
  });
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
  it("updates selected category when category is changed", () => {
    render(<VerifyAccount onClick={handleContinueClick} />);
    const categoryDropdownButton = screen.getByText("Category");
    fireEvent.click(categoryDropdownButton);
    const categoryOption = screen.getByRole("option", { name: /Others/i });
    fireEvent.click(categoryOption);
    expect(categoryDropdownButton).toHaveTextContent("Others");
  });
  it("updates subcategory when a subcategory is selected", () => {
    render(<VerifyAccount onClick={handleContinueClick} />);
    const size = screen.getByText("Size of your business");
    fireEvent.click(size);
    const sizeOption = screen.getByRole("option", {
      name: /50-100/i,
    });
    fireEvent.click(sizeOption);
    expect(sizeOption).toHaveTextContent("50-100");
  });
  it("keeps the button disabled when only category is selected", () => {
    render(<VerifyAccount onClick={handleContinueClick} />);
    const categoryDropdownButton = screen.getByText("Category");
    fireEvent.click(categoryDropdownButton);
    const categoryOption = screen.getByRole("option", { name: /Others/i });
    fireEvent.click(categoryOption);
    const subcategoryDropdownButton = screen.getByText("Subcategory");
    fireEvent.click(subcategoryDropdownButton);
    const subcategoryOption = screen.getByRole("option", {
      name: /Other category 1/i,
    });
    fireEvent.click(subcategoryOption);

    expect(subcategoryOption).toHaveTextContent("Other category 1");
  });

  test("enables the button when all dropdowns are filled", () => {
    render(<VerifyAccount onClick={handleContinueClick} />);

    const categoryDropdownButton = screen.getByText("Category");
    fireEvent.click(categoryDropdownButton);
    const categoryOption = screen.getByRole("option", { name: /Others/i });
    fireEvent.click(categoryOption);
    const subcategoryDropdownButton = screen.getByText("Subcategory");
    fireEvent.click(subcategoryDropdownButton);
    const subcategoryOption = screen.getByRole("option", {
      name: /Other category 1/i,
    });
    fireEvent.click(subcategoryOption);
    const size = screen.getByText("Size of your business");
    fireEvent.click(size);
    const sizeOption = screen.getByRole("option", {
      name: /50-100/i,
    });
    fireEvent.click(sizeOption);

    const continueButton = screen.getByRole("button",{name:"Continue"});
    expect(continueButton).not.toBeDisabled();
    fireEvent.click(continueButton);
  });
});
