import { BankInterface } from "./Bank";
import { BankCardInterface } from "./Card";

export interface PaymentInterface {
  id: number;
  paymentMode: "BANK" | "CARD";
  debitCardPayment: BankCardInterface;
  bankPayment: BankInterface;
}
