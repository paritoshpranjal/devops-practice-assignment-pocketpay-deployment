import { render } from "@testing-library/react";
import React from "react";

import "@testing-library/jest-dom/extend-expect";
import { SIDE_NAV_ITEMS } from "../../../constants";
import SideNavBar from ".";

it("renders the PocketPay logo", () => {
  const { getByAltText } = render(<SideNavBar data={SIDE_NAV_ITEMS} />);
  const logo = getByAltText("pocketpay-logo");
  expect(logo).toBeInTheDocument();
});

it("renders the menu items", () => {
  const { getByText } = render(<SideNavBar data={SIDE_NAV_ITEMS} />);
  expect(getByText("Home")).toBeInTheDocument();
  expect(getByText("Cards")).toBeInTheDocument();
});
