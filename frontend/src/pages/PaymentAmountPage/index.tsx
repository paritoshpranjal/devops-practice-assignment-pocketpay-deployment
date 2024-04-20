import React from "react";
import { amountCardProps, HORIZONTAL_STEPPER_VALUES } from "../../constants";
import { MainTemplate } from "../../components/templates/MainTemplate";
import { AmountCard } from "../../components/organisms/AmountCard";
import { useNavigate } from "react-router-dom";

export const PaymentAmountPage = () => {

  const navigate = useNavigate();

  const handleClickContinueButton = () => {
    navigate("/recipient-details");
  }

  const handleBackButton = () =>{
    navigate("/send-money");
  }
  return (
    <MainTemplate
      showStepper
      presentValue={1}
      showBack
      showClose
      stepperValues={HORIZONTAL_STEPPER_VALUES}
      stepperWidth={"788px"}
      onClickBack={handleBackButton}
    >
        <AmountCard {...amountCardProps} onClickContinue={handleClickContinueButton}/>
    </MainTemplate>
  );
};
