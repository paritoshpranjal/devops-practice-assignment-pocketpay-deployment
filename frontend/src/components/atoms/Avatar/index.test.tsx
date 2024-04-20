import React from "react";
import { render } from "@testing-library/react";
import AvatarComponent from "./index";
import "@testing-library/jest-dom/extend-expect";
import Logo from "../../../../public/assets/images/avatar.svg";

describe("AvatarComponent", () => {
  it("renders the Avatar with the provided props", () => {
    const props = {
      src: Logo,
    };

    const { getByTestId } = render(<AvatarComponent {...props} />);
    const avatar = getByTestId("avatar");
    expect(avatar).toBeInTheDocument();
  });

  it("renders the Avatar with updated props", () => {
    const props = {
      src: Logo,
    };

    const { getByTestId } = render(<AvatarComponent {...props} />);
    const avatar = getByTestId("avatar");
    expect(avatar).toBeInTheDocument();
  });
});

export {};
