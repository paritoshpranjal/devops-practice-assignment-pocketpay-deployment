import { BusinessUserInterface } from "../../components/utils/interfaces/BusinessUser";
import { TransactionInterface } from "../../components/utils/interfaces/Transaction";
import API from "../index";
export class TransactionService {
  static createTransaction = async (transaction: TransactionInterface) => {
    await API.post(`/transactions`, transaction);
  };
  static getTransactions = async () => {
    return await API.get(`/transactions`);
  };
  static updateStatus = async (
    id: number | undefined,
    status: "SENT" | "SENDING" | "CANCELLED"
  ) => {
    await API.patch(`/transactions/${id}`, { status: status });
  };
  static addBusinessUser = async (user: BusinessUserInterface) => {
    await API.post(`/business/businessProfile/`, user);
  };
  static getPaymentDetails = async (mode: "BANK" | "CARD") => {
    return await API.get(`/payments?paymentMode=${mode}`);
  };
  static getPaymentById = async (id: number) => {
    return await API.get(`/payments/${id}`);
  };
  static getBusiness = async () => {
    return await API.get(`/business`);
  };
}
