import React, { useContext, useState } from "react";
import { MainTemplate } from "../../components/templates/MainTemplate";
import AccountType from "../../components/organisms/AccountType";
import {
  ACCOUNT_TYPE_OPTIONS,
  ACCOUNT_TYPE_SUBTITLE,
  ACCOUNT_TYPE_TITLE,
  MOBILE_NUMBER_DROPDOWN,
  SETUP_HORIZONTAL_STEPPER_VALUES,
  Fallback,
} from "../../constants";
import { SelectCountry } from "../../components/organisms/SelectCountry";
import VerifyPhoneNumber from "../../components/organisms/VerifyPhoneNumber";
import VerifyOTP from "../../components/organisms/verifyOtp";
import { CreatePasswordCard } from "../../components/organisms/CreatePassword";
import { SignUpDetailsContext } from "../../context/CountryContext";
import { ErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";

const SignUpDetailsPage = () => {
  const navigate = useNavigate();
  const { signUpDetails } = useContext(SignUpDetailsContext);

  const [currentIndex, setCurrentIndex] = useState(0);

  const componentsArray = [
    <AccountType
      key={"accountType"}
      data={ACCOUNT_TYPE_OPTIONS}
      title={ACCOUNT_TYPE_TITLE}
      info={ACCOUNT_TYPE_SUBTITLE}
      selectAccountpOnClick={(index) => {
        if (index === 1) {
          setCurrentIndex(1);
        }
      }}    />,
    <SelectCountry key={"selectCountry"} handleClick={() => setCurrentIndex(2)} />,
    <VerifyPhoneNumber
      key={"verifyPhoneNumber"}
      onClick={() => setCurrentIndex(3)}
      array={MOBILE_NUMBER_DROPDOWN}
    />,
    <VerifyOTP
      key={"verifyOTP"}
      phoneNumber={signUpDetails.countryCode + signUpDetails.phoneNumber}
      handleVerifySubmit={() => setCurrentIndex(4)}
      handleDifferentNum={() => setCurrentIndex(2)}
    />,
    <CreatePasswordCard key={"createPassword"} handleContinueButton={()=>{navigate("/business-details")}} />,
  ];

  const PresentValue = currentIndex === 3 ? 4 : currentIndex + 2;

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    else{
      navigate("/")
    }
  };

  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <MainTemplate
        showStepper={true}
        showBack={true}
        stepperWidth="700px"
        stepperValues={SETUP_HORIZONTAL_STEPPER_VALUES}
        presentValue={PresentValue}
        onClickBack={handleBack}
      >
        {componentsArray[currentIndex]}
      </MainTemplate>
    </ErrorBoundary>
  );
};

export default SignUpDetailsPage;
