import { Box, Stack, styled } from "@mui/material";
import React from "react";
import MuiIcon from "../../atoms/Icon";
import TypographyComponent from "../../atoms/Typography";
import Theme from "../../../theme";

interface AccountCardProps {
  icon?: string;
  altText?: string;
  headingText?: string;
  subText?: string;
  handleCardClick?: () => void;
  clickable?: boolean;
}

const StyledBox = styled(Box)({
  width: "100%",
  height: "auto",
  padding: "1rem 1.25rem",
  border: `1px solid ${Theme.palette.otherColors.stroke2}`,
  borderRadius: "0.5rem",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: "0.75rem",
  backgroundColor: Theme.palette.structuralColors.white,
  "&:hover": {
    backgroundColor: Theme.palette.structuralColors.cardHover,
  },
});

const InnerStack = styled(Stack)({
  margin :"0.375rem 0rem 0.188rem 0rem",
  gap : "0.5rem"
})

const StyledMuiIcon = styled(MuiIcon)`
  width: 2.125rem;
  height: 2.125rem;
`;

export const AccountCard = ({
  icon,
  altText,
  headingText,
  subText,
  handleCardClick,
  clickable,
}: AccountCardProps) => {
  return (
    <StyledBox
      data-testid="account-card"
      onClick={handleCardClick}
      style={{ cursor: clickable ? "pointer" : "default" }}
    >
      <StyledMuiIcon
        src={icon}
        alt={altText}
        
      />

      <InnerStack>
        <TypographyComponent
          text={headingText}
          variant="body2"
          color={Theme.palette.text.high}
        />
        <TypographyComponent
          text={subText}
          variant="caption1"
          color={Theme.palette.text.lowemphasis}
        />
      </InnerStack>
    </StyledBox>
  );
};
