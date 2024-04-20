import React, { createContext, useMemo, useState } from "react";
import { BusinessFields } from "../components/organisms/ConfirmBusinessDirectors";

export interface TransactionBodyType {
  sendAmount: number;
  rate: number;
  sendCountryCode: string;
  recieveCountryCode: string;
  sendCountryIndex: number;
  recieveCountryIndex: number;
  recipientDetails: {
    email: string;
    accountNo: string;
    firstName: string;
    lastName: string;
    ifsc: string;
    accountType: string;
  };
  directors: BusinessFields;
  stackholders: BusinessFields;
  purpose: string;
  paymentId: number;
}
interface TransactionContextProviderProps {
  children: React.ReactNode;
}
interface TransactionContextType {
  transaction: TransactionBodyType;
  setTransaction: React.Dispatch<React.SetStateAction<TransactionBodyType>>;
}
export const TransactionContext = createContext({} as TransactionContextType);

export const TransactionContextProvider = ({
  children,
}: TransactionContextProviderProps) => {
  const [transaction, setTransaction] = useState<TransactionBodyType>({
    rate: 0,
    recieveCountryCode: "",
    sendCountryCode: "",
    sendAmount: 0,
    sendCountryIndex: 0,
    recieveCountryIndex: 0,
    recipientDetails: {
      email: "",
      accountNo: "",
      firstName: "",
      lastName: "",
      ifsc: "",
      accountType: "",
    },
    directors: [
      {
        firstName: "",
        lastName: "",
        dateOfBirth: null,
        countryOfResidence: "",
      },
    ],
    stackholders: [
      {
        firstName: "",
        lastName: "",
        dateOfBirth: null,
        countryOfResidence: "",
      },
    ],
    purpose: "",
    paymentId: 1,
  });
  const contextValue = useMemo(
    () => ({ transaction: transaction, setTransaction: setTransaction }),
    [transaction]
  );
  return (
    <TransactionContext.Provider value={contextValue}>
      {children}
    </TransactionContext.Provider>
  );
};
