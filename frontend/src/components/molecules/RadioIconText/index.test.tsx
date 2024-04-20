import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import RadioIconText, { RadioIconTextProps } from "./index";

describe("PaymentCard", () => {
  it("should render the RadioIconText", () => {
    render(<RadioIconText flexDirection={"row"} />);
  });
  const defaultProps: RadioIconTextProps = {
    icon: "icon-url",
    cardContent: "Card Content",
    color: "white",
    cardVariant: "body1",
    detailVariant: "body1",
    width: "200px",
    height: "200px",
    iconColor: "red",
    flexDirection: "row",
  };

  it("should render the payment card component with provided props", () => {
    const { getByTestId } = render(<RadioIconText {...defaultProps} />);

    const paymentCard = getByTestId("payment-card");
    expect(paymentCard).toBeInTheDocument();

    const cardContent = getByTestId("card-content");
    expect(cardContent).toBeInTheDocument();
  });
});
