import { Box, Grid } from "@mui/material";
import React from "react";
import MuiIcon from "../../atoms/Icon";
import TypographyComponent from "../../atoms/Typography";
import chevronRight from "../../../../public/assets/icons/chevronright.svg";
interface BankItemProps {
  icon: string;
  alt: string;
  name: string;
  onClick?: () => void;
}
export const BankItem = (props: BankItemProps) => {
  return (
    <Box
      onClick={props.onClick}
      sx={{ padding: "11px 15px" }}
      data-testid="bankItem"
    >
      <Grid container columnGap={3.75} alignItems="center">
        <MuiIcon src={props.icon} alt={props.alt} />
        <Grid item flexGrow={1}>
          <TypographyComponent variant="caption1" text={props.name} />
        </Grid>
        <MuiIcon src={chevronRight} alt="chevronRightIcon" />
      </Grid>
    </Box>
  );
};
