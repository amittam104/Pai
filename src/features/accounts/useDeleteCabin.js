import { toast } from "@/components/ui/use-toast";
import { deleteAccounts } from "@/services/apiAccounts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteAccounts,
    onSuccess: () => {
      toast({
        title: "Account deleted Successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["accounts"] });
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Failed to delete the row",
        description: "Please try Again! Reload the page if the issue persists.",
      });
    },
  });

  return { mutate };
}
