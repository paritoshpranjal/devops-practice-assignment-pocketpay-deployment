import React, { createContext, useState, useMemo } from "react";

interface CountryType {
    selectedCountry: string;
    countryCode: string;
    phoneNumber: string;
    password: string;
    email: string;
    
}
interface CountryContextType {
    signUpDetails: CountryType;
    setSignUpDetails: React.Dispatch<React.SetStateAction<CountryType>>;
}
interface SignUpContextProviderProps {
    children: React.ReactNode;
  }

export const SignUpDetailsContext = createContext({} as CountryContextType);

export const SignUpContextProvider = ({
    children,
  }: SignUpContextProviderProps) => {
    const [signUpDetails, setSignUpDetails] = useState<CountryType>({
        selectedCountry:"",
        countryCode:"",
        phoneNumber:"",
        password:"",
        email:"",
    });
    const contextValue = useMemo(
      () => ({ signUpDetails: signUpDetails, setSignUpDetails: setSignUpDetails }),
      [signUpDetails]
    );
    return (
      <SignUpDetailsContext.Provider value={contextValue}>
        {children}
      </SignUpDetailsContext.Provider>
    );
  }