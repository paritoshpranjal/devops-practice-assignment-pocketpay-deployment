import { Box, Grid, styled } from "@mui/material";
import React, { useContext, useState } from "react";
import TypographyComponent from "../../atoms/Typography";
import Theme from "../../../theme";
import { StyledButton } from "../../molecules/TradeAddress";
import {
  accountNoHelperText,
  accountNoRegex,
  emailRegex,
  invalidEmail,
  reviewTransferDetails,
} from "../../../constants";
import { DetailBlock, DetailBlockProp } from "./DetailBlock";
import {
  EditTransferDetails,
  EditTransferDetailsProp,
} from "./EditTransferDetails";
import { addHoursToDate, formatDate } from "../../utils/functions";
import { TransactionContext } from "../../../context/TransactionContext";
interface ReviewTransferDetailsProps {
  sendAmount: number;
  sendCountryCode: string;
  reciepientCountryCode: string;
  rate: number;
  fee: string;
  amount: number;
  name: string;
  email: string;
  accountNo: string;
  accountType: string;
  onClickContinueButton?: () => void;
}
export const StyledBox = styled(Box)({
  maxHeight: "35.625rem",
  overflow: "hidden",
  overflowY: "auto",
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  ["&::-webkit-scrollbar"]: {
    display: "none",
  },
});
export const ReviewTransferDetails = (props: ReviewTransferDetailsProps) => {
  const sendAmount = `${props.sendAmount.toFixed(2)}`;
  const [transferAmount, setTransferAmount] = useState(sendAmount);
  const recipientAmount = `${(Number(transferAmount) * props.rate).toFixed(
    2
  )} ${props.reciepientCountryCode}`;
  const [editTransfer, setEditTransfer] = useState(false);
  const { setTransaction } = useContext(TransactionContext);
  const handleTransferAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTransferAmount(e.target.value);
  };
  const [tempTransferAmount, setTempTransferAmount] = useState(sendAmount);
  const editTransferDetails: EditTransferDetailsProp = {
    detailHead: "Transfer details",
    items: [
      {
        label: "Amount",
        name: "amount",
        value: transferAmount,
        onChange: handleTransferAmount,
        endAdornment: (
          <TypographyComponent variant="body2" text={props.sendCountryCode} />
        ),
      },
      {
        label: "Fee",
        name: "fee",
        value: `00.00 ${props.sendCountryCode}`,
        disabled: true,
      },
      {
        label: "Amount we'll convert",
        name: "convertAmount",
        value: `77.74 ${props.reciepientCountryCode}`,
        disabled: true,
      },
      {
        label: "Guaranteed rate",
        name: "rate",
        value: `1 ${props.sendCountryCode}=${props.rate} ${props.reciepientCountryCode}`,
        disabled: true,
      },
    ],
    onClickCancel: () => {
      setEditTransfer(!editTransfer);
      setTransferAmount(tempTransferAmount);
    },
    onClickSave: () => {
      setTempTransferAmount(transferAmount);
      setEditTransfer(!editTransfer);
    },
  };
  const transferDetailsProps: DetailBlockProp = {
    detailHead: "Transfer details",
    detailLink: "Edit",
    sendAmount: `${transferAmount} ${props.sendCountryCode}`,
    recepientAmount: recipientAmount,
    items: [
      {
        name: "Fee",
        value: `${props.fee} ${props.sendCountryCode}`,
      },
      {
        name: "Amount we’ll convert",
        value: `${props.amount} ${props.sendCountryCode}`,
      },
      {
        name: "Guaranteed rate",
        value: `1 ${props.sendCountryCode} = ${props.rate} ${props.reciepientCountryCode}`,
      },
    ],
    onClickLink: () => setEditTransfer(!editTransfer),
  };
  const [recipientDetails, setRecipientDetails] = useState({
    name: props.name,
    email: props.email,
    accountNo: props.accountNo,
    accountType: props.accountType,
  });
  const onClickContinue = () => {
    setTransaction((prev) => ({
      ...prev,
      sendAmount: Number(transferAmount.split(" ")[0]),
      recipientDetails: {
        ...prev.recipientDetails,
        accountNo: recipientDetails.accountNo,
        accountType: recipientDetails.accountType,
        email: recipientDetails.email,
      },
    }));
    props.onClickContinueButton?.();
  };
  const [tempRecipientDetails, setTempRecipientDetails] =
    useState(recipientDetails);
  const handleRecipientDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRecipientDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const [editRecipient, setEditRecipient] = useState(false);
  const isValidEmail = () => {
    return emailRegex.test(recipientDetails.email);
  };
  const isAccountNoValid = accountNoRegex.test(recipientDetails.accountNo);
  const selectAccountType = (value: string) => {
    setRecipientDetails((prev) => ({
      ...prev,
      accountType: value,
    }));
  };
  const editRecipentDetails: EditTransferDetailsProp = {
    detailHead: "Buisness details",
    items: [
      {
        name: "name",
        label: "Name",
        value: recipientDetails.name,
        onChange: handleRecipientDetails,
      },
      {
        name: "email",
        label: "Email",
        value: recipientDetails.email,
        onChange: handleRecipientDetails,
        helperText: isValidEmail() ? "" : invalidEmail,
        error: !isValidEmail(),
      },
      {
        name: "accountNo",
        label: "Account Number",
        value: recipientDetails.accountNo,
        onChange: handleRecipientDetails,
        helperText: isAccountNoValid ? "" : accountNoHelperText,
        error: !isAccountNoValid,
      },
      {
        name: "accountType",
        label: "Account Type",
        isAccountType: true,
        value: recipientDetails.accountType,
        onSelectValue: selectAccountType,
      },
    ],
    onClickCancel: () => {
      setEditRecipient(!editRecipient);
      setRecipientDetails(tempRecipientDetails);
    },
    onClickSave: () => {
      setEditRecipient(!editRecipient);
      setTempRecipientDetails(recipientDetails);
    },
    disableSave: !(isValidEmail() && isAccountNoValid),
  };
  const reciepientDetailProps: DetailBlockProp = {
    detailHead: "Recipeint details",
    detailLink: "Change",
    onClickLink: () => setEditRecipient(!editRecipient),
    items: [
      {
        name: "Name",
        value: recipientDetails.name,
      },
      {
        name: "Email",
        value: recipientDetails.email,
      },
      {
        name: "Account number",
        value: recipientDetails.accountNo,
      },
      {
        name: "Account type",
        value: recipientDetails.accountType,
      },
    ],
  };
  const scheduleDetailProps: DetailBlockProp = {
    detailHead: "Schedule details",
    detailLink: "Edit",
    items: [
      {
        name: "Sending",
        value: "Now",
      },
      {
        name: "Should arrive",
        value: `by ${formatDate(addHoursToDate(new Date(), 12))}`,
      },
      {
        name: "Repeats",
        value: "Never",
      },
    ],
  };
  const editDetailsValue = editTransfer
    ? editTransferDetails
    : editRecipentDetails;
  const enableEdit = editTransfer || editRecipient;
  return (
    <StyledBox data-testid="reviewTransferDetails" width="516px">
      <TypographyComponent
        variant="h1"
        text={reviewTransferDetails}
        sx={{ paddingBottom: "32px" }}
      />
      {!editTransfer && !editRecipient && (
        <Grid container direction="column" rowGap={8}>
          <Grid container item direction="column" rowGap={10}>
            <DetailBlock {...transferDetailsProps} />
            <DetailBlock {...reciepientDetailProps} />
            <DetailBlock {...scheduleDetailProps} />
          </Grid>
          <Grid
            container
            item
            direction="column"
            alignItems="center"
            rowGap={8}
            paddingBottom={"20px"}
          >
            <TypographyComponent
              variant="caption1"
              sx={{
                textAlign: "center",
                color: Theme.palette.text.medium,
                width: "244px",
              }}
              text="When you press “Confirm” you agree with Wise Terms & Conditions"
            />
            <StyledButton
              variant="contained"
              onClick={onClickContinue}
              text={
                <TypographyComponent
                  variant="body2"
                  text="Confirm and continue"
                />
              }
            />
          </Grid>
        </Grid>
      )}
      {enableEdit && <EditTransferDetails {...editDetailsValue} />}
    </StyledBox>
  );
};
