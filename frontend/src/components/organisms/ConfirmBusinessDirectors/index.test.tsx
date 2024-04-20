import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import ConfirmBusinessDirectors from ".";
import { ConfirmDirectors } from "../../../constants";
import { render } from "../../../testSetup";
describe("ConfirmBusinessDirectors Component", () => {
  it("renders without crashing", () => {
    render(<ConfirmBusinessDirectors isDirectors={true} />);
  });

  it("displays the correct title and subtitle when isDirectors is true", () => {
    render(<ConfirmBusinessDirectors isDirectors={true} />);
    expect(
      screen.getByText("Confirm your business directors")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Please confirm these details from companies house. If anyone’s missing, add them below."
      )
    ).toBeInTheDocument();
  });

  it("displays the correct title and subtitle when isDirectors is false", () => {
    render(<ConfirmBusinessDirectors isDirectors={false} />);
    expect(
      screen.getByText("Confirm your business owners")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Please confirm these details from companies house. If anyone else controls more than 25% of your business, add them below."
      )
    ).toBeInTheDocument();
  });

  it('adds a new director when "Add another director" button is clicked', () => {
    render(<ConfirmBusinessDirectors isDirectors={true} />);
    const button = screen.getByTestId("add-button");
    fireEvent.click(button);
    expect(screen.getByText("Director 2")).toBeInTheDocument();

    const close = screen.getAllByTestId("close-icon");
    fireEvent.click(close[1]);
  });
  it("should update the firstName input field", () => {
    render(<ConfirmBusinessDirectors isDirectors={true} />);

    const firstNameInput = screen.getByLabelText(
      "First name"
    ) as HTMLInputElement;

    fireEvent.change(firstNameInput, { target: { value: "person1" } });
    expect(firstNameInput.value).toBe("person1");

    fireEvent.change(firstNameInput, { target: { value: "" } });
  });
  it("should update the firstName input field error", () => {
    render(<ConfirmBusinessDirectors isDirectors={true} />);

    const firstNameInput = screen.getByLabelText(
      "First name"
    ) as HTMLInputElement;

    fireEvent.change(firstNameInput, { target: { value: " " } });
    const errorText = screen.getByText(ConfirmDirectors.FIRSTNAMEERR);
    expect(errorText).toBeInTheDocument();
  });
  it("should update the firstName input field", () => {
    render(<ConfirmBusinessDirectors isDirectors={false} />);

    const firstNameInput = screen.getByLabelText(
      "Last name"
    ) as HTMLInputElement;

    fireEvent.change(firstNameInput, { target: { value: "person1" } });
    expect(firstNameInput.value).toBe("person1");

    fireEvent.change(firstNameInput, { target: { value: "" } });
    const errorText = screen.getByText(ConfirmDirectors.LASTNAMEERR);
    expect(errorText).toBeInTheDocument();
  });
  it("should handle dropdown selection", () => {
    render(<ConfirmBusinessDirectors isDirectors={true} />);

    const divElementToClick = screen.getByRole("button", {
      name: "Country of residence",
    });
    fireEvent.click(divElementToClick);
    const selectedOption = screen.getByText("India");
    fireEvent.click(selectedOption);
  });
  test("calls the onChange function when the date is changed", () => {
    render(<ConfirmBusinessDirectors isDirectors={true} />);
    const close = screen.getAllByTestId("close-icon");
    fireEvent.click(close[0]);
    const textfields = screen.getAllByRole("textbox");
    fireEvent.change(textfields[2], { target: { value: "18-03-2001" } });
  });
});
