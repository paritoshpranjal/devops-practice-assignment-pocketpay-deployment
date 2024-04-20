import React from "react";
import {
  render as testingLibraryRender,
  RenderOptions,
  RenderResult,
} from "@testing-library/react";
import { UserBusinessDetailsContextProvider } from "./context/UserBusinessDetailsContext";
import { TransactionContextProvider } from "./context/TransactionContext";
import { BrowserRouter } from "react-router-dom";
import { SignUpContextProvider } from "./context/CountryContext";
interface WrapperProps {
  children: React.ReactNode;
}

const wrapper = ({ children }: WrapperProps) => {
  return (
    <BrowserRouter>
      <TransactionContextProvider>
        <UserBusinessDetailsContextProvider>
          <SignUpContextProvider>
          {children}
          </SignUpContextProvider>
        </UserBusinessDetailsContextProvider>
      </TransactionContextProvider>
    </BrowserRouter>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: RenderOptions
): RenderResult => testingLibraryRender(ui, { wrapper, ...options });

export * from "@testing-library/react";

export { customRender as render };
