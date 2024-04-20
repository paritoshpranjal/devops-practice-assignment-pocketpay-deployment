import React, { useState } from "react";
import { Fallback, HORIZONTAL_STEPPER_VALUES } from "../../constants";
import { MainTemplate } from "../../components/templates/MainTemplate";
import ConfirmBusinessDirectors from "../../components/organisms/ConfirmBusinessDirectors";
import { VerificationCard } from "../../components/organisms/VerificationCard";
import { ErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";

export const VerificationDetailsPage = () => {

  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(0);
  const onClickBack = () => {
    if (currentStep !== 0) {
      setCurrentStep(currentStep - 1);
    }
    else{
      navigate("/recipient-details")
    }
  };
  const onClickContinue = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleVerificationCardContinueButton = () => {
    navigate("/transfer-details");
  }
  const verificationComponents: React.ReactNode[] = [
    <VerificationCard key={1} handleContinueButton={onClickContinue} />,
    <ConfirmBusinessDirectors
      isDirectors
      key={2}
      handleContinue={onClickContinue}
    />,
    <ConfirmBusinessDirectors key={3} handleContinue={handleVerificationCardContinueButton} />,
  ];
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <MainTemplate
        showStepper
        presentValue={4}
        showBack
        showClose
        stepperValues={HORIZONTAL_STEPPER_VALUES}
        stepperWidth={"788px"}
        onClickBack={onClickBack}
      >
          {verificationComponents[currentStep]}
      </MainTemplate>
    </ErrorBoundary>
  );
};
