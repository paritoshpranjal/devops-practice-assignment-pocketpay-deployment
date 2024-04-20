import { fireEvent, render, screen } from "@testing-library/react";
import Search from ".";
import { expect } from "@jest/globals";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import {
  businessOptionList,
  searchBuisnessPlaceholderText,
} from "../../../constants";
const onChangeFn = jest.fn();
const onClickFn = jest.fn();

describe("MyTextField", () => {
  it("renders the input field with the correct placeholder", () => {
    render(
      <Search
        placeholder="Select your business"
        options={businessOptionList}
        onChange={onChangeFn}
        value={""}
        onValueClick={onClickFn}
      />
    );
    const inputElement = screen.getByPlaceholderText(
      searchBuisnessPlaceholderText
    );
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, { target: { value: "z" } });
    const option = screen.getByText(/zemoso/i);
    expect(option).toBeInTheDocument;
    fireEvent.click(option);
    expect(screen.queryByText(/Zentech/i)).not.toBeInTheDocument;
  });
});
