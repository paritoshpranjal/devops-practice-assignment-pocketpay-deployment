import React from "react";

import { Box, styled } from "@mui/material";
import MuiIcon from "../../atoms/Icon";
import TypographyComponent from "../../atoms/Typography";

export type IconTypograpyProps = {
  icon?: string;
  content?: string;
  color?: string;
  variant?: string;
};
const StyledContent = styled(Box)({
  display: "flex",
  alignItems: "center",
  width: "100%",
  gap: "10px",
});
const StyledIcon = styled(Box)({
  width: "1.75rem",
  height: "1.75rem",
});

const IconTypograpy: React.FC<IconTypograpyProps> = ({
  icon,
  content,
  color,
  variant,
}) => {
  return (
    <StyledContent>
      <StyledIcon>
        <MuiIcon src={icon} alt="icon" />
      </StyledIcon>
      <TypographyComponent
        data-testid="icon-typography-content"
        variant={variant}
        color={color}
        text={content}
      />
    </StyledContent>
  );
};

export default IconTypograpy;
