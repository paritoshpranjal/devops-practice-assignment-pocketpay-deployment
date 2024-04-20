import { Box, styled, Stack } from "@mui/material";
import MuiIcon from "../../atoms/Icon";
import TypographyComponent from "../../atoms/Typography";
import { CustomRadio } from "../../atoms/RadioButton";
import theme from "../../../theme";
import React from "react";
export interface RadioIconTextProps {
  icon?: string;
  cardContent?: string;
  color?: string;
  cardVariant?: string;
  detailVariant?: string;
  isSelected?: boolean;
  cardVariantStyle?: React.CSSProperties;
  detailVariantStyle?: React.CSSProperties;
  text?: string;
  singleText?: boolean;
  multiText?: any;
  radioSize?: "small" | "medium";
  value?: string;
  radiochange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  radioId?: string;
}

const StyledContent = styled(Box)({
  gap: "10px",
  flexDirection: "row",
  display: "flex",

  width: "29.938rem",
});
const InnerBox = styled(Box)({
  marginTop: "6px",
  flexDirection: "column",
  display: "flex",
});

const Iconstyle = styled(Box)({
  width: theme.spacing(10),
  height: theme.spacing(10),
  backgroundColor: theme.palette.structuralColors.blue,
  borderRadius: "50%",
  textAlign: "center",
  marginRight: "20px",
});
const StyledBox = styled(Box)({
  flexDirection: "row",
  display: "flex",
  alignItems: "center",
  width: "29.625rem",
  borderRadius: theme.spacing(2),
});
const StyledRadio = styled(Stack)({
  alignItems: "flex-end",
});

const RadioIconText = (props: RadioIconTextProps) => {
  return (
    <div data-testid="payment-card">
      <StyledBox>
        <Iconstyle>
          <MuiIcon data-testid="icon" src={props.icon} alt="icon" />
        </Iconstyle>
        <StyledContent>
          <Stack>
            <TypographyComponent
              data-testid="card-content"
              variant={props.cardVariant}
              style={props.cardVariantStyle}
              text={props.cardContent}
            />
            <InnerBox>
              {!props.singleText && (
                <TypographyComponent
                  variant={props.detailVariant}
                  style={props.detailVariantStyle}
                  color={props.color}
                  text={props.text}
                  data-testid="multi-text"
                ></TypographyComponent>
              )}
              {props.singleText && props.multiText}
            </InnerBox>
          </Stack>
        </StyledContent>
        <StyledRadio>
          <CustomRadio
            data-testid={props.radioId}
            checked={props.isSelected}
            size={props.radioSize}
            onChange={props.radiochange}
            value={props.value}
          />
        </StyledRadio>
      </StyledBox>
    </div>
  );
};

export default RadioIconText;
