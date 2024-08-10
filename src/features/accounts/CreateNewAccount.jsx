import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { addAccount } from "@/services/apiAccounts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

function CreateNewAccount() {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm();

  const { mutate } = useMutation({
    mutationFn: addAccount,
    onSuccess: () => {
      toast({
        title: "Account created Successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["accounts"] });
      reset();
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Failed to create the account",
        description: "Please try Again! Reload the page if the issue persists.",
      });
    },
  });

  function onSubmit(data) {
    console.log(data);
    mutate(data);
  }

  return (
    <Card className="mx-auto w-96">
      <CardHeader>
        <CardTitle className="text-xl">Add new account</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <Label htmlFor="accountNo">Account No</Label>
            <Input
              id="accountNo"
              type="number"
              placeholder="1005"
              {...register("accountNo")}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="accountHolderName">Full Name</Label>
            <Input
              id="accountHolderName"
              type="text"
              placeholder="Robinson"
              {...register("accountHolderName")}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="accountType">Account Type</Label>
            <Input
              id="accountType"
              type="text"
              placeholder="savings"
              {...register("accountType")}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="status">Status</Label>
            <Input
              id="status"
              type="text"
              defaultValue="active"
              {...register("status")}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="BranchId">Branch</Label>
            <Input id="BranchId" type="number" {...register("BranchId")} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="balance">Balance</Label>
            <Input
              id="balance"
              type="number"
              defaultValue={0}
              {...register("balance")}
            />
          </div>
          <Button type="submit" className="w-full">
            Create an account
          </Button>
          <Button variant="outline" type="reset" className="w-full">
            Cancel
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default CreateNewAccount;
