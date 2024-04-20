import { BankInterface } from "../components/utils/interfaces/Bank";
import { PaymentInterface } from "../components/utils/interfaces/Payment";
import { TransactionInterface } from "../components/utils/interfaces/Transaction";

export const bankPayments: BankInterface[] = [
  {
    id: 1,
    bankName: "LIoyda",
    accountNo: "729019188810",
    code: "24-14-70",
  },
];
export const transactions: TransactionInterface[] = [
  {
    id: 1,
    senderAmount: 100,
    senderCurrency: "GBR",
    receiverCurrency: "EUR",
    receiverAmount: 114,
    recipient: {
      email: "mario.gabriel@gmail.com",
      accountNo: "123456885865",
      firstName: "Mario",
      lastName: "Gabriel",
      ifsc: "ABFJ12929G",
      accountType: "Checking",
    },
    purpose: "Paying for goods or services abroad",
    date: new Date(),
    status: "SENDING",
    transferNumber: "3227627272",
    paymentId: 1,
  },
  {
    id: 2,
    senderAmount: 100,
    senderCurrency: "GBR",
    receiverCurrency: "EUR",
    receiverAmount: 114,
    recipient: {
      email: "mario.gabriel@gmail.com",
      accountNo: "123456885865",
      firstName: "Pavan",
      lastName: "Kumar",
      ifsc: "ABFJ12929G",
      accountType: "Checking",
    },
    purpose: "Paying for goods or services abroad",
    date: new Date(),
    status: "CANCELLED",
    transferNumber: "3227627272",
    paymentId: 2,
  },
];
export const PAYMENTS: PaymentInterface[] = [
  {
    id: 1,
    debitCardPayment: {
      id: 1,
      name: "Visa",
      cardNumber: "2342",
      expiryDate: "11/21",
    },
    bankPayment: {
      id: 1,
      bankName: "Lyoid",
      accountNo: "2332232",
      code: "23-32-22",
    },
    paymentMode: "BANK",
  },
];

export const REDIRECTURI = "http://localhost:3000/signup-details";
