import React from "react";
import { MainTemplate } from "../../components/templates/MainTemplate";
import AccountType from "../../components/organisms/AccountType";
import { Fallback, SENDING_MONEY, SENDING_MONEY_TITLE } from "../../constants";
import { Stack } from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";

const InitiateTransactionPage = () => {
  const navigate = useNavigate();

  const handleSelectedAccountClick = (index: number) => {
    if(index===0){
      navigate("/payment");
    }
    else{
      navigate("/signup-details");
    }
  }

  const handleBackButton = () =>{
    navigate("/home-page");
  }
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <MainTemplate showClose={true} showBack={true} onClickBack={handleBackButton}>
        <Stack marginTop={"40px"} marginLeft={"50px"}>
          <AccountType data={SENDING_MONEY} title={SENDING_MONEY_TITLE} selectAccountpOnClick={handleSelectedAccountClick} />
        </Stack>
      </MainTemplate>
    </ErrorBoundary>
  );
};

export default InitiateTransactionPage;
