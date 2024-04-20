import { Stack, styled } from "@mui/material";
import React, { useContext, useState } from "react";
import TypographyComponent from "../../atoms/Typography";
import Theme from "../../../theme";
import { InputField } from "../../atoms/InputField";
import MuiButton from "../../atoms/Button";
import EYE_OPEN from "../../../../public/assets/icons/eyeopen.svg";
import EYE_CLOSE from "../../../../public/assets/icons/eyeclosed.svg";
import MuiIcon from "../../atoms/Icon";
import { isValidPassword } from "../../utils/functions";
import { LoginCardValues } from "../../../constants";
import { SignUpDetailsContext } from "../../../context/CountryContext";

interface CreatePasswordProps {
  handleContinueButton:()=>void
}

const StyledEyeButton = styled(MuiButton)({
  "&:hover": {
    backgroundColor: Theme.palette.structuralColors.white,
  },
});

const StyledLoginButton = styled(MuiButton)({
  width: "8.438rem",
  height: "3.5rem",
  padding: "1rem 1.875rem",
  borderRadius: "3.5rem",
  boxShadow: "0px 0.5rem 1.5rem rgba(85, 51, 255, 0.24)",
  "&:disabled": {
    backgroundColor: Theme.palette.primary[100],
  },
  "&:hover": {
    boxShadow: "0px 0.5rem 1.5rem rgba(85, 51, 255, 0.24)",
  },
});

const StyledOuterStack = styled(Stack)({
  height: "33.75rem",
  width:"516px",
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "space-between",
  gap:'280px'
});

const InputFieldStack = styled(Stack)({
  marginBottom: "auto",
  gap: Theme.spacing(11),
});

const ButtonStack = styled(Stack)({
   marginLeft:'517px'
});

export const CreatePasswordCard = ({handleContinueButton}:CreatePasswordProps) => {
  const { signUpDetails,setSignUpDetails }  = useContext(SignUpDetailsContext);
  const InitialState = {
    password: signUpDetails.password,
    showPassword: false,
    passwordDisabled: true,
    isPasswordFocused: false,
    passwordError: false,
  }
  const [passwordState, setPasswordState] = useState(InitialState);
  

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const passwordValue = event.target.value;
  
    setPasswordState((prevState) => ({
      ...prevState,
      password: passwordValue,
    }));
  
    const state = isValidPassword(passwordValue);
    setPasswordState((prevState) => ({
      ...prevState,
      passwordError: !state,
      passwordDisabled: !state,
    }));
  };
  
  const handlePasswordFocus = () => {
    setPasswordState((prevState) => ({
      ...prevState,
      isPasswordFocused: true,
    }));
  };
  
  const handlePasswordBlur = () => {
    if (passwordState.password === "") {
      setPasswordState((prevState) => ({
        ...prevState,
        isPasswordFocused: false,
      }));
    }
  };
  
  const togglePassword = () => {
    setPasswordState((prevState) => ({
      ...prevState,
      showPassword: !prevState.showPassword,
    }));
  };
  const handleContinueClick = () => {
    setSignUpDetails((prev) => ({ 
      ...prev,
      password:passwordState.password
     }));
    handleContinueButton();
  };

  return (
    <StyledOuterStack>
      <InputFieldStack>
        <TypographyComponent
          variant="h1"
          color={Theme.palette.text.high}
          text="Create your password"
        />

        <InputField
          value={passwordState.password}
          type={passwordState.showPassword ? "text" : "password"}
          placeholder={LoginCardValues.passwordPlaceholder}
          label={passwordState.isPasswordFocused ? LoginCardValues.passwordLabel : ""}
          onFocus={handlePasswordFocus}
          onChange={handlePasswordChange}
          helperText={passwordState.passwordError ? LoginCardValues.passwordHelperText : ""}
          error={passwordState.passwordError}
          onBlur={handlePasswordBlur}
          endAdornment={
            <StyledEyeButton
              data-testid="eye-button"
              onClick={togglePassword}
              variant="text"
              text={
                <MuiIcon src={passwordState.showPassword ? EYE_OPEN : EYE_CLOSE} alt="Eye" />
              }
            />
          }
        />
      </InputFieldStack>
      <ButtonStack>
        <StyledLoginButton
          variant={"contained"}
          backgroundColor={Theme.palette.primary[500]}
          onClick={handleContinueClick}
          disabled={passwordState.passwordDisabled}
          text={
            <TypographyComponent
              variant="body2"
              color={Theme.palette.structuralColors.white}
              text={"Continue"}
            />
          }
        />
      </ButtonStack>
    </StyledOuterStack>
  );
};
