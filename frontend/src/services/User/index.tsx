import API from "../index";
import { UserInterface } from "../../components/utils/interfaces/User";

export const createSignUpDetails = async (userData: UserInterface) => {
  return await API.post(`/user/save`, userData);
};
export const addUserLoginDetails = async (email: string, password: string) => {
  return await API.post(`/user/login`, {
    email: email,
    password: password,
  });
};
