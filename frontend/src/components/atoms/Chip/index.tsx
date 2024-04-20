import { Chip, styled } from "@mui/material";
import React from "react";
import theme from "../../../theme";

export interface ChipProps {
  label: React.ReactNode | string;
  onClick?: () => void;
  backgroundColor?: string;
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  variant?: "filled" | "outlined";
}

const MuiChip = styled(Chip)({
  borderRadius: `16px`,
  color: theme.palette.primary.main,
  background: theme.palette.structuralColors.buttonHover,
});

const CustomChip: React.FC<ChipProps> = (props: ChipProps) => {
  return <MuiChip {...props} />;
};

export default CustomChip;
