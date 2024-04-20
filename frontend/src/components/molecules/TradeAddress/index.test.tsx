import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { TradeAddressCard } from ".";
import { tradeAddressValue } from "../../../constants";
const onChangeFn = jest.fn();
describe("TradeAddressCard", () => {
  test("renders the component correctly and test the address field", () => {
    render(
      <TradeAddressCard
        label={"Trading Address 2"}
        value={tradeAddressValue}
        onChange={onChangeFn}
      />
    );
    expect(screen.getByTestId("tradeAddressCard")).toBeInTheDocument;
    const addressField = screen.getByRole("textbox");
    fireEvent.change(addressField, { target: { value: "address" } });
    expect(onChangeFn).toBeCalled;
  });
});
