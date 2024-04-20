import React from "react";
import { MainTemplate } from "../../components/templates/MainTemplate";
import VerifyAccount from "../../components/organisms/VerifyAccount";
import { Stack } from "@mui/material";
import { BUSINESS_ACCOUNT_SETUP_VALUES, Fallback } from "../../constants";
import { useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

export const BusinessActivityPage = () => {
  const navigate = useNavigate();

  const handleOnClickContinueButton = async () => {
    navigate("/user-details");
  };

  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <MainTemplate
        showStepper={true}
        stepperValues={BUSINESS_ACCOUNT_SETUP_VALUES}
        presentValue={2}
        stepperWidth="49.25rem"
      >
        <Stack marginLeft="10rem">
          <VerifyAccount onClick={handleOnClickContinueButton} />
        </Stack>
      </MainTemplate>
    </ErrorBoundary>
  );
};
