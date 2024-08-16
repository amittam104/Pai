import { useForm } from "react-hook-form";

function AppSettings() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form
      className="flex flex-col gap-8 mt-12 max-w-[40rem]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-2 items-center gap-4">
        <label className="text-lg font-normal" htmlFor="minBalance">
          Minimum Balance
        </label>
        <input
          className="bg-grey-100 border outline-none border-slate-200 px-4 text-sm h-8 w-72 focus:bg-grey-400 focus:border-slate-400"
          type="number"
          id="minBalance"
          {...register("minBalance")}
        />
      </div>
      <div className="grid grid-cols-2 items-center gap-4">
        <label className="text-lg font-normal" htmlFor="defaultAccount">
          Default Account Type
        </label>
        <input
          className="bg-grey-100 border outline-none border-slate-200 px-4 text-sm h-8 w-72 focus:bg-grey-400 focus:border-slate-400"
          type="text"
          id="defaultAccount"
          {...register("defaultAccount")}
        />
      </div>
      <div className="grid grid-cols-2 items-center gap-4">
        <label className="text-lg font-normal" htmlFor="defaultStatus">
          Default Account Status
        </label>
        <input
          className="bg-grey-100 border outline-none border-slate-200 px-4 text-sm h-8 w-72 focus:bg-grey-400 focus:border-slate-400"
          type="text"
          id="defaultStatus"
          {...register("defaultStatus")}
        />
      </div>
      <div className="grid grid-cols-2 items-center gap-4">
        <label className="text-lg font-normal" htmlFor="maxWithdraw">
          Maximum withdraw amount
        </label>
        <input
          className="bg-grey-100 border outline-none border-slate-200 px-4 text-sm h-8 w-72 focus:bg-grey-400 focus:border-slate-400"
          type="number"
          id="maxWithdraw"
          {...register("maxWithdraw")}
        />
      </div>
      <input type="submit" hidden />
    </form>
  );
}

export default AppSettings;
