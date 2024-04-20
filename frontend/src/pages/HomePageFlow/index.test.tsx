import React from "react";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import HomePageFlow from ".";
import {
  AN_EXISTING_ACCOUNT,
  SELECT_AN_OPTION,
  ROSS_GENER,
  CANCEL_TRANSFER_BUTTON,
  HP_TEXTLINE_ONE,
} from "../../constants";
import { useAuth0 } from "@auth0/auth0-react";
import { render } from "../../testSetup";
import { act } from "react-dom/test-utils";
import { PAYMENTS, transactions } from "../../mocks/constants";
import API from "../../services";
jest.mock("@auth0/auth0-react");
jest.mock("../../services");
const mockedAxios = API as jest.Mocked<typeof API>;
describe("HomeTransaction", () => {
  const logoutFn = jest.fn();
  beforeEach(() => {
    (useAuth0 as jest.Mock).mockReturnValue({
      isAuthenticated: true,
      logout: logoutFn,
    });
  });
  test("renders the Header", async () => {
    await act(async () => {
      mockedAxios.get
        .mockResolvedValueOnce({ data: transactions })
        .mockResolvedValueOnce({ data: PAYMENTS });
      render(<HomePageFlow />);
    });
    await waitFor(async () => {
      const expandIcons = screen.getAllByAltText("expandIcon");
      return expandIcons.length > 0;
    });
    const username = screen.getByText("Ross Gener");
    expect(username).toBeInTheDocument();
    const avatar = screen.getByTestId("avatar");
    expect(avatar).toBeInTheDocument();

    fireEvent.click(avatar);
    expect(screen.getByText("Logout")).toBeInTheDocument();

    fireEvent.click(avatar);
  });

  test("renders HomePageFlow with header and HomeTransaction and handles data toggle", async () => {
    await act(async () => {
      mockedAxios.get
        .mockResolvedValueOnce({ data: transactions })
        .mockResolvedValueOnce({ data: PAYMENTS });
      mockedAxios.patch.mockResolvedValue({ data: {} });
      render(<HomePageFlow />);
    });
    await waitFor(async () => {
      const expandIcons = screen.getAllByAltText("expandIcon");
      return expandIcons.length > 0;
    });

    const expandIcons = screen.getAllByAltText("expandIcon");

    expect(expandIcons.length).toBe(2);

    fireEvent.click(expandIcons[0]);

    const cancelButton1 = screen.getAllByText("Cancel the transfer")[0];
    fireEvent.click(cancelButton1);
    const existingAccountElement = screen.getByText(AN_EXISTING_ACCOUNT);
    expect(existingAccountElement).toBeInTheDocument();
    fireEvent.click(existingAccountElement);
    const selectElement = screen.getByLabelText(SELECT_AN_OPTION);
    expect(selectElement).toBeInTheDocument();
    fireEvent.mouseDown(selectElement);
    const nameElement = screen.getAllByText(ROSS_GENER);
    expect(nameElement.length).toBe(2);
    fireEvent.click(nameElement[1]);
    const cancel = screen.getByText(CANCEL_TRANSFER_BUTTON);
    fireEvent.click(cancel);
  });
  test("click on logout button on logoutPopUp", async () => {
    await act(async () => {
      mockedAxios.get
        .mockResolvedValueOnce({ data: transactions })
        .mockResolvedValueOnce({ data: PAYMENTS });
      mockedAxios.patch.mockResolvedValue({ data: {} });
      render(<HomePageFlow />);
    });
    await waitFor(async () => {
      const expandIcons = screen.getAllByAltText("expandIcon");
      return expandIcons.length > 0;
    });
    const avatar = screen.getByTestId("avatar");
    fireEvent.click(avatar);
    expect(screen.getByText("Logout")).toBeInTheDocument();
    const logout = screen.getByText("Logout");
    fireEvent.click(logout);
    expect(logoutFn).toBeCalled();
  });
  test("click on cancel transfer button and open modal", async () => {
    await act(async () => {
      mockedAxios.get
        .mockResolvedValueOnce({ data: transactions })
        .mockResolvedValueOnce({ data: PAYMENTS });
      mockedAxios.patch.mockResolvedValue({ data: {} });
      render(<HomePageFlow />);
    });
    await waitFor(async () => {
      const expandIcons = screen.getAllByAltText("expandIcon");
      return expandIcons.length > 0;
    });
    const expandIcons = screen.getAllByAltText("expandIcon");
    const cancelButton = screen.getByTestId("send-money-button");
    expect(expandIcons.length).toBe(2);

    fireEvent.click(expandIcons[0]);

    fireEvent.click(cancelButton);
  });
  test("renders the component when transaction list is empty", async () => {
    await act(async () => {
      mockedAxios.get
        .mockResolvedValueOnce({ data: [] })
        .mockResolvedValueOnce({ data: PAYMENTS });
      mockedAxios.patch.mockResolvedValue({ data: {} });
      render(<HomePageFlow />);
    });
    await waitFor(async () => {
      expect(screen.queryByTestId("loading")).not.toBeInTheDocument();
    });
    expect(screen.getByText(HP_TEXTLINE_ONE)).toBeInTheDocument();
  });
});
