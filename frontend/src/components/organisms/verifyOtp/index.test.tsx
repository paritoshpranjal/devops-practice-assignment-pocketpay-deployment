import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import VerifyOTP from ".";

describe("VerifyOTP component", () => {
  const defaultProps = {
    phoneNumber: "+44020 7947 6330",
    handleVerifySubmit: jest.fn(),
    handleDifferentNum: jest.fn(),
  };

  it("renders the initial UI", () => {
    const { getByText, getByPlaceholderText } = render(
      <VerifyOTP {...defaultProps} />
    );

    expect(getByText("Enter the 6-digit code")).toBeInTheDocument();
    expect(
      getByText(`We sent it to ${defaultProps.phoneNumber}`)
    ).toBeInTheDocument();
    expect(getByPlaceholderText("Enter code here")).toBeInTheDocument();
    expect(getByText("Submit")).toBeInTheDocument();
  });

  it("enables the Submit button when a valid OTP is entered", () => {
    const { getByPlaceholderText, getByText } = render(
      <VerifyOTP {...defaultProps} />
    );

    const otpInput = getByPlaceholderText("Enter code here");
    const submitButton = getByText("Submit");

    fireEvent.change(otpInput, { target: { value: "123456" } });

    expect(submitButton).not.toBeDisabled();
  });

  it("disables the Submit button when an invalid OTP is entered", () => {
    const { getByPlaceholderText, getByText } = render(
      <VerifyOTP {...defaultProps} />
    );

    const otpInput = getByPlaceholderText("Enter code here");
    const submitButton = getByText("Submit");

    fireEvent.change(otpInput, { target: { value: "12345" } });

    expect(submitButton).toBeDisabled();
  });

  it('handles "I didn’t receive a code" click', () => {
    render(<VerifyOTP {...defaultProps} />);

    const notReceivedLink = screen.getByTestId("notReceived");

    fireEvent.click(notReceivedLink);
  });
  test("input fields focus correctly", () => {
    render(<VerifyOTP {...defaultProps} />);
    const otpInput = screen.getByPlaceholderText('Enter code here');
    
    fireEvent.focus(otpInput);
    fireEvent.blur(otpInput);
    fireEvent.change(otpInput, { target: { value: "123456" } });
    fireEvent.blur(otpInput);
   
  });
});
