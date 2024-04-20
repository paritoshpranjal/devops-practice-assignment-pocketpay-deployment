import React, { useState } from "react";
import TypographyComponent from "../../atoms/Typography";
import {
  Box,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import DownArrowImg from "../../../../public/assets/icons/chevron-down.svg";
import styled from "@emotion/styled";
import theme from "../../../theme";
import { InputField } from "../../atoms/InputField";
import MuiIcon from "../../atoms/Icon";
import {
  AN_EXISTING_ACCOUNT,
  CANCEL_TRANSFER,
  DOWN_ARROW_ALT,
  NEW_ACCOUNT,
  SELECT_ACCOUNT,
  SELECT_AN_OPTION,
  WHERE_WOULD_YOU_LIKE_TO_REFUND,
} from "../../../constants";
import { StyledButton } from "../../molecules/TradeAddress";
interface CancelTransferModalProps {
  transferId: string;
  username: string;
  accounts: string[];
  handlecancelTransfer?: () => void;
}
const StyledTextField = styled(InputField)`
  width: 516px;
  height: 60px;
  @media (max-width: 600px) {
    width: 100%;
  }
  margin: 10px 0 0;
  &:focus {
    border-color: transparent;
    box-shadow: none;
  }
`;

const StyledBox = styled(Box)`
  width: 516px;
  height: 191px;
  @media (max-width: 700px) {
    width: 100%;
  }
  border-radius: 8px;
  margin: 10px 0 0;
  border: 1px solid ${theme.palette.grey[100]};
`;
const StyledSelectedOptionStack = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "0 30px 0 10px",
});

const StyledSelectableStack = styled(Stack)({
  height: "56px",
  display: "grid",
  alignItems: "center",
  "&:hover": {
    backgroundColor: theme.palette.structuralColors.cardHover,
    cursor: "pointer",
  },
  margin: "10px 0",
  padding: "0 20px",
});

const Styledtext = styled(TypographyComponent)({
  marginBottom: "40px",
});
const StyledForm = styled(FormControl)({
  marginTop: "40px",
  width: "516px",
});
const StyledGrid = styled(Grid)({
  width: "564px",
  display: "flex",
  flexDirection: "column",
  background: "white",
  borderRadius: "16px",
  padding: "24px",
});
const CancelTransferModal = (props: CancelTransferModalProps) => {
  const [state, setState] = useState({
    modal: false,
    selectAccount: false,
    hasButton: false,
    selectedOption: "",
  });

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setState((prevState) => ({
      ...prevState,
      selectedOption: event.target.value,
      hasButton: true,
    }));
  };

  const handleSelectAccount = () => {
    setState((prevState) => ({
      ...prevState,
      modal: false,
      selectAccount: true,
    }));
  };

  const renderSelectedOptionStack = (accountNumber: string) => {
    return (
      <StyledSelectedOptionStack>
        <TypographyComponent
          variant="body2"
          color={theme.palette.text.high}
          text={props.username}
        />
        <TypographyComponent
          variant="body2"
          color={theme.palette.text.high}
          text={`xxxx xxxx ${accountNumber}`}
        />
      </StyledSelectedOptionStack>
    );
  };

  return (
    <div>
      <StyledGrid>
        <Styledtext
          variant="body1"
          color={theme.palette.text.high}
          text={`${CANCEL_TRANSFER}${props.transferId}`}
        />
        <TypographyComponent
          variant="caption1"
          color={theme.palette.text.medium}
          text={WHERE_WOULD_YOU_LIKE_TO_REFUND}
        />
        {state.selectAccount ? (
          <>
            <StyledTextField
              label={AN_EXISTING_ACCOUNT}
              disabled
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton style={{ color: theme.palette.text.primary }}>
                      <MuiIcon src={DownArrowImg} alt={DOWN_ARROW_ALT} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{ style: { color: theme.palette.text.primary } }}
            />
            <StyledForm variant="outlined">
              <InputLabel id="demo-simple-select-label">
                {SELECT_AN_OPTION}
              </InputLabel>
              <Select
                value={state.selectedOption}
                label={SELECT_AN_OPTION}
                onChange={handleSelectChange}
                renderValue={() =>
                  renderSelectedOptionStack(state.selectedOption)
                }
                labelId="demo-simple-select-label"
              >
                {props.accounts.map((option) => {
                  return (
                    <MenuItem value={option} key={option}>
                      <Grid container direction="column">
                        <TypographyComponent
                          variant="body2"
                          text={props.username}
                        />
                        <TypographyComponent
                          variant="caption1"
                          text={`Ending in ${option}`}
                          color={theme.palette.text.lowemphasis}
                        />
                      </Grid>
                    </MenuItem>
                  );
                })}
              </Select>
            </StyledForm>
            {state.hasButton && (
              <Grid container justifyContent="center" paddingTop="40px">
                <StyledButton
                  variant="contained"
                  text="Cancel transfer"
                  size="large"
                  onClick={props.handlecancelTransfer}
                />
              </Grid>
            )}
          </>
        ) : (
          <StyledBox>
            <StyledSelectableStack>
              <TypographyComponent
                variant="body2"
                color={theme.palette.text.medium}
                text={SELECT_ACCOUNT}
              />
            </StyledSelectableStack>
            <StyledSelectableStack onClick={handleSelectAccount}>
              <TypographyComponent
                variant="body2"
                color={theme.palette.text.high}
                text={AN_EXISTING_ACCOUNT}
              />
            </StyledSelectableStack>
            <StyledSelectableStack>
              <TypographyComponent
                variant="body2"
                color={theme.palette.text.high}
                text={NEW_ACCOUNT}
              />
            </StyledSelectableStack>
          </StyledBox>
        )}
      </StyledGrid>
    </div>
  );
};

export default CancelTransferModal;
