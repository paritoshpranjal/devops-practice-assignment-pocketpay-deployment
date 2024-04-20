import React, { useContext, useState } from "react";
import { MainTemplate } from "../../components/templates/MainTemplate";
import BusinessSearch from "../../components/organisms/SearchBussiness";
import { ConfirmBuisnessDetails } from "../../components/organisms/confirmBuisnessDetails";
import { ConfirmTradingAddress } from "../../components/organisms/ConfirmTradingAddress";
import { BUSINESS_ACCOUNT_SETUP_VALUES, Fallback } from "../../constants";
import { UserBusinessDetailsContext } from "../../context/UserBusinessDetailsContext";
import { Stack } from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";

export const YourBusinessPage = () => {
  const navigate = useNavigate();

  const { userBusinessDetails } = useContext(UserBusinessDetailsContext);

  const [displayComponent, setDisplayComponent] =
    useState<string>("BusinessSearch");
  const [displayBackIcon, setDisplayBackIcon] = useState<boolean>(false);

  const handleValueClick = () => {
    setDisplayComponent("BusinessDetails");
    setDisplayBackIcon(true);
  };

  const handleConfirmBusinessDetails = () => {
    setDisplayComponent("TradeAddress");
    setDisplayBackIcon(false);
  };

  const handleBackButton = () => {
    setDisplayComponent("BusinessSearch");
    setDisplayBackIcon(false);
  };
  const handleOnClickConfirmButton = async () => {
    navigate("/business-activity");
  };
  

  const renderComponent = () => {
    switch (displayComponent) {
      case "BusinessSearch":
        return (
          <Stack marginLeft={"3.75rem"}>
            <BusinessSearch handleDropdownClick={handleValueClick} />
          </Stack>
        );
      case "BusinessDetails":
        return (
          <Stack marginLeft={"6.25rem"}>
            <ConfirmBuisnessDetails
              name={userBusinessDetails.businessName}
              regno={"2020ZEN5367GJ"}
              address={userBusinessDetails.businessAddress}
              onClickConfirm={handleConfirmBusinessDetails}
            />
          </Stack>
        );
      case "TradeAddress":
        return (
          <Stack marginLeft={"3.75rem"} marginTop={"1.25rem"}>
            <ConfirmTradingAddress
              tradeAddress={userBusinessDetails.businessAddress}
              handleConfirmButton={handleOnClickConfirmButton}
            />
          </Stack>
        );
    }
  };

  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <MainTemplate
        showClose
        showBack={displayBackIcon}
        showStepper
        stepperValues={BUSINESS_ACCOUNT_SETUP_VALUES}
        presentValue={1}
        stepperWidth="49.25rem"
        onClickBack={handleBackButton}
      >
        {renderComponent()}
      </MainTemplate>
    </ErrorBoundary>
  );
};
