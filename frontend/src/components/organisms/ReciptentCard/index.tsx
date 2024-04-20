import React from "react";
import { Grid, Stack } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../../theme";
import TypographyComponent from "../../atoms/Typography";
import MuiIcon from "../../atoms/Icon";

export interface RecipientTypeProps {
  handleClick?: () => void;
  labels: RecipientProps[];
  cardId: number;
}
export interface RecipientProps {
  id: number;
  src: string;
  alt: string;
  children: string;
}

const StyledStack = styled(Stack)(() => ({
  border: `1px solid ${theme.palette.grey[100]}`,
  margin: "20px 0",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "14px",
  borderRadius: "8px",
  width: "32.188rem",
  padding: "12px",
  ":hover": {
    backgroundColor: theme.palette.structuralColors.cardHover,
  },
}));
const StyledIcon = styled(MuiIcon)(() => ({
  height: "34px",
  marginRight: "20px",
}));
const RecipientCard = ({ handleClick, cardId, labels }: RecipientTypeProps) => {
  return (
    <div>
      <TypographyComponent
        variant="h1"
        text={"Who are you sending money to?"}
      />
      <Grid>
        {labels.map((value) => {
          return (
            <StyledStack
              key={value.id}
              style={{
                cursor: value.id === cardId ? "pointer" : "default",
              }}
              onClick={value.id === cardId ? handleClick : undefined}
            >
              <StyledIcon src={value.src} alt={value.alt} />
              <TypographyComponent
                variant="body2"
                color={theme.palette.text.high}
                text={value.children}
              />
            </StyledStack>
          );
        })}
      </Grid>
    </div>
  );
};

export default RecipientCard;
