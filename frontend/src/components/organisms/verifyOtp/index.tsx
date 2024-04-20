import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import TypographyComponent from "../../atoms/Typography";
import Theme from "../../../theme";
import { InputField } from "../../atoms/InputField";
import MuiButton from "../../atoms/Button";
import { styled } from "@mui/system";
import MuiIcon from "../../atoms/Icon";
import {
  OTPReg,
  SUBMIT,
  VerifyOtpLabel,
  VerifyOtpPlaceHolder,
  VerifyOtpText1,
  VerifyOtpText2,
  VerifyOtpText3,
  VerifyOtpText4,
  verifyOTPOptions,
} from "../../../constants";

interface VerifyOTPProps {
  phoneNumber: string;
  handleVerifySubmit?: () => void;
  handleDifferentNum?: () => void;
}
const StyledButton = styled(MuiButton)({
  width: "135px",
  height: "56px",
  padding: "16px 30px",
  borderRadius: "56px",
  "&:disabled": {
    backgroundColor: Theme.palette.primary[100],
  },
});

const VerifyOTP = (props: VerifyOTPProps) => {
  const [otp, setOtp] = useState("");
  const [state, setState] = useState({
    buttonDisable: true,
    tryAnotherWay: true,
    textFocus: false,
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredOtp = event.target.value;
    setOtp(enteredOtp);
    setState((prevState) => ({
      ...prevState,
      textFocus: true,
      buttonDisable: !OTPReg.test(enteredOtp),
    }));
  };

  const handleNotReceived = () => {
    setState((prevState) => ({
      ...prevState,
      tryAnotherWay: false,
    }));
  };

  const handleFocus = () => {
    setState((prevState) => ({
      ...prevState,
      textFocus: true,
    }));
  };

  const handleBlur = () => {
    if (otp === "") {
      setState((prevState) => ({
        ...prevState,
        textFocus: false,
      }));
    }
  };

  const { buttonDisable, tryAnotherWay, textFocus } = state;

  return (
    <Box width={"516px"}>
      {tryAnotherWay ? (
        <Stack
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          gap={"280px"}
        >
          <Stack maxWidth={"516px"} gap={"32px"}>
            <Stack gap={"8px"}>
              <TypographyComponent
                variant={"h1"}
                text={VerifyOtpText1}
                color={Theme.palette.text.high}
              />
              <TypographyComponent
                text={`We sent it to ${props.phoneNumber}`}
                color={Theme.palette.text.medium}
                variant={"body3"}
              />
            </Stack>
            <Stack gap={"20px"}>
              <InputField
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={VerifyOtpPlaceHolder}
                label={textFocus ? VerifyOtpLabel : ""}
                onChange={handleChange}
                value={otp}
              />
              <TypographyComponent
                data-testid="notReceived"
                variant={"linkText"}
                text={VerifyOtpText2}
                color={Theme.palette.primary[500]}
                style={{ textDecoration: "underLine", cursor: "pointer" }}
                onClick={handleNotReceived}
              />
            </Stack>
          </Stack>
          <Stack display={"flex"} marginLeft={'517px'}>
            <StyledButton
              variant="contained"
              text={SUBMIT}
              disabled={buttonDisable}
              onClick={props.handleVerifySubmit}
            />
          </Stack>
        </Stack>
      ) : (
        <Stack gap={"56px"}>
          <Stack gap={"8px"}>
            <TypographyComponent
              variant={"h1"}
              text={VerifyOtpText3}
              color={Theme.palette.text.high}
            />
            <TypographyComponent
              variant={"body3"}
              color={Theme.palette.text.medium}
              text={`We sent it to ${props.phoneNumber}`}
            />
          </Stack>
          <Stack gap={"42px"}>
            {verifyOTPOptions.map((option) => (
              <Stack
                key={option.text}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={3.75}
                paddingLeft={"20px"}
              >
                <TypographyComponent variant="caption1" text={option.text} />
                <MuiIcon src={option.icon} alt={"chevronRightIcon"} />
              </Stack>
            ))}
            <TypographyComponent
              text={VerifyOtpText4}
              style={{ textDecoration: "underLine", cursor: "pointer" }}
              variant={"linkText"}
              onClick={props.handleDifferentNum}
              color={Theme.palette.primary[500]}
            />
          </Stack>
        </Stack>
      )}
    </Box>
  );
};
export default VerifyOTP;
