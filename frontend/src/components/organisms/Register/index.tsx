import { Divider, Box, Stack, styled } from "@mui/material";
import React, { useContext, useState } from "react";
import { InputField } from "../../atoms/InputField";
import TypographyComponent from "../../atoms/Typography";
import MuiButton from "../../atoms/Button";
import Theme from "../../../theme";
import MuiIcon from "../../atoms/Icon";
import GoogleLogo from "../../../../public/assets/images/google.svg";
import Facebook from "../../../../public/assets/icons/facebook.svg";
import Apple from "../../../../public/assets/icons/apple.svg";
import { LoginCardValues, emailRegex } from "../../../constants";
import { SignUpDetailsContext } from "../../../context/CountryContext";

export interface SignUpProps {
  onClickSignUp?: () => void;
  onClickGoogleSignUp?: () => void;
  onClickLogIn?: () => void;

}
const StyledBox = styled(Box)({
  height: "73.8vh",
  width: "32.25rem",
});
const StyledButton = styled(MuiButton)({
  borderRadius: Theme.spacing(14),
  height: "3.625rem",
  textTransform: "none",
  width: "32.25rem",
  fontSize: "body2",
  backgroundColor: Theme.palette.primary.main,
  "&:hover": {
    backgroundColor: Theme.palette.primary[500],
  },
  "&:disabled": {
    backgroundColor: Theme.palette.primary[100],
  },
});
const StyledContent = styled(Stack)({
  alignItems: "center",
});
const StyledInput = styled(InputField)({
  width: "32.25rem",
});
const InnerBox = styled(Stack)({
  justifyContent: "space-evenly",
  alignItems: "center",
  display: "flex",
});
const IconStyle = styled(MuiButton)({
  width: "56px",
  height: "56px",
  borderRadius: "4px",
  border: Theme.palette.borderColors.prime,
  background: Theme.palette.structuralColors.white,
  "&:disabled": {
    border: `1px solid ${Theme.palette.otherColors.stroke2}`,
  },
});
const TextBox = styled(Stack)({
  display: "flex",
  justifyContent: "center",
  gap: "2px",
});
const DownBox = styled(Stack)({
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
});
const StyledText = styled(TypographyComponent)({
  textDecoration: "underline",
  textTransform: "none",
  cursor: "pointer",
});
export const validateEmail = (email: string) => {
  return emailRegex.test(email);
};
const Register = (props: SignUpProps) => {
  const { signUpDetails,setSignUpDetails }  = useContext(SignUpDetailsContext);
  const [emailError, setEmailError] = useState(false);
  const [email, setEmail] = useState(signUpDetails.email)
  const [disable, setDisable] = useState(true);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (validateEmail(value)) {
      setEmail(value)
      setEmailError(false);
      setDisable(false);
    } else {
      setEmailError(true);
      setDisable(true);
    }
  };
  const socialIcons = (
    iconName: string,
    disable: boolean,
    onClick?: () => void
  ) => (
    <IconStyle
      variant="outlined"
      text={<MuiIcon src={iconName} alt="Icon" />}
      onClick={onClick}
      disabled={disable}
    />
  );
  const handleContinueClick = () => {
    setSignUpDetails((prev) => ({ 
      ...prev,
      email:email
     })); 
     props.onClickSignUp?.();
  };

  return (
    <StyledBox data-testid="signUp-component">
      <Stack spacing={"4vh"}>
        <TypographyComponent
          variant={"h1"}
          color={Theme.palette.text.high}
          text={"Create your PocketPay account"}
        />
        <StyledInput
          data-testid="email-input"
          type="text"
          label="Enter your email address"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleEmailChange(e);
          }}
          error={emailError}
          helperText={emailError ? LoginCardValues.emailHelperText : ""}
        />
        <StyledButton
          data-testid="Signup"
          variant="contained"
          disabled={disable}
          onClick={handleContinueClick}
          text={<TypographyComponent variant={"body2"} text={"Next"} />}
        />
        <StyledContent>
          <TypographyComponent
            variant={"caption1"}
            color={Theme.palette.text.medium}
            text={"Or, log with"}
          />
        </StyledContent>
        <InnerBox direction="row">
          {socialIcons(GoogleLogo, false, props.onClickGoogleSignUp)}
          {socialIcons(Facebook, true)}
          {socialIcons(Apple, true)}
        </InnerBox>
        <TextBox direction="row">
          <TypographyComponent
            variant={"caption1"}
            color={Theme.palette.text.medium}
            text={"By registering, you accept our"}
          />
          <StyledText
            variant={"caption1"}
            text={"Terms of use "}
            color={Theme.palette.primary[500]}
          />
          <TypographyComponent
            variant={"caption1"}
            color={Theme.palette.text.medium}
            text={"and"}
          />
          <StyledText
            variant={"caption1"}
            color={Theme.palette.primary[500]}
            text={"Privacy Policy"}
          />
        </TextBox>
        <Divider />
        <DownBox direction="row">
          <TypographyComponent
            variant={"caption1"}
            color={Theme.palette.text.medium}
            text={"AlreadyAccount"}
          />
          <StyledText
            variant={"caption1"}
            color={Theme.palette.primary[500]}
            text={"Log in"}
            onClick={props.onClickLogIn}
          />
        </DownBox>
      </Stack>
    </StyledBox>
  );
};
export default Register;
