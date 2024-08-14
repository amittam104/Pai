import { toast } from "@/components/ui/use-toast";
import { addAccount } from "@/services/apiAccounts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useAddAccount() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: addAccount,
    onError: () => {
      toast({
        variant: "destructive",
        title: "Failed to create the account",
        description: "Please try Again! Reload the page if the issue persists.",
      });
    },
    onSuccess: (data) => {
      !data
        ? toast({
            variant: "destructive",
            title: "Something went wrong",
            description:
              "The account might already be present. Please try again!",
          })
        : toast({
            title: "Account created Successfully",
          });
      queryClient.invalidateQueries({ queryKey: ["accounts"] });
    },
  });

  return { mutate };
}
