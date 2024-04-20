import React, { useContext, useEffect, useState } from "react";
import { Stack, styled } from "@mui/material";
import { MainTemplate } from "../../components/templates/MainTemplate";
import {
  DEBIT_CARD_FLOW,
  Fallback,
  HORIZONTAL_STEPPER_VALUES,
} from "../../constants";
import { TransferDetailsCard } from "../../components/organisms/TransferDetailsCard";
import CardType from "../../components/organisms/CardType";
import { PurchaseconfirmCard } from "../../components/molecules/PurchaseConfirmCard";
import TransferType from "../../components/organisms/TrasferType";
import { ErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";
import { TransactionContext } from "../../context/TransactionContext";
import TypographyComponent from "../../components/atoms/Typography";
import Theme from "../../theme";
import { TransactionService } from "../../services/Transaction";
import { createTransaction, setToken } from "../../components/utils/functions";
import { BankCardInterface } from "../../components/utils/interfaces/Card";
import { PaymentInterface } from "../../components/utils/interfaces/Payment";

const OuterBox = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  gap: "24px",
  height: "36rem",
  overflowY: "auto",
  ["&::-webkit-scrollbar"]: {
    display: "none",
  },
});

const DebitCardFlow = () => {
  const navigate = useNavigate();
  const { transaction, setTransaction } = useContext(TransactionContext);
  const [cards, setCards] = useState<BankCardInterface[]>([]);
  const [businessId, setBusinessId] = useState(0);
  const fetchDetails = async () => {
    await TransactionService.getPaymentDetails("CARD").then((res) => {
      const details = res.data as PaymentInterface[];
      setTransaction((prev) => ({
        ...prev,
        paymentId: details[0].id,
      }));
      setCards(
        details.map((card) => {
          return {
            ...card.debitCardPayment,
            id: card.id,
          };
        })
      );
    });
    await TransactionService.getBusiness().then((res) => {
      setBusinessId(res.data[0].id);
    });
  };
  useEffect(() => {
    setToken(localStorage.getItem("accessToken") as string);
    fetchDetails();
  }, []);

  const [debitCardState, setDebitCardState] = useState({
    selectedRadio: "",
    showDebitCard: true,
    showConfirmPurchase: false,
  });
  const handleRadioChange = (value: string) => {
    setDebitCardState({ ...debitCardState, selectedRadio: value });
  };
  const [cardDigits, setCardDigits] = useState("");
  const handleContinueToPay = () => {
    if (debitCardState.selectedRadio === "debit") {
      setDebitCardState({
        ...debitCardState,
        showDebitCard: false,
        showConfirmPurchase: !debitCardState.showConfirmPurchase,
      });
    } else {
      navigate("/bank-flow");
    }
  };
  useEffect(() => {
    TransactionService.getPaymentById(transaction.paymentId).then((res) => {
      setCardDigits(res.data.debitCardPayment.cardNumber);
    });
  }, [transaction.paymentId]);
  const onClickCompleteButton = async () => {
    createTransaction(transaction, businessId);
    navigate("/home-page");
  };

  const handleCancelTransferButton = () => {
    navigate("/home-page");
  };

  const handleBackButton = () => {
    navigate("/transfer-details");
  };
  const shouldShowDebitCard = debitCardState.showDebitCard;
  const shouldShowConfirmPurchase = debitCardState.showConfirmPurchase;

  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <MainTemplate
        showClose={true}
        showStepper={true}
        showBack={true}
        stepperWidth="800px"
        stepperValues={HORIZONTAL_STEPPER_VALUES}
        presentValue={6}
        onClickBack={handleBackButton}
      >
        <Stack>
          <OuterBox>
            {shouldShowDebitCard && (
              <TransferType onRadioChange={handleRadioChange} />
            )}
            {shouldShowConfirmPurchase && <CardType cards={cards} />}
            {!shouldShowDebitCard && !shouldShowConfirmPurchase && (
              <Stack gap={"1.25rem"}>
                <TypographyComponent
                  variant={"h1"}
                  color={Theme.palette.text.high}
                  text="Pay with your card"
                />
                <PurchaseconfirmCard
                  cardDigits={Number(cardDigits)}
                  currencytype={transaction.sendCountryCode}
                  amount={transaction.sendAmount}
                  handleCompleteClick={onClickCompleteButton}
                />
              </Stack>
            )}
            <Stack width={"474px"}>
              <TransferDetailsCard
                payState={shouldShowDebitCard || shouldShowConfirmPurchase}
                receiverCurrencyType={transaction.recieveCountryCode}
                senderCurrencyType={transaction.sendCountryCode}
                currencyExchangeRate={transaction.rate}
                receiverData={transaction.recipientDetails}
                fee={DEBIT_CARD_FLOW.FEE}
                totalAmount={transaction.sendAmount}
                amount_to_convert={DEBIT_CARD_FLOW.AMOUNT}
                handleContinueButton={handleContinueToPay}
                handleCancelButton={handleCancelTransferButton}
              />
            </Stack>
          </OuterBox>
        </Stack>
      </MainTemplate>
    </ErrorBoundary>
  );
};
export default DebitCardFlow;
