import {
  BusinessDetailsInterface,
  TradeAddressInterface,
} from "../../components/utils/types";
import API from "../index";

export const addBusinessDetails = async (data: BusinessDetailsInterface) => {
  return await API.post(`/business/`, data);
};

export const addTradingAddress = async (data: TradeAddressInterface) => {
  return await API.post(`/business/tradingAddress/`, data);
};
