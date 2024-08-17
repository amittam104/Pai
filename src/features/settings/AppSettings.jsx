import { getSettings } from "@/services/apiSettings";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

function AppSettings() {
  const { register, handleSubmit } = useForm();
  const query = useQuery({ queryKey: ["settings"], queryFn: getSettings });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form
      className="flex flex-col gap-8 mt-12 max-w-[40rem]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-2 items-center gap-4">
        <label className="text-base font-normal" htmlFor="minBalance">
          Minimum Balance
        </label>
        <input
          className="bg-grey-100 border outline-none border-slate-200 px-4 text-sm h-10 w-72 focus:bg-grey-400 focus:border-slate-400 text-slate-600 font-medium"
          type="number"
          id="minBalance"
          defaultValue={query?.data?.minBalance}
          {...register("minBalance")}
        />
      </div>
      <div className="grid grid-cols-2 items-center gap-4">
        <label className="text-base font-normal" htmlFor="defaultAccount">
          Default Account Type
        </label>
        <input
          className="bg-grey-100 border outline-none border-slate-200 px-4 text-sm h-10 w-72 focus:bg-grey-400 focus:border-slate-400 text-slate-600 font-medium"
          type="text"
          id="defaultAccount"
          defaultValue={query?.data?.defaultAccount}
          {...register("defaultAccount")}
        />
      </div>
      <div className="grid grid-cols-2 items-center gap-4">
        <label className="text-base font-normal" htmlFor="defaultStatus">
          Default Account Status
        </label>
        <input
          className="bg-grey-100 border outline-none border-slate-200 px-4 text-sm h-10 w-72 focus:bg-grey-400 focus:border-slate-400 text-slate-600 font-medium"
          type="text"
          id="defaultStatus"
          defaultValue={query?.data?.defaultStatus}
          {...register("defaultStatus")}
        />
      </div>
      <div className="grid grid-cols-2 items-center gap-4">
        <label className="text-base font-normal" htmlFor="maxWithdraw">
          Maximum withdraw amount
        </label>
        <input
          className="bg-grey-100 border outline-none border-slate-200 px-4 text-sm h-10 w-72 focus:bg-grey-400 focus:border-slate-400 text-slate-600 font-medium"
          type="number"
          id="maxWithdraw"
          defaultValue={query?.data?.maxWithdraw}
          {...register("maxWithdraw")}
        />
      </div>
      <input type="submit" hidden />
    </form>
  );
}

export default AppSettings;
