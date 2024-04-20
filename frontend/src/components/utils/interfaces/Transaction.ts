export interface TransactionInterface {
  id?: number;
  senderAmount: number;
  senderCurrency: string;
  receiverCurrency: string;
  receiverAmount: number;
  date: Date;
  recipient: {
    email: string;
    accountNo: string;
    firstName: string;
    lastName: string;
    ifsc: string;
    accountType: string;
  };
  purpose: string;
  status: "SENT" | "SENDING" | "CANCELLED";
  transferNumber: string;
  paymentId: number;
}
