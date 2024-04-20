import { Box, Grid, Link } from "@mui/material";
import React, { useContext, useState } from "react";
import TypographyComponent from "../../atoms/Typography";
import Theme from "../../../theme";
import { StyledButton } from "../../molecules/TradeAddress";
import { InputField } from "../../atoms/InputField";
import {
  confirmBuisnessHeaderSubText,
  confirmBuisnessHeaderText,
} from "../../../constants";
import { UserBusinessDetailsContext } from "../../../context/UserBusinessDetailsContext";
interface ConfirmBuisnessDetailsProps {
  name: string;
  regno: string;
  address: string;
  onClickConfirm?: () => void;
}
interface TransferDetailProp {
  label: string;
  value: string;
}
const TransferDetail = ({ label, value }: TransferDetailProp) => (
  <Grid container item direction="column" rowGap={3}>
    <TypographyComponent
      variant="body2"
      text={label}
      color={Theme.palette.text.medium}
    />
    <TypographyComponent variant="body2" text={value} />
  </Grid>
);
export const ConfirmBuisnessDetails = (props: ConfirmBuisnessDetailsProps) => {

  const {setUserBusinessDetails} = useContext(UserBusinessDetailsContext);

  const [edit, setEdit] = useState(false);
  const [address, setAddress] = useState<string>(props.address);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setAddress(value);

    setUserBusinessDetails((prev)=>({
      ...prev,
      businessAddress:value
    }))
  };
  const details = [
    {
      name: "name",
      label: "Buisness name",
      value: props.name,
    },
    {
      name: "regno",
      label: "Registration number",
      value: props.regno,
    },
    {
      name: "address",
      label: "Registered address",
      value: address,
    },
  ];

  return (
    <Box
      width="32.25rem"
      height="36.313rem"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      data-testid="confirmBuisnessDetails"
    >
      <Grid container direction="column" rowGap={8}>
        <Grid container item direction="column" rowGap={3}>
          <TypographyComponent variant="h1" text={confirmBuisnessHeaderText} />
          <TypographyComponent
            variant="body3"
            text={confirmBuisnessHeaderSubText}
            sx={{
              maxWidth: "380px",
              color: Theme.palette.text.medium,
            }}
          />
        </Grid>
        <Grid container item justifyContent="space-between">
          <TypographyComponent
            variant="caption1"
            text="Business details"
            color={Theme.palette.text.lowemphasis}
          />
          {!edit && (
            <Link sx={{ cursor: "pointer" }}>
              <TypographyComponent
                variant="linkText"
                text="Edit"
                onClick={() => setEdit(true)}
              />
            </Link>
          )}
        </Grid>
        <Grid container item direction="column" rowGap={8}>
          {details.map((detail) => (
            <div key={detail.name}>
              {!edit ? (
                <TransferDetail label={detail.label} value={detail.value} />
              ) : (
                <InputField
                  label={detail.label}
                  value={detail.value}
                  name={detail.name}
                  onChange={detail.name === "address" ? handleInput : undefined}
                  multiline
                  fullWidth
                />
              )}
            </div>
          ))}
        </Grid>
      </Grid>
      <Grid container justifyContent="flex-end" marginLeft={"9.375rem"}>
        {edit ? (
          <Grid container item justifyContent="flex-end" columnGap={5}>
            <StyledButton
              variant="outlined"
              text={<TypographyComponent variant="body2" text="Cancel" />}
            />
            <StyledButton
              variant="contained"
              text={<TypographyComponent variant="body2" text="Save" />}
              onClick={() => setEdit(false)}
            />
          </Grid>
        ) : (
          <StyledButton
            variant="contained"
            text={<TypographyComponent variant="body2" text="Confirm" />}
            onClick={props.onClickConfirm}
          />
        )}
      </Grid>
    </Box>
  );
};
