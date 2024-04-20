import { Box, Divider, Grid, MenuItem, SelectChangeEvent } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import TypographyComponent from "../../atoms/Typography";
import { InputField } from "../../atoms/InputField";
import MuiIcon from "../../atoms/Icon";
import downChevron from "../../../../public/assets/icons/chevron-down.svg";
import sendAmount from "../../../../public/assets/icons/sendMoney.svg";
import info from "../../../../public/assets/icons/info.svg";
import Theme from "../../../theme";
import { paperDropdownSxProps } from "../../molecules/Dropdown";
import { amountCardHeader, countriesDropdownList } from "../../../constants";
import { StyledButton } from "../../molecules/TradeAddress";
import { MuiModal } from "../../molecules/Modal";
import { CancelTransferPopup } from "../../molecules/CancelTransferPopup";
import { TransactionContext } from "../../../context/TransactionContext";
interface AmountCardProps {
  onClickContinue?: () => void;
  fee: number;
  rate: number;
  totalAmount: number;
}
interface DropDownCountryProps {
  icon: string;
  code: string;
  onSelectCountry: (value: number) => void;
  value: string;
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
interface PaymentDetailProps {
  detail: string;
  value: string;
  isApply?: boolean;
  onClickActive?: () => void;
}
const PaymentDetail = (props: PaymentDetailProps) => {
  return (
    <Grid container item columnGap={3} alignItems="center">
      <TypographyComponent
        variant="body3"
        text={props.detail}
        color={Theme.palette.text.lowemphasis}
      />
      <Grid item flexGrow={1}>
        <Divider sx={{ background: Theme.palette.grey[100] }} />
      </Grid>
      <TypographyComponent
        variant="body3"
        text={
          <div style={{ display: "flex", columnGap: "4px" }}>
            {props.value}
            {props.isApply ? (
              <StyledButton
                variant="text"
                startIcon={<MuiIcon src={sendAmount} alt="sendAmountIcon" />}
                onClick={props.onClickActive}
              />
            ) : (
              <MuiIcon src={info} alt="info" />
            )}
          </div>
        }
        color={
          props.isApply ? Theme.palette.primary[300] : Theme.palette.text.medium
        }
      />
    </Grid>
  );
};
const DropDownCountry = (props: DropDownCountryProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <InputField
      value={props.value}
      label={open ? null : props.label}
      type="text"
      onChange={props.onChange}
      endAdornment={
        <Box
          display="flex"
          columnGap={3}
          sx={{ visibility: open ? "hidden" : "inherit" }}
        >
          <MuiIcon src={props.icon} alt="country icon" />
          <TypographyComponent variant="body1" text={props.code} />
          <StyledButton
            variant="text"
            text={<MuiIcon src={downChevron} alt="expandIcon" />}
            onClick={handleOpen}
          />
        </Box>
      }
      sx={{
        ["& .MuiOutlinedInput-root fieldset"]: {
          borderBottom: open ? "none !important" : "",
          borderRadius: open ? "8px 8px 0 0" : "8px",
        },
        maxWidth: "516px",
      }}
      select={open}
      SelectProps={{
        IconComponent: () => null,
        onOpen: handleOpen,
        onClose: handleOpen,
        open: open,
        onChange: (event: SelectChangeEvent<unknown>) =>
          props.onSelectCountry(event.target.value as number),
        displayEmpty: true,
        renderValue: () => (
          <TypographyComponent
            variant="body2"
            color={Theme.palette.text.medium}
            text="Select currency"
          />
        ),
        MenuProps: {
          PaperProps: {
            sx: paperDropdownSxProps,
          },
        },
      }}
    >
      {countriesDropdownList.map((item, index) => (
        <MenuItem value={index} key={item.icon}>
          <Grid container columnGap={6} alignItems={"center"}>
            <img src={item.icon} alt="icon" />
            <Grid item flexGrow={1}>
              <TypographyComponent variant="body2" text={item.value} />
            </Grid>
            <TypographyComponent
              variant="body1"
              color={Theme.palette.text.medium}
              text={item.code}
            />
          </Grid>
        </MenuItem>
      ))}
    </InputField>
  );
};
export const AmountCard = ({ onClickContinue, ...props }: AmountCardProps) => {
  const { transaction, setTransaction } = useContext(TransactionContext);
  const [openModal, setOpenModal] = useState(false);
  const [rate, setRate] = useState(1);
  const [sendAmount, setSendAmount] = useState({
    value:
      transaction.sendAmount === 0 ? "" : transaction.sendAmount.toString(),
    countryIndex: transaction.sendCountryIndex,
  });
  const [reciepientAmount, setReciepientAmount] = useState({
    value: "",
    countryIndex: transaction.recieveCountryIndex,
  });
  const handleOpen = () => {
    setOpenModal(!openModal);
  };
  const handleContinue = () => {
    setTransaction((prev) => ({
      ...prev,
      rate: Number(rate.toFixed(2)),
      recieveCountryCode:
        countriesDropdownList[reciepientAmount.countryIndex].code,
      sendCountryCode: countriesDropdownList[sendAmount.countryIndex].code,
      sendAmount: Number(sendAmount.value),
      sendCountryIndex: sendAmount.countryIndex,
      recieveCountryIndex: reciepientAmount.countryIndex,
    }));
    onClickContinue?.();
  };
  useEffect(() => {
    if (sendAmount.value !== "") {
      const rateFrom =
        countriesDropdownList[sendAmount.countryIndex].extraAmount;
      const rateTo =
        countriesDropdownList[reciepientAmount.countryIndex].extraAmount;
      const rate = rateTo / rateFrom;
      setRate(rate);
      const resAmount = Number(sendAmount.value) * rate;
      setReciepientAmount((prev) => ({
        ...prev,
        value: resAmount.toFixed(0).toString(),
      }));
    }
  }, [
    sendAmount.value,
    reciepientAmount.countryIndex,
    sendAmount.countryIndex,
  ]);
  return (
    <Box
      display="flex"
      flexDirection="row"
      data-testid="amountCard"
      height="564px"
    >
      <Grid container direction="column" rowGap={11} maxWidth="516px">
        <TypographyComponent variant="h1" text={amountCardHeader} />
        <Grid container item direction="column" paddingTop="12px" rowGap={7}>
          <DropDownCountry
            value={sendAmount.value}
            label="You send"
            code={countriesDropdownList[sendAmount.countryIndex].code}
            icon={countriesDropdownList[sendAmount.countryIndex].icon}
            onSelectCountry={(value: number) => {
              setSendAmount((prev) => ({
                ...prev,
                countryIndex: value,
              }));
            }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (!isNaN(+e.target.value)) {
                const amount = e.target.value;
                setSendAmount((prev) => ({
                  ...prev,
                  value: amount,
                }));
              }
            }}
          />
          <DropDownCountry
            value={reciepientAmount.value}
            label="Receipients gets"
            code={countriesDropdownList[reciepientAmount.countryIndex].code}
            icon={countriesDropdownList[reciepientAmount.countryIndex].icon}
            onSelectCountry={(value: number) => {
              setReciepientAmount((prev) => ({
                ...prev,
                countryIndex: value,
              }));
            }}
          />
          <Grid container item direction="column" rowGap={5}>
            <PaymentDetail
              detail={"Low cost transfer fee:"}
              value={`${props.fee}GBP`}
            />
            <PaymentDetail
              detail="Guaranteed rate (24 hrs):"
              value={`${props.rate}`}
              isApply
              onClickActive={handleOpen}
            />
            <PaymentDetail
              detail="Total amount:"
              value={`${props.totalAmount} GRP`}
            />
          </Grid>
        </Grid>
      </Grid>
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <StyledButton
          variant="contained"
          text={<TypographyComponent variant="body2" text="Continue" />}
          onClick={handleContinue}
        />
      </div>
      <MuiModal
        open={openModal}
        element={
          <CancelTransferPopup
            cancelTranfer={false}
            handleSendMoneyButton={handleOpen}
          />
        }
      />
    </Box>
  );
};
