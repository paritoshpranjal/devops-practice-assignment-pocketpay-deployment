import { Stack } from "@mui/material";
import React, { useState } from "react";
import {
  bankOptions,
  CancleButtonText,
  chooseBankPlaceHolder,
  ChooseYourBank,
} from "../../../constants";
import MuiButton from "../../atoms/Button";
import TypographyComponent from "../../atoms/Typography";
import { InputField } from "../../atoms/InputField";
import Theme from "../../../theme";
import { BankItem } from "../../molecules/BankItem";
import { MuiModal } from "../../molecules/Modal";
import { CancelTransferPopup } from "../../molecules/CancelTransferPopup";

interface ChooseBankProps {
  onClickCancelButton?: () => void;
  onClickBankAccount?: () => void;
}
const ChooseBank = (props: ChooseBankProps) => {

  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleCancelTransfer = () => {
    setOpenModal(true);
  }

  const handleNoButton = () => {
    setOpenModal(!openModal);
  }
  return (
    <Stack data-testid="select-bank" height={"68vh"} width={"516px"}>
      <TypographyComponent
        text={ChooseYourBank}
        color={Theme.palette.text.high}
        variant="h1"
      />
      <Stack direction={"column"} paddingTop={"3vh"}>
        <InputField placeholder={chooseBankPlaceHolder} />
      </Stack>
      <Stack
        direction={"column"}
        spacing={Theme.spacing(1)}
        paddingTop={"2vh"}
        sx={{
          "& > *:hover": {
            backgroundColor: Theme.palette.text.low,
          },
        }}
      >
        {bankOptions.map((bank) => (
          <Stack
            key={bank.src}
            style={{ cursor: bank.name === "Lloyds" ? "pointer" : "default" }}
          >
            <BankItem
              key={bank.src}
              icon={bank.src}
              alt={"bankIcon"}
              name={bank.name}
              onClick={bank.name === "Lloyds" ? props.onClickBankAccount : undefined}
            />
          </Stack>
        ))}
      </Stack>
      <Stack alignItems={"center"} sx={{ paddingTop: "3vh" }}>
        <MuiButton
          style={{
            borderRadius: "56px",
            width: "218px",
            height: "56px",
            textTransform: "none",
            boxShadow: "0px 2px 8px 0px #1414141F",
            padding: "16px 30px",
          }}
          backgroundColor={Theme.palette.structuralColors.white}
          variant={"contained"}
          text={
            <TypographyComponent
              variant={"body2"}
              text={CancleButtonText}
              color={Theme.palette.primary[500]}
            />
          }
          onClick={handleCancelTransfer}
        />
      </Stack>
      <MuiModal
        element={
          <CancelTransferPopup cancelTranfer={true} handleNoButton={handleNoButton} handleOkButton={props.onClickCancelButton} />
        }
        open={openModal}
        onClose={handleNoButton}
      />
    </Stack>
  );
};

export default ChooseBank;
