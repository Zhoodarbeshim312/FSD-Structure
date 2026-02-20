import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFsdStore } from "../zustand/store";
import { api } from "@/shared/api/base";
export const useCreateFsd = () => {
  const queryClient = useQueryClient();
  const addItem = useFsdStore((state) => state.addItem);
  return useMutation<FSD.PostRes, Error, FSD.PostReq>({
    mutationFn: async (newItem: FSD.PostReq) => {
      const { data } = await api.post("/FSD", newItem);
      return data;
    },
    onSuccess: (data) => {
      addItem(data.data);
      queryClient.invalidateQueries({ queryKey: ["gets"] });
    },
  });
};
