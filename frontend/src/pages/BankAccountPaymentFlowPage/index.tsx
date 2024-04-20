import React, { useContext, useEffect, useState } from "react";
import { MainTemplate } from "../../components/templates/MainTemplate";
import {
  BANK_ACCOUNT_PAYMENT_FLOW_VALUES,
  Fallback,
  HORIZONTAL_STEPPER_VALUES,
} from "../../constants";
import ChooseBank from "../../components/organisms/ChooseBank";
import { OnlineBankingCard } from "../../components/organisms/OnlineBankingCard";
import { PayFromAccountCard } from "../../components/organisms/PayFromAccount";
import { Stack } from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";
import { TransactionContext } from "../../context/TransactionContext";
import { TransactionService } from "../../services/Transaction";
import { createTransaction, setToken } from "../../components/utils/functions";
import { BankInterface } from "../../components/utils/interfaces/Bank";

export const BankAccountPaymentFlowPage = () => {
  const navigate = useNavigate();
  const { transaction, setTransaction } = useContext(TransactionContext);

  const [displayComponent, setDisplayComponent] = useState("chooseBank");
  const [componentHistory, setComponentHistory] = useState<string[]>([]);
  const [businessId, setBusinessId] = useState(0);
  const handleBankOnClick = () => {
    setComponentHistory([...componentHistory, displayComponent]);
    setDisplayComponent("payFromAccount");
  };

  const handlePayFromAccountContinue = () => {
    setComponentHistory([...componentHistory, displayComponent]);
    setDisplayComponent("onlineBanking");
  };

  const handleBackButton = () => {
    if (componentHistory.length > 0) {
      const previousComponent = componentHistory.pop();
      setDisplayComponent(previousComponent!);
      setComponentHistory([...componentHistory]);
    } else {
      navigate("/debit-flow");
    }
  };

  const handleCancelButton = () => {
    navigate("/home-page");
  };

  const handleContinueButton = () => {
    createTransaction(transaction, businessId);
    navigate("/home-page");
  };
  const [bankDetails, setBankDetails] = useState({} as BankInterface);
  const fetchDetails = async () => {
    await TransactionService.getPaymentDetails("BANK").then((res) => {
      setBankDetails(res.data[0].bankPayment);
      setTransaction((prev) => ({
        ...prev,
        paymentId: res.data[0].id,
      }));
    });
    await TransactionService.getBusiness().then((res) => {
      setBusinessId(res.data[0].id);
    });
  };
  useEffect(() => {
    setToken(localStorage.getItem("accessToken") as string);
    fetchDetails();
  }, []);
  const data = {
    name: `${transaction.recipientDetails.firstName} ${transaction.recipientDetails.lastName}`,
    amount: `${transaction.sendAmount} ${transaction.sendCountryCode}`,
    accountNo: bankDetails.accountNo,
    sortCode: bankDetails.code,
  };

  const renderComponent = (displayComponent: string) => {
    switch (displayComponent) {
      case "chooseBank":
        return (
          <ChooseBank
            onClickCancelButton={handleCancelButton}
            onClickBankAccount={handleBankOnClick}
          />
        );
      case "payFromAccount":
        return (
          <PayFromAccountCard
            accountType={BANK_ACCOUNT_PAYMENT_FLOW_VALUES.accountType}
            amount={`${transaction.sendAmount} ${transaction.sendCountryCode}`}
            handleContinueButton={handlePayFromAccountContinue}
          />
        );
      case "onlineBanking":
        return (
          <OnlineBankingCard
            data={data}
            handleContinueButton={handleContinueButton}
            handleCancelTransferButton={handleCancelButton}
          />
        );
    }
  };

  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <MainTemplate
        showStepper
        presentValue={6}
        showBack
        showClose
        onClickBack={handleBackButton}
        stepperValues={HORIZONTAL_STEPPER_VALUES}
        stepperWidth={"788px"}
      >
        <Stack marginLeft={"4.2rem"} marginRight={"4.2rem"}>
          {renderComponent(displayComponent)}
        </Stack>
      </MainTemplate>
    </ErrorBoundary>
  );
};
