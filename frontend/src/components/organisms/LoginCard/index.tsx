import { Box, Divider, Stack, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import TypographyComponent from "../../atoms/Typography";
import Theme from "../../../theme";
import { InputField } from "../../atoms/InputField";
import MuiButton from "../../atoms/Button";
import CheckboxAtom from "../../atoms/Checkbox";
import MuiIcon from "../../atoms/Icon";
import EYE_OPEN from "../../../../public/assets/icons/eyeopen.svg";
import EYE_CLOSE from "../../../../public/assets/icons/eyeclosed.svg";
import { LoginCardValues, socialIcons } from "../../../constants";
import { isValidEmail, isValidPassword, setToken } from "../../utils/functions";
import { addUserLoginDetails } from "../../../services/User";
import { useNavigate } from "react-router-dom";
interface LoginProps {
  handleLogInWithGoogle?: () => void;
}

const StyledBox = styled(Box)({
  width: "100%",
  maxWidth: "32.25rem",
  height: "35.5rem",
});

const StyledLoginButton = styled(MuiButton)({
  padding: "1rem 2.688rem 1rem 2.688rem",
  borderRadius: "3.5rem",
  width: "100%",
  marginTop: "2.5rem",
  boxShadow: "0px 0.5rem 1.5rem rgba(85, 51, 255, 0.24)",
  ["&:hover"]: {
    boxShadow: "0px 0.5rem 1.5rem rgba(85, 51, 255, 0.24)",
  },
  ["&:disabled"]: {
    backgroundColor: Theme.palette.primary[100],
  },
});

const StyledLogoButton = styled(MuiButton)({
  width: "3.5rem",
  height: "3.5rem",
  border: `1px solid ${Theme.palette.otherColors.stroke2}`,
  ["&:hover"]: {
    border: `1px solid ${Theme.palette.otherColors.stroke2}`,
    backgroundColor: Theme.palette.structuralColors.white,
  },
  ["&:disabled"]: {
    border: `1px solid ${Theme.palette.otherColors.stroke2}`,
  },
});

const StyledEyeButton = styled(MuiButton)({
  "&:hover": {
    backgroundColor: Theme.palette.structuralColors.white,
  },
});

const StyledCheckboxText = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "0.75rem",
});

const StyledCheckBoxStack = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "1.25rem",
});

const SocialIconsStack = styled(Stack)({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-evenly",
  marginTop: "1.25rem",
  marginBottom: "2.5rem",
});

export const LoginCard = ({ handleLogInWithGoogle }: LoginProps) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [isEmailFocused, setIsEmailFocused] = useState<boolean>(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoginDisabled, setIsLoginDisabled] = useState<boolean>(true);
  const [signInMessage, setSignInMessage] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setEmailError(!isValidEmail(emailValue));
  };

  const handleEmailFocus = () => {
    setIsEmailFocused(true);
  };

  const handleEmailBlur = () => {
    if (email === "") {
      setIsEmailFocused(false);
    }
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    if (password === "") {
      setIsPasswordFocused(false);
    }
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    setPasswordError(!isValidPassword(passwordValue));
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (email !== "" && password !== "" && !emailError && !passwordError) {
      setIsLoginDisabled(false);
    } else {
      setIsLoginDisabled(true);
    }
  }, [email, password, emailError, passwordError]);
  const handleLoginButton = () => {
    addUserLoginDetails(email, password)
      .then((response) => {
        localStorage.setItem("accessToken", response.data.token);
        setToken(response.data.token);
        setSignInMessage("");
        navigate("/home-page");
      })
      .catch(() => {
        setSignInMessage("User does not exist");
      });
  };

  return (
    <StyledBox>
      <TypographyComponent
        variant="h1"
        text={LoginCardValues.heading}
        color={Theme.palette.text.high}
      />

      <Stack marginTop={"2.625rem"} gap={"1.625rem"}>
        <InputField
          label={isEmailFocused ? LoginCardValues.emailLabel : ""}
          placeholder={LoginCardValues.emailPlaceholder}
          value={email}
          onChange={handleEmailChange}
          onFocus={handleEmailFocus}
          onBlur={handleEmailBlur}
          error={emailError}
          helperText={emailError ? LoginCardValues.emailHelperText : ""}
        />
        <InputField
          value={password}
          type={showPassword ? "text" : "password"}
          placeholder={LoginCardValues.passwordPlaceholder}
          label={isPasswordFocused ? LoginCardValues.passwordLabel : ""}
          onFocus={handlePasswordFocus}
          onChange={handlePasswordChange}
          helperText={passwordError ? LoginCardValues.passwordHelperText : ""}
          error={passwordError}
          onBlur={handlePasswordBlur}
          endAdornment={
            isPasswordFocused ? (
              <StyledEyeButton
                data-testid="eye-button"
                onClick={togglePassword}
                variant="text"
                text={
                  <MuiIcon
                    src={showPassword ? EYE_OPEN : EYE_CLOSE}
                    alt="Eye"
                  />
                }
              />
            ) : null
          }
        />
        {signInMessage.includes("User does not exist") && (
          <Box display="flex" justifyContent={"center"}>
            <TypographyComponent
              text={signInMessage}
              color="red"
              variant={"caption1"}
            />
          </Box>
        )}
      </Stack>

      <StyledLoginButton
        variant={"contained"}
        backgroundColor={Theme.palette.primary[500]}
        onClick={handleLoginButton}
        disabled={isLoginDisabled}
        text={
          <TypographyComponent
            variant="body2"
            color={Theme.palette.structuralColors.white}
            text={LoginCardValues.loginButton}
          />
        }
      />

      <StyledCheckBoxStack>
        <StyledCheckboxText>
          <CheckboxAtom checked={!isLoginDisabled} />
          <TypographyComponent
            variant="body3"
            color={Theme.palette.text.high}
            text={LoginCardValues.RememberText}
          />
        </StyledCheckboxText>
        <TypographyComponent
          variant="body3"
          color={Theme.palette.primary[500]}
          text={LoginCardValues.rememberSupportText}
          style={{
            textDecoration: "underline",
          }}
        />
      </StyledCheckBoxStack>

      <Stack marginTop={"2.5rem"} alignItems={"center"}>
        <TypographyComponent
          variant="caption1"
          color={Theme.palette.text.medium}
          text={LoginCardValues.loginHelperText}
        />
      </Stack>

      <SocialIconsStack>
        {socialIcons.map((icon) => (
          <StyledLogoButton
            key={icon.altText}
            variant="outlined"
            text={<MuiIcon src={icon.iconSrc} alt={icon.altText} />}
            onClick={icon.disabled ? undefined : handleLogInWithGoogle}
            disabled={icon.disabled}
          />
        ))}
      </SocialIconsStack>

      <Divider />
    </StyledBox>
  );
};
