import React, { useContext, useEffect, useState } from "react";
import { Stack, IconButton, Popover, Divider } from "@mui/material";
import Icon from "../../atoms/Icon";
import TypographyComponent from "../../atoms/Typography";
import DownArrowImg from "../../../../public/assets/icons/downArrow.svg";
import GBPImg from "../../../../public/assets/icons/gbp.svg";
import styled from "@emotion/styled";
import Button from "../../atoms/Button";
import {
  COUNTRY_ICON_ALT,
  DOWN_ARROW_ALT,
  IT_HELPS_US_KEEP,
  MOBILE_NUMBER_DROPDOWN,
  VERIFY_YOUR_PHONE_NUMBER,
} from "../../../constants";
import theme from "../../../theme";
import { InputField } from "../../atoms/InputField";
import { SignUpDetailsContext } from "../../../context/CountryContext";

interface DropdownTypographyComponentProps {
  array: CountryProps[];
  onClick: () => void;
}

interface CountryProps {
  id: number;
  src: string;
  alt: string;
  start: string;
}

const StyledStack = styled(Stack)`
  margin: 10px 0 50px;
`;

const StyledButton = styled(Button)(() => ({
  height: "56px",
  width: "135px",
  color: theme.palette.structuralColors.white,
  backgroundColor: theme.palette.primary[500],
  "&:disabled": {
    backgroundColor: theme.palette.primary[100],
    color: theme.palette.structuralColors.white,
  },
  "&:hover": {
    backgroundColor: theme.palette.primary[300],
  },
  borderRadius: "56px",
}));
const StyledDown = styled(Stack)({
  marginLeft: "517px",
});
const StyledTextField = styled(InputField)({
  width: "32.118rem",
});
const InnerBox = styled(Stack)({
  gap: "8px",
  display: "flex",
});
const OuterBox = styled(Stack)({
  display: "flex",
  gap: "280px",
  width: "516px",
});
const StyledIconButton = styled(IconButton)({
  "&:hover": {
    backgroundColor: theme.palette.structuralColors.white,
  },
});
const VerifyPhoneNumber = ({
  array,
  onClick,
}: DropdownTypographyComponentProps) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const { signUpDetails,setSignUpDetails }  = useContext(SignUpDetailsContext);
  const [icon, setIcon] = useState<string>(GBPImg);
  const [countryCode, setCountryCode] = useState<string>(signUpDetails.countryCode);
  const [value, setValue] = useState<string>(signUpDetails.phoneNumber);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCountry = (src: string, code: string) => {
    setIcon(src);
    setCountryCode(code);
    setAnchorEl(null);
  };

  const isValueValid = () => {
    return /^\d+$/.test(value) && value.length > 9;
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.trim();
    if (inputValue.startsWith(countryCode)) {
      setValue(inputValue.slice(countryCode.length).trim());
    } else {
      setValue(inputValue);
    }
  };

  useEffect(() => {
    const selectedCountry = signUpDetails.selectedCountry;
    const selectedIcon = MOBILE_NUMBER_DROPDOWN.find(
      (item) => item.alt === selectedCountry
    );
    if (selectedIcon) {
      setIcon(selectedIcon.src);
      setCountryCode(selectedIcon.start);
    }
  }, [signUpDetails.selectedCountry]);

  const handleContinueClick = () => {
    setSignUpDetails((prev) => ({ 
      ...prev,
      countryCode:countryCode,
      phoneNumber:value
     }));
     onClick();
  };

  return (
    <OuterBox>
      <Stack>
        <TypographyComponent
          variant="h1"
          color={theme.palette.text.high}
          text={VERIFY_YOUR_PHONE_NUMBER}
        />
        <StyledStack>
          <TypographyComponent
            variant="body3"
            color={theme.palette.text.medium}
            text={IT_HELPS_US_KEEP}
          />
        </StyledStack>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          data-testid="pop-over"
          disableAutoFocus
        >
          {array.map((item) => {
            return (
              <Stack key={item.id} data-testid="pop-over-stack">
                <StyledIconButton
                  data-testid="pop-over-click"
                  onClick={() => handleCountry(item.src, item.start)}
                  disableRipple={true}
                >
                  <Icon
                    src={item.src}
                    alt={item.alt}
                    style={{ marginRight: "10px" }}
                  />
                  <TypographyComponent
                    color={theme.palette.text.medium}
                    text={item.start}
                  />
                </StyledIconButton>
              </Stack>
            );
          })}
        </Popover>
        <Stack display="flex" flexDirection="row">
          <StyledTextField
            label={"Mobile Number"}
            startAdornment={
              <StyledIconButton
                onClick={handleClick}
                data-testid="country-select-button"
                disableRipple={true}
              >
                <InnerBox direction="row">
                  <Icon src={icon} alt={COUNTRY_ICON_ALT} />
                  <Icon src={DownArrowImg} alt={DOWN_ARROW_ALT} />
                  <Divider orientation="vertical" flexItem></Divider>
                </InnerBox>
              </StyledIconButton>
            }
            onChange={handleValueChange}
            value={`${countryCode} ${value}`}
          ></StyledTextField>
        </Stack>
      </Stack>
      <StyledDown>
        <StyledButton
          disabled={!isValueValid()}
          onClick={handleContinueClick}
          data-testid="submit-button"
          variant={"text"}
          text={
            <TypographyComponent
              variant="body2"
              color={theme.palette.structuralColors.white}
              text={"Continue"}
            />
          }
        />
      </StyledDown>
    </OuterBox>
  );
};

export default VerifyPhoneNumber;
