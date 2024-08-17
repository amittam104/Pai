import { getSettings, updateSettings } from "@/services/apiSettings";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

function AppSettings() {
  const queryClient = useQueryClient();
  const query = useQuery({ queryKey: ["settings"], queryFn: getSettings });

  const { mutate } = useMutation({
    mutationFn: updateSettings,
    onSuccess: () => {
      console.log("Success");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (e) => {
      console.log(e.message);
    },
  });

  function handleUpdate(e, setting) {
    const { value } = e.target;

    if (!value) return;

    console.log(value);

    mutate({ [setting]: value });
  }

  return (
    <form className="flex flex-col gap-8 mt-12 max-w-[40rem]">
      <div className="grid grid-cols-2 items-center gap-4">
        <label className="text-base font-normal" htmlFor="minBalance">
          Minimum Balance
        </label>
        <input
          className="bg-grey-100 border outline-none border-slate-200 px-4 text-sm h-10 w-72 focus:bg-grey-400 focus:border-slate-400 text-slate-600 font-medium"
          type="number"
          id="minBalance"
          onBlur={(e) => handleUpdate(e, "minBalance")}
          defaultValue={query?.data?.minBalance}
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
          onBlur={(e) => handleUpdate(e, "defaultAccount")}
          defaultValue={query?.data?.defaultAccount}
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
          onBlur={(e) => handleUpdate(e, "defaultStatus")}
          defaultValue={query?.data?.defaultStatus}
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
          onBlur={(e) => handleUpdate(e, "maxWithdraw")}
          defaultValue={query?.data?.maxWithdraw}
        />
      </div>
      <input type="submit" hidden />
    </form>
  );
}

export default AppSettings;
