import React, { useContext, useEffect, useState } from "react";
import { Box, Link, Stack } from "@mui/material";
import TypographyComponent from "../../atoms/Typography";
import Theme from "../../../theme";
import { CustomRadio } from "../../atoms/RadioButton";
import styled from "@emotion/styled";
import MuiButton from "../../atoms/Button";
import { InputField } from "../../atoms/InputField";
import { MuiModal } from "../../molecules/Modal";
import { TradeAddressCard } from "../../molecules/TradeAddress";
import {
  ConfirmTradingAddressValues,
  newAddressValue,
} from "../../../constants";
import { UserBusinessDetailsContext } from "../../../context/UserBusinessDetailsContext";

interface ConfirmTradingAddressProps {
  handleConfirmButton?: () => void;
  tradeAddress: string;
}

const StyledBox = styled(Box)({
  width: "100%",
  maxWidth: "32.25rem",
  maxHeight: "31.625rem",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  paddingBottom: "45px",
});

const StyledEditStack = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "2rem",
});

const StyledRadioStack = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: "1.75rem",
  padding: "0.75rem 0px 0.75rem 1.5rem",
  marginTop: "0.75rem",
});

const StyledAddTrading = styled(MuiButton)({
  width: "13.625rem",
  height: "3.5rem",
  padding: "1rem 1.625rem",
  borderRadius: "3.5rem",
  boxShadow: "0px 0.125rem 0.5rem 0px #1414141F",
  "&:hover": {
    boxShadow: "0px 0.125rem 0.5rem 0px #1414141F",
    backgroundColor: Theme.palette.primary[100],
  },
  "&:disabled": {
    boxShadow: "0px 0.125rem 0.5rem 0px #1414141F",
    backgroundColor: Theme.palette.structuralColors.white,
  },
});

const StyledConfirmButton = styled(MuiButton)({
  width: "13.625rem",
  height: "3.5rem",
  padding: "1rem 2.688rem 1rem 2.688rem",
  borderRadius: "3.5rem",
  boxShadow: "0px 0.5rem 1.5rem rgba(85, 51, 255, 0.24)",
  "&:hover": {
    boxShadow: "0px 0.5rem 1.5rem rgba(85, 51, 255, 0.24)",
    backgroundColor: Theme.palette.primary[300],
  },
});

const StyledButtonStack = styled(Stack)({
  marginTop: "2.5rem",
  gap: "1.25rem",
  alignItems: "center",
});

const StyledInputStack = styled(Stack)({
  marginTop: "1.5rem",
});

const StyledRadio = styled(CustomRadio)({
  marginTop: "2.25rem",
});

export const ConfirmTradingAddress = ({
  handleConfirmButton,
  tradeAddress,
}: ConfirmTradingAddressProps) => {
  const InitialState = {
    edit: false,
    tradingAddresses: [tradeAddress],
    inputValues: [tradeAddress],
    open: false,
    newAddress: newAddressValue,
    selectedAddressIndex: 0,
  };
  const [state, setState] = useState(InitialState);

  const { setUserBusinessDetails } = useContext(UserBusinessDetailsContext);

  const handleAddTradingAddress = () => {
    setState((prevState) => ({
      ...prevState,
      tradingAddresses: [...prevState.tradingAddresses, prevState.newAddress],
      inputValues: [...prevState.inputValues, prevState.newAddress],
      newAddress: newAddressValue,
      open: false,
    }));
  };

  const handleNewTradingAddressChange = (value: string) => {
    setState((prevState) => ({
      ...prevState,
      newAddress: value,
    }));
  };

  const handleTradingAddressButton = () => {
    setState((prevState) => ({
      ...prevState,
      open: !prevState.open,
    }));
  };

  const handleInputValueChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    setState((prevState) => {
      const updatedInputValues = [...prevState.inputValues];
      updatedInputValues[index] = event.target.value;
      return {
        ...prevState,
        inputValues: updatedInputValues,
      };
    });
  };

  const handleSaveAddress = () => {
    setState((prevState) => ({
      ...prevState,
      tradingAddresses: [...prevState.inputValues],
      edit: false,
    }));
  };

  useEffect(() => {
    setUserBusinessDetails((prev) => ({
      ...prev,
      tradeAddress: state.inputValues,
    }));
  }, [setUserBusinessDetails, state.inputValues]);
  return (
    <StyledBox>
      <Stack gap={"0.75rem"}>
        <TypographyComponent
          variant="h1"
          color={Theme.palette.text.high}
          text={ConfirmTradingAddressValues.heading}
        />
        <TypographyComponent
          variant="body3"
          color={Theme.palette.text.medium}
          text={ConfirmTradingAddressValues.subHeading}
        />
      </Stack>

      <StyledEditStack>
        <TypographyComponent
          variant="body2"
          color={Theme.palette.text.medium}
          text={ConfirmTradingAddressValues.subText}
        />
        {!state.edit && (
          <Link sx={{ cursor: "pointer" }}>
            <TypographyComponent
              variant="linkText"
              text={ConfirmTradingAddressValues.edit}
              onClick={() =>
                setState((prevState) => ({
                  ...prevState,
                  edit: true,
                }))
              }
            />
          </Link>
        )}
      </StyledEditStack>

      {state.tradingAddresses.map((address, index) =>
        state.edit ? (
          <StyledInputStack key={address}>
            <InputField
              label={`Trading address ${index + 1}`}
              value={state.inputValues[index]}
              name={`address${index}`}
              onChange={(event) => handleInputValueChange(event, index)}
              multiline
              fullWidth
            />
          </StyledInputStack>
        ) : (
          <StyledRadioStack key={address}>
            <StyledRadio
              checked={state.selectedAddressIndex === index}
              onChange={() => {
                setState((prevState) => ({
                  ...prevState,
                  selectedAddressIndex: index,
                }));
              }}
            />
            <Stack gap={"1rem"}>
              <TypographyComponent
                text={`Address ${index + 1}`}
                variant="body2"
                color={Theme.palette.text.medium}
              />

              <TypographyComponent
                text={address}
                variant="body2"
                color={Theme.palette.text.high}
              />
            </Stack>
          </StyledRadioStack>
        )
      )}
      <StyledButtonStack>
        <StyledAddTrading
          variant="contained"
          backgroundColor={Theme.palette.structuralColors.white}
          disabled={state.edit}
          onClick={handleTradingAddressButton}
          text={
            <TypographyComponent
              variant="body2"
              color={Theme.palette.primary[500]}
              text={
                state.edit
                  ? ConfirmTradingAddressValues.cancleButton
                  : ConfirmTradingAddressValues.addTradeAddressButton
              }
            />
          }
        />
        <StyledConfirmButton
          variant="contained"
          backgroundColor={Theme.palette.primary[500]}
          onClick={state.edit ? handleSaveAddress : handleConfirmButton}
          text={
            <TypographyComponent
              variant="body2"
              color={Theme.palette.structuralColors.white}
              text={
                state.edit
                  ? ConfirmTradingAddressValues.saveButton
                  : ConfirmTradingAddressValues.confirmButton
              }
            />
          }
        />
      </StyledButtonStack>
      <MuiModal
        element={
          <TradeAddressCard
            label={`Address ${state.tradingAddresses.length + 1}`}
            value={state.newAddress}
            onChange={handleNewTradingAddressChange}
            onClick={handleAddTradingAddress}
          />
        }
        open={state.open}
        onClose={handleTradingAddressButton}
      />
    </StyledBox>
  );
};
