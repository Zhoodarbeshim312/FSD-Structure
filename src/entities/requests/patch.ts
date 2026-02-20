import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/shared/api/base";
export const useUpdateFsd = () => {
  const queryClient = useQueryClient();
  return useMutation<FSD.FSDItem, Error, FSD.FSDItem>({
    mutationFn: async (item) => {
      const { data } = await api.patch(`/FSD/${item._id}`, {
        name: item.name,
        description: item.description,
      });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["gets"] });
    },
  });
};
