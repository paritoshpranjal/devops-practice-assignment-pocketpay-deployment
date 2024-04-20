import { Box, Grid, styled } from "@mui/material";
import React from "react";
import Theme from "../../../theme";
import TypographyComponent from "../../atoms/Typography";
import { InputField } from "../../atoms/InputField";
import MuiButton from "../../atoms/Button";
interface TradeAddressCardProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onClick?: () => void;
}
export const StyledButton = styled(MuiButton)({
  textTransform: "none",
  cursor: "pointer",
  padding: "16px 30px",
  borderRadius: "56px",
  [`&.MuiButton-contained`]: {
    boxShadow: "0px 8px 24px 0px rgba(85, 51, 255, 0.24)",
    [`&:hover`]: {
      background: Theme.palette.primary[300],
    },
  },
  [`&.MuiButton-contained.Mui-disabled`]: {
    background: Theme.palette.primary[100],
    boxShadow: "none",
  },
  [`&.MuiButton-outlined`]: {
    boxShadow: `0px 0px 1px 0px rgba(20, 20, 20, 0.12), 0px 0px 8px 0px rgba(20, 20, 20, 0.04), 0px 8px 8px 0px rgba(20, 20, 20, 0.04)`,
    border: "none",
    [`&:hover`]: {
      background: "#F4EFFF",
      color: Theme.palette.primary[300],
    },
  },

  [`&.MuiButton-text`]: {
    padding: 0,
    minWidth: 0,
    ["&:hover"]: {
      background: "white",
    },
  },
  [`&.MuiButton-sizeLarge`]: {
    padding: "16px 47px",
  },
  [`& .addPadding`]: {
    padding: "0px 19.5px",
  },
});
export const TradeAddressCard = (props: TradeAddressCardProps) => {
  return (
    <Box
      padding="24px"
      gap={Theme.spacing(5)}
      display="flex"
      flexDirection="column"
      width="564px"
      sx={{ background: "white" }}
      borderRadius={Theme.spacing(4)}
      data-testid="tradeAddressCard"
    >
      <TypographyComponent variant="body1" text="Add trading address" />
      <Grid container direction="column" rowGap={10}>
        <InputField
          label={props.label}
          multiline
          value={props.value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.onChange(e.target.value)
          }
        />
        <Grid item container justifyContent="center">
          <StyledButton
            variant="contained"
            text="Add"
            sx={{ maxWidth: "135px" }}
            fullWidth
            onClick={props.onClick}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
