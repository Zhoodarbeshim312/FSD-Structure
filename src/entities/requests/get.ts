import { api } from "@/shared/api/base";
import { useQuery } from "@tanstack/react-query";
export const useGet = () => {
  return useQuery<FSD.GetRes, FSD.GetReq>({
    queryKey: ["gets"],
    queryFn: async () => {
      const response = await api.get("/FSD");
      return response.data;
    },
  });
};
