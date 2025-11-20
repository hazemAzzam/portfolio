import apiClient from "@/lib/api";
import { MessageType } from "../_types";

export const getMessages = async (): Promise<MessageType[]> => {
  const resposnse = await apiClient.get(`/messages`);
  return resposnse.data;
};
