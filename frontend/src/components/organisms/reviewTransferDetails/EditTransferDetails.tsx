import { Box, Grid } from "@mui/material";
import React from "react";
import TypographyComponent from "../../atoms/Typography";
import Theme from "../../../theme";
import { InputField } from "../../atoms/InputField";
import { StyledButton } from "../../molecules/TradeAddress";
import { Dropdown } from "../../molecules/Dropdown";
import { FillRecipientConst } from "../../../constants";
export interface EditTransferDetailsProp {
  detailHead: string;
  items: {
    name: string;
    label: string;
    value: string;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSelectValue?: (value: string) => void;
    helperText?: string;
    error?: boolean;
    isAccountType?: boolean;
    endAdornment?: React.ReactNode;
  }[];
  onClickSave?: () => void;
  onClickCancel?: () => void;
  disableSave?: boolean;
}
export const EditTransferDetails = (props: EditTransferDetailsProp) => (
  <Box
    display="flex"
    flexDirection="column"
    maxWidth="700px"
    rowGap={11}
    justifyContent="space-between"
    data-testid="editDetails"
  >
    <Grid container item direction="column" rowGap={8} maxWidth="516px">
      <TypographyComponent
        variant="caption1"
        text={props.detailHead}
        color={Theme.palette.text.lowemphasis}
      />
      {props.items.map((item) => (
        <>
          {item.isAccountType ? (
            <Dropdown
              value={item.value}
              onSelectValue={item.onSelectValue}
              placeholder={item.label}
              label={item.label}
              items={FillRecipientConst.DROPDOWN_ITEMS}
            />
          ) : (
            <InputField {...item} key={item.name} />
          )}
        </>
      ))}
    </Grid>
    <Grid
      item
      container
      justifyContent="flex-end"
      columnGap={5}
      style={{ paddingRight: "20px", paddingBottom: "20px" }}
    >
      <StyledButton
        className="addPadding"
        variant="outlined"
        text={
          <TypographyComponent
            variant="body2"
            text="Cancel"
            onClick={props.onClickCancel}
          />
        }
      />
      <StyledButton
        className="addPadding"
        variant="contained"
        disabled={props.disableSave}
        text={
          <TypographyComponent
            variant="body2"
            text="Save"
            onClick={props.onClickSave}
          />
        }
      />
    </Grid>
  </Box>
);
