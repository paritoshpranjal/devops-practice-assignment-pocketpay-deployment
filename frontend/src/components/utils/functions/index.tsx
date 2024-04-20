import { TransactionBodyType } from "../../../context/TransactionContext";
import { TRANSFER_NUMBER } from "../../../constants";
import { TransactionService } from "../../../services/Transaction";
import { TransactionInterface } from "../interfaces/Transaction";
import { BusinessUserInterface } from "../interfaces/BusinessUser";
import API from "../../../services/index";
export const isValidPassword = (password: string) => {
  const VALIDPASSWORD =
    /^(?=.*[A-Za-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])[A-Za-z\d@#$%^&+=]{8,}$/;
  return VALIDPASSWORD.test(password);
};

export const isValidEmail = (email: string) => {
  const emailPattern = /^[^\s@]+@(zemosolabs\.com|gmail\.com)$/;
  return emailPattern.test(email);
};

export const validateAccountNo = (value: string) => {
  const Account_reg = /^\d{12}$/;
  return Account_reg.test(value);
};
export const validateFirstName = (value: string) => {
  const firstName = value;
  return firstName.trim() === "";
};

export const validateLastName = (value: string) => {
  const lastName = value;
  return lastName.trim() === "";
};

export const validateIfsc = (value: string) => {
  const ifscCode = value;
  return ifscCode.trim() === "";
};
const formatFullDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return date.toLocaleDateString(undefined, options);
};

export const formatDate = (date: Date): string => {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);

  const targetTime = new Date(date);
  const hours = targetTime.getHours();
  const minutes = targetTime.getMinutes();

  if (date.toDateString() === now.toDateString()) {
    return `Today at ${formatTime(hours, minutes)}`;
  } else if (date.toDateString() === tomorrow.toDateString()) {
    return `Tomorrow at ${formatTime(hours, minutes)}`;
  } else {
    return `${formatFullDate(date)} at ${formatTime(hours, minutes)}`;
  }
};

const formatTime = (hours: number, minutes: number): string => {
  const amOrPm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours || 12;
  const formattedTime = `${hours}:${String(minutes).padStart(
    2,
    "0"
  )} ${amOrPm}`;
  return formattedTime;
};
export const addMinutesToDate = (date: Date, minutesToAdd: number): Date => {
  const result = new Date(date);
  result.setMinutes(date.getMinutes() + minutesToAdd);
  return result;
};
export const addHoursToDate = (date: Date, hoursToAdd: number): Date => {
  const result = new Date(date);
  result.setHours(date.getHours() + hoursToAdd);
  return result;
};
export const createTransaction = async (
  transaction: TransactionBodyType,
  buisnessId: number
) => {
  const transactionBody: TransactionInterface = {
    senderAmount: transaction.sendAmount,
    senderCurrency: transaction.sendCountryCode,
    receiverCurrency: transaction.recieveCountryCode,
    receiverAmount: Number(
      (transaction.sendAmount * transaction.rate).toFixed(2)
    ),
    date: new Date(),
    recipient: {
      ...transaction.recipientDetails,
      accountType: transaction.recipientDetails.accountType.toUpperCase(),
    },
    purpose: transaction.purpose,
    status: "SENDING",
    transferNumber: TRANSFER_NUMBER,
    paymentId: transaction.paymentId,
  };
  await TransactionService.createTransaction(transactionBody);
  for (const director of transaction.directors) {
    const owner: BusinessUserInterface = {
      businessUserType: "DIRECTOR",
      country: director.countryOfResidence,
      dob: new Date(director.dateOfBirth ?? ""),
      firstName: director.firstName,
      lastName: director.lastName,
      businessId: buisnessId,
    };
    await TransactionService.addBusinessUser(owner);
  }
  for (const stackholder of transaction.stackholders) {
    const owner: BusinessUserInterface = {
      businessUserType: "OWNER",
      country: stackholder.countryOfResidence,
      dob: new Date(stackholder.dateOfBirth ?? ""),
      firstName: stackholder.firstName,
      lastName: stackholder.lastName,
      businessId: buisnessId,
    };
    await TransactionService.addBusinessUser(owner);
  }
};

export const setToken = (token: string) => {
  API.defaults.headers.common = { Authorization: `Bearer ${token}` };
};
