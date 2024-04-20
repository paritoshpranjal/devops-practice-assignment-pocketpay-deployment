import { Button, ButtonProps, styled } from "@mui/material";
import React from "react";

interface IconButtonProps extends ButtonProps {
  icon?: string;
  text?: string | React.ReactNode;
  variant: "text" | "outlined" | "contained";
  onClick?: () => void;
  backgroundColor?: string | React.CSSProperties;
  disabled?: boolean;
}

const StyledIconButton = styled(Button)({
  textTransform: "none",
  cursor: "pointer",
});

const MuiButton = ({
  icon,
  text,
  variant,
  onClick,
  backgroundColor,
  disabled,
  ...props
}: IconButtonProps) => {
  return (
    <StyledIconButton
      data-testid="icon-button"
      variant={variant}
      startIcon={icon && <img src={icon} alt="Icon" />}
      onClick={onClick}
      disableRipple={true}
      disableElevation={true}
      disabled={disabled}
      {...props}
      sx={{
        ...props.sx,
        backgroundColor: backgroundColor,
        "&:hover": {
          backgroundColor: backgroundColor,
        },
      }}
    >
      {text}
    </StyledIconButton>
  );
};

export default MuiButton;
