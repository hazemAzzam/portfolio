import apiClient from "@/lib/api";

export const deleteMessage = async (id: number): Promise<void> => {
  const response = await apiClient.delete(`/messages/${id}/`);
  return response.data;
};
