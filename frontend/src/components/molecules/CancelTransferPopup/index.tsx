import { Box, Stack, styled } from "@mui/material";
import React from "react";
import MyTypography from "../../atoms/Typography";
import Theme from "../../../theme";
import MuiButton from "../../atoms/Button";
import { cancelPopUpValues } from "../../../constants";

interface CancelTransferPopupProps {
  cancelTranfer: boolean;
  handleOkButton?: () => void;
  handleNoButton?: () => void;
  handleSendMoneyButton?: () => void;
}

const StyledBox = styled(Box)({
  width: "564px",
  height: "335px",
  padding: "40px",
  paddingBottom: "24px",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  backgroundColor: Theme.palette.structuralColors.white,
  borderRadius: "1rem",
});

const StyledOkButton = styled(MuiButton)({
  padding: "1rem 1.875rem 1rem 1.875rem",
  borderRadius: "3.5rem",
  width: "8.438rem",
  boxShadow: "0px 0.5rem 1.5rem rgba(85, 51, 255, 0.24)",
  "&:hover": {
    boxShadow: "0px 0.5rem 1.5rem rgba(85, 51, 255, 0.24)",
    backgroundColor: Theme.palette.primary[300],
  },
});

const StyledNoButton = styled(MuiButton)({
  padding: "1rem 1.875rem 1rem 1.875rem",
  borderRadius: "3.5rem",
  width: "8.438rem",
  boxShadow: "0px 0.125rem 0.5rem rgba(20, 20, 20, 0.12)",
  "&:hover": {
    boxShadow: "0px 0.125rem 0.5rem rgba(20, 20, 20, 0.12)",
  },
});

const StyledButtonStack = styled(Stack)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  gap: "0.75rem",
});

const StyledtypoStack = styled(Stack)({
  display: "flex",
  alignItems: "center",
  gap: "1.625rem",
});

export const CancelTransferPopup = ({
  cancelTranfer,
  handleNoButton,
  handleOkButton,
  handleSendMoneyButton,
}: CancelTransferPopupProps) => {
  return (
    <StyledBox>
      {cancelTranfer ? (
        <>
          <StyledtypoStack>
            <MyTypography
              color={Theme.palette.text.high}
              text={cancelPopUpValues.text1}
              variant="h1"
            />
            <MyTypography
              color={Theme.palette.text.medium}
              text={cancelPopUpValues.text2}
              variant="body1"
            />
          </StyledtypoStack>
          <StyledButtonStack>
            <StyledOkButton
              variant={"contained"}
              backgroundColor={Theme.palette.primary[500]}
              onClick={handleOkButton}
              text={
                <MyTypography
                  color={Theme.palette.structuralColors.white}
                  text={cancelPopUpValues.ButtonYes}
                  variant="body2"
                />
              }
            />
            <StyledNoButton
              variant={"contained"}
              backgroundColor={Theme.palette.structuralColors.white}
              onClick={handleNoButton}
              text={
                <MyTypography
                  color={Theme.palette.primary[500]}
                  text={cancelPopUpValues.ButtonNo}
                  variant="body2"
                />
              }
            />
          </StyledButtonStack>
        </>
      ) : (
        <>
          <Stack width={"23.938rem"}>
            <MyTypography
              color={Theme.palette.text.medium}
              text={cancelPopUpValues.sendTransferText}
              variant="body1"
            />
          </Stack>
          <StyledButtonStack>
            <StyledOkButton
              variant={"contained"}
              backgroundColor={Theme.palette.primary[500]}
              onClick={handleSendMoneyButton}
              text={
                <MyTypography
                  color={Theme.palette.structuralColors.white}
                  text={cancelPopUpValues.ButtonOk}
                  variant="body2"
                />
              }
            />
          </StyledButtonStack>
        </>
      )}
    </StyledBox>
  );
};
