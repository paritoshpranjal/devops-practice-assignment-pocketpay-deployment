import { ThemeProvider } from "@emotion/react";
import React from "react";
import theme from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecipientDetailsPage } from "./pages/RecipientDetails";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import SignUpDetailsPage from "./pages/SignUpDetails";
import { YourBusinessPage } from "./pages/YourBusinessPage";
import { BusinessActivityPage } from "./pages/BusinessActivity";
import { UserDetailsPage } from "./pages/UserDetailsPage";
import HomePageFlow from "./pages/HomePageFlow";
import InitiateTransactionPage from "./pages/InitiateTransactionPage";
import TransferDetailPage from "./pages/TransferDetails";
import { VerificationDetailsPage } from "./pages/VerificationDetails";
import { PaymentAmountPage } from "./pages/PaymentAmountPage";
import DebitCardFlow from "./pages/DebitCardFlow";
import { BankAccountPaymentFlowPage } from "./pages/BankAccountPaymentFlowPage";
const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup-details" element={<SignUpDetailsPage />} />
            <Route path="/business-details" element={<YourBusinessPage />} />
            <Route
              path="/business-activity"
              element={<BusinessActivityPage />}
            />
            <Route path="/user-details" element={<UserDetailsPage />} />
            <Route path="/home-page" element={<HomePageFlow />} />
            <Route path="/send-money" element={<InitiateTransactionPage />} />
            <Route path="/payment" element={<PaymentAmountPage />} />
            <Route
              path="/recipient-details"
              element={<RecipientDetailsPage />}
            />
            <Route
              path="/verification-details"
              element={<VerificationDetailsPage />}
            />
            <Route path="/transfer-details" element={<TransferDetailPage />} />
            <Route path="/debit-flow" element={<DebitCardFlow />} />
            <Route path="/bank-flow" element={<BankAccountPaymentFlowPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};
export default App;
