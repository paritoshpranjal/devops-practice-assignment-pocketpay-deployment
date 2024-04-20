import React, {useState } from "react";
import {
  Fallback,
  HORIZONTAL_STEPPER_VALUES,
  RECIPEINT_TYPE_VALUES_DATA,
} from "../../constants";
import RecipientCard from "../../components/organisms/ReciptentCard";
import FillRecipientDetails from "../../components/organisms/FillRecipientDetails";
import { ErrorBoundary } from "react-error-boundary";
import { Box, styled } from "@mui/material";
import { MainTemplate } from "../../components/templates/MainTemplate";
import { useNavigate } from "react-router-dom";

const OuterBox = styled(Box)({
  marginLeft: "4rem",
  marginRight: "4rem",
});
export const RecipientDetailsPage = () => {

  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(0);
  const onClickBack = () => {
    if (currentStep !== 0) {
      setCurrentStep(currentStep - 1);
    }
    else{
      navigate("/payment")
    }
  };
  const onClickRecipientCard = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleContinueButton = () =>{
    navigate("/verification-details");
  }
  const verificationComponents: React.ReactNode[] = [
    <RecipientCard
      labels={RECIPEINT_TYPE_VALUES_DATA}
      cardId={3}
      key={1}
      handleClick={onClickRecipientCard}
    />,
    <OuterBox key={2}>
      <FillRecipientDetails handleContinue={handleContinueButton}/>
    </OuterBox>,
  ];
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <MainTemplate
        showStepper
        presentValue={3}
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
