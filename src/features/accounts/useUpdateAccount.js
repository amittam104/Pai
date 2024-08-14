import { toast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateAccount as updateAccountApi } from "@/services/apiAccounts";

export function useUpdateAccount() {
  const queryClient = useQueryClient();

  const { mutate: updateAccount } = useMutation({
    mutationFn: (accountData) => updateAccountApi(accountData),
    onError: () => {
      toast({
        variant: "destructive",
        title: "Failed to update the account",
        description: "Please try Again! Reload the page if the issue persists.",
      });
    },
    onSuccess: (data) => {
      !data
        ? toast({
            variant: "destructive",
            title: "Something went wrong",
            description: "Please try again!",
          })
        : toast({
            title: "Account created Successfully",
          });
      queryClient.invalidateQueries({ queryKey: ["accounts"] });
    },
  });

  return { updateAccount };
}
