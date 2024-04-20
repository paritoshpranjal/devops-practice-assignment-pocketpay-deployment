import React, { useContext } from "react";
import { MainTemplate } from "../../components/templates/MainTemplate";
import { FillUserDetails } from "../../components/organisms/FillUserDetails";
import { Stack } from "@mui/material";
import { BANK_ACCOUNT_PAYMENT_FLOW_VALUES, BUSINESS_ACCOUNT_SETUP_VALUES } from "../../constants";
import { UserBusinessDetailsContext } from "../../context/UserBusinessDetailsContext";
import { useNavigate } from "react-router-dom";
import { createSignUpDetails } from "../../services/User";
import { SignUpDetailsContext } from "../../context/CountryContext";
import { addBusinessDetails, addTradingAddress } from "../../services/BusinessDetails";

export const UserDetailsPage = () => {
  const { signUpDetails } = useContext(SignUpDetailsContext);
  const { userBusinessDetails } = useContext(UserBusinessDetailsContext)
  const navigate = useNavigate();
  
  const handleContinue = async () => {
    const userData = {
      firstName: userBusinessDetails.firstName,
      lastName: userBusinessDetails.lastName,
      dateOfBirth: userBusinessDetails.dob,
      address: {
        homeAddress: userBusinessDetails.address,
        city: userBusinessDetails.city,
        postalCode: userBusinessDetails.postalCode,
      },
      email: signUpDetails.email,
      password: signUpDetails.password,
      accountType: BANK_ACCOUNT_PAYMENT_FLOW_VALUES.accountType,
      country: signUpDetails.selectedCountry,
      phoneNumber: signUpDetails.phoneNumber,  
    };
    await createSignUpDetails(userData).then(async (response) => {
      const data = {
        name: userBusinessDetails.businessName,
        registrationNo: "2020ZEN5367GJ",
        address: userBusinessDetails.businessAddress,
        businessCategory: userBusinessDetails.category,
        subCategory: userBusinessDetails.subCategory,
        businessSize: userBusinessDetails.sizeOfBusiness,
        userId:response.data.id
      };
      await addBusinessDetails(data).then(async (response)=>{
        const tradeAddresses = userBusinessDetails.tradeAddress;
        await Promise.all(tradeAddresses.map(async (address) => {
          await addTradingAddress({
            address,
            businessId:response.data.id
          });
        }));
      });
    })
    navigate("/login")
  }

  return (
    <MainTemplate
      showStepper={true}
      stepperValues={BUSINESS_ACCOUNT_SETUP_VALUES}
      presentValue={3}
      stepperWidth="49.25rem"
    >
      <Stack marginLeft="12rem">
        <FillUserDetails onClickContinue={handleContinue} />
      </Stack>
    </MainTemplate>
  );
};
