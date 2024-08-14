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
import {
  addAccount,
  updateAccount as updateAccountApi,
} from "@/services/apiAccounts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

function CreateNewAccount({ showEditForm, editAccount = {} }) {
  const {
    accountNo,
    accountHolderName,
    accountType,
    status,
    BranchId,
    balance,
  } = editAccount;

  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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
      reset();
    },
  });

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
      reset();
    },
  });

  function onSubmit(data) {
    const AccountData = {
      ...data,
      accountNo: Number(data.accountNo),
      BranchId: Number(data.BranchId),
      balance: Number(data.balance),
    };

    console.log(editAccount);

    if (editAccount.accountNo) updateAccount(AccountData);
    else {
      mutate(AccountData);
    }
  }

  return (
    <Card className="mx-auto w-96">
      <CardHeader>
        <CardTitle className="text-xl">
          {showEditForm ? "Edit Account" : "Create account"}
        </CardTitle>
        <CardDescription>
          {showEditForm
            ? "Enter updated information to update this account"
            : "Enter your information to create an account"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <Label htmlFor="accountNo">Account No</Label>
            <Input
              id="accountNo"
              type="number"
              defaultValue={editAccount ? accountNo : ""}
              placeholder="1005"
              {...register("accountNo", {
                required: "Please enter the account number",
                maxLength: {
                  value: 4,
                  message: "Account name cannot be more than 4 characters",
                },
              })}
            />
            {errors?.accountNo?.message && (
              <p className="text-destructive font-sm my-2">
                {errors?.accountNo?.message}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="accountHolderName">Full Name</Label>
            <Input
              id="accountHolderName"
              type="text"
              defaultValue={editAccount ? accountHolderName : ""}
              placeholder="John Doe"
              {...register("accountHolderName", {
                required: "Please enter your full name",
              })}
            />
            {errors?.accountHolderName?.message && (
              <p className="text-destructive font-sm my-2">
                {errors?.accountHolderName?.message}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="accountType">Account Type</Label>
            <Input
              id="accountType"
              type="text"
              defaultValue={editAccount ? accountType : ""}
              placeholder="savings"
              {...register("accountType", {
                required: "Please ennter the account type",
              })}
            />
            {errors?.accountType?.message && (
              <p className="text-destructive font-sm my-2">
                {errors?.accountType?.message}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="status">Status</Label>
            <Input
              id="status"
              type="text"
              placeholder="active"
              defaultValue={editAccount ? status : "active"}
              {...register("status", {
                required: "Please enter the account status",
              })}
            />
            {errors?.status?.message && (
              <p className="text-destructive font-sm my-2">
                {errors?.status?.message}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="BranchId">Branch</Label>
            <Input
              id="BranchId"
              type="number"
              placeholder="5725"
              defaultValue={editAccount ? BranchId : ""}
              {...register("BranchId", {
                required: "Please enter a branch Id",
                maxLength: {
                  value: 4,
                  message: "Branch Id cannot be more than 4 characters",
                },
              })}
            />
            {errors?.BranchId?.message && (
              <p className="text-destructive font-sm my-2">
                {errors?.BranchId?.message}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="balance">Balance</Label>
            <Input
              id="balance"
              type="number"
              placeholder="7250"
              defaultValue={editAccount ? balance : 0}
              {...register("balance", {
                required: "Please enter a initial balance in the account",
                maxLength: {
                  value: 4,
                  message: "Iinital balance cannot be more than 4 digits",
                },
                min: {
                  value: 1,
                  message: "The initial balance should not be 0",
                },
              })}
            />
            {errors?.balance?.message && (
              <p className="text-destructive font-sm my-2">
                {errors?.balance?.message}
              </p>
            )}
          </div>
          <Button type="submit" className="w-full">
            {showEditForm ? "Edit Account" : "Create an account"}
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