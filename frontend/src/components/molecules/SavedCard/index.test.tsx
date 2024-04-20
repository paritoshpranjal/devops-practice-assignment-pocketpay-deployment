import React from "react";
import SavedCard from ".";
import { fireEvent, render, screen } from "@testing-library/react";

describe("SavedCard component", () => {
  const props = {
    cardName: "My Card",
    lastFourDigits: "1234",
    expiryDate: "12/24",
    checked: true,
  };

  it("renders the SavedCard component correctly", () => {
    render(<SavedCard {...props} />);
    expect(screen.getByText("My Card")).toBeDefined();
    expect(screen.getByText("Last four digit")).toBeDefined();
    expect(screen.getByText("1234")).toBeDefined();
    expect(screen.getByText("Expiry date")).toBeDefined();
    expect(screen.getByText("12/24")).toBeDefined();
  });
  test("updates the CVV value on input change", () => {
    render(
      <SavedCard
        cardName="Test Card"
        lastFourDigits="1234"
        expiryDate="12/24"
      />
    );
    const cvvInput = screen.getByPlaceholderText(
      "CVV / CVC"
    ) as HTMLInputElement;
    fireEvent.change(cvvInput, { target: { value: "123" } });

    expect(cvvInput.value).toBe("123");
  });
});
