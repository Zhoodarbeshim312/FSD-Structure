import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/shared/api/base";

export const useDeleteFsd = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string>({
    mutationFn: async (id) => {
      await api.delete(`/FSD/${id}`);
    },
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: ["gets"] });
      console.log(`Элемент ${id} удален`);
    },
  });
};
