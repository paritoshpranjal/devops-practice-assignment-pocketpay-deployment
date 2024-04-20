import { Box, Divider, Stack, styled } from "@mui/material";
import React from "react";
import Theme from "../../../theme";
import MuiIcon from "../../atoms/Icon";
import LIOYDS from "../../../../public/assets/icons/horse.svg";
import VISA from "../../../../public/assets/icons/visa.svg";
import Typography from "../../atoms/Typography";
import MuiButton from "../../atoms/Button";
import { PurchaseConfirmValues } from "../../../constants";

interface PurchaseconfirmCardProps {
  amount: number;
  currencytype: string;
  cardDigits: number;
  handleCompleteClick?: () => void;
}

const StyledBox = styled(Box)({
  width: "100%",
  maxWidth: "29.625rem",
  height: "24.688rem",
  borderRadius: "1rem",
  border: `0.063rem solid ${Theme.palette.otherColors.stroke2}`,
  backgroundColor: Theme.palette.structuralColors.white,
});

const StyledCompleteButton = styled(MuiButton)({
  padding: "1rem 1.875rem 1rem 1.875rem",
  borderRadius: "3.5rem",
  width: "8.438rem",
  boxShadow: "0px 0.5rem 1.5rem rgba(85, 51, 255, 0.24)",
  "&:hover": {
    boxShadow: "0px 0.5rem 1.5rem rgba(85, 51, 255, 0.24)",
  },
});

const StyledIconBox = styled(Box)({
  width: "2.5rem",
  height: "2.5rem",
  borderRadius: "3.125rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: `1px solid ${Theme.palette.otherColors.stroke2}`,
});

const StyledIconsStack = styled(Stack)({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  padding: "1.5rem 1.875rem 0.5rem 1.875rem",
});

const StyledTypoStack = styled(Stack)({
  padding: "1.25rem 5.625rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.625rem",
});

export const PurchaseconfirmCard = ({
  handleCompleteClick,
  amount,
  currencytype,
  cardDigits,
}: PurchaseconfirmCardProps) => {
  return (
    <StyledBox>
      <StyledIconsStack>
        <StyledIconBox>
          <MuiIcon src={LIOYDS} alt="LIoyds bank" />
        </StyledIconBox>
        <MuiIcon
          src={VISA}
          alt="VISA"
          style={{ width: "1.5rem", height: "1.5rem" }}
        />
      </StyledIconsStack>

      <Divider />

      <StyledTypoStack>
        <Stack>
          <Typography
            color={Theme.palette.text.high}
            text={PurchaseConfirmValues.label}
            variant="body1"
          />
        </Stack>
        <Stack gap={"0.5rem"}>
          <Typography
            color={Theme.palette.text.medium}
            text={
              <>
                <span style={{ color: Theme.palette.text.high }}>
                  {`${currencytype} ${amount.toFixed(2)}`}
                </span>
                {PurchaseConfirmValues.label2}
                <span style={{ color: Theme.palette.text.high }}>
                  {cardDigits}
                </span>
              </>
            }
            variant="caption1"
          />
          {PurchaseConfirmValues.purchaseSteps.map((text) => (
            <Typography
              key={text.id}
              color={Theme.palette.text.medium}
              text={text.label}
              variant="caption1"
            />
          ))}
        </Stack>
        <Stack marginTop={"1.625rem"}>
          <StyledCompleteButton
            variant="contained"
            backgroundColor={Theme.palette.primary[500]}
            onClick={handleCompleteClick}
            text={
              <Typography
                color={Theme.palette.structuralColors.white}
                text={PurchaseConfirmValues.completeButton}
                variant="body2"
              />
            }
          />
        </Stack>
      </StyledTypoStack>
    </StyledBox>
  );
};
