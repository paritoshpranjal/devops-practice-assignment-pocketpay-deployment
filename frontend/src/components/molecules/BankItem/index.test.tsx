import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BankItem } from ".";
import sbiIcon from "../../../../public/assets/icons/sbi.svg";

describe("BankItem", () => {
  test("renders the bankItem component correctly", () => {
    render(
      <BankItem icon={sbiIcon} alt={"sbiIcon"} name={"State Bank of India"} />
    );
    const bankItem = screen.getByTestId("bankItem");
    expect(bankItem).toBeInTheDocument();
  });
});
