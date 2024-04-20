import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { AccountCard } from ".";
import PERSON from "../../../../public/assets/icons/person.svg";
import { AccountCardValues } from "../../../constants";

describe("Account Card component", () => {
  test("renders the Account card", () => {
    render(
      <AccountCard
        icon={PERSON}
        altText="person"
        headingText={AccountCardValues.personalAccount[0]}
        subText={AccountCardValues.personalAccount[1]}
      />
    );
    const personalAccount = screen.getByText(
      AccountCardValues.personalAccount[0]
    );
    expect(personalAccount).toBeInTheDocument();
  });
  test("icon rendered successful", () => {
    render(
      <AccountCard
        icon={PERSON}
        altText="person"
        headingText={AccountCardValues.personalAccount[0]}
        subText={AccountCardValues.personalAccount[1]}
      />
    );
    const personIcon = screen.getByAltText("person");
    expect(personIcon).toBeInTheDocument();
  });
  test("on cliking the box", () => {
    const handleClick = jest.fn();
    render(
      <AccountCard
        icon={PERSON}
        altText="person"
        headingText={AccountCardValues.personalAccount[0]}
        subText={AccountCardValues.personalAccount[1]}
        handleCardClick={handleClick}
        clickable={true}
      />
    );
    const personalAccount = screen.getByTestId("account-card")
    expect(personalAccount).toBeInTheDocument();
    fireEvent.click(personalAccount);
  });
});
