import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AccountInfoPopup from ".";

describe("AccountInfoPopup", () => {
  const userName = "John Doe";
  const id = "user123";
  const handleLogOut = jest.fn();

  it("renders user information correctly", () => {
    const { getByText } = render(
      <AccountInfoPopup userName={userName} id={id} />
    );

    expect(getByText(userName)).toBeInTheDocument();
    expect(getByText(id)).toBeInTheDocument();
  });

  it("calls handleLogOut when the logout item is clicked", () => {
    const { getByText } = render(
      <AccountInfoPopup
        userName={userName}
        id={id}
        handleLogOut={handleLogOut}
      />
    );

    const logoutItem = getByText("Logout");

    fireEvent.click(logoutItem);
    expect(handleLogOut).toHaveBeenCalledTimes(1);
  });
});
