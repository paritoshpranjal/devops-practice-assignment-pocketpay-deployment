import React, { useContext } from "react";
import { MainTemplate } from "../../components/templates/MainTemplate";
import { Stack, styled } from "@mui/material";
import {
  Fallback,
  TRANSFER_DETAILS,
  TRANSFER_STEPPER_VALUES,
} from "../../constants";
import { ReviewTransferDetails } from "../../components/organisms/reviewTransferDetails";
import { ErrorBoundary } from "react-error-boundary";
import { TransactionContext } from "../../context/TransactionContext";
import { useNavigate } from "react-router-dom";

export const OuterLayout = styled(Stack)({
  marginLeft: "4rem",
  marginRight: "4rem",
  height: "33.5rem",
});

const TransferDetailPage = () => {
  const navigate = useNavigate();

  const { transaction } = useContext(TransactionContext);

  const handleContinueButton = () => {
    navigate("/debit-flow");
  };

  const handleBackButton = () => {
    navigate("/verification-details");
  };

  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <MainTemplate
        showStepper={true}
        stepperValues={TRANSFER_STEPPER_VALUES}
        presentValue={5}
        stepperWidth="49.25rem"
        showClose={true}
        showBack={true}
        onClickBack={handleBackButton}
      >
        <OuterLayout>
          <ReviewTransferDetails
            onClickContinueButton={handleContinueButton}
            sendAmount={transaction.sendAmount}
            sendCountryCode={transaction.sendCountryCode}
            reciepientCountryCode={transaction.recieveCountryCode}
            rate={transaction.rate}
            fee={TRANSFER_DETAILS.FEE}
            amount={TRANSFER_DETAILS.AMOUNT}
            name={`${transaction.recipientDetails.firstName} ${transaction.recipientDetails.lastName}`}
            email={transaction.recipientDetails.email}
            accountNo={transaction.recipientDetails.accountNo}
            accountType={transaction.recipientDetails.accountType}
          />
        </OuterLayout>
      </MainTemplate>
    </ErrorBoundary>
  );
};
export default TransferDetailPage;
