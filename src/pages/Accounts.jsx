import { Button } from "@/components/ui/button";
import AccountsTable from "@/features/accounts/AccountsTable";
import CreateNewAccount from "@/features/accounts/CreateNewAccount";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

function Accounts() {
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editAccount, setEditAccount] = useState({});

  return (
    <div className="flex flex-col gap-4 bg-slate-50">
      <h1 className="text-3xl font-bold ">Accounts</h1>
      <AccountsTable
        showEditForm={showEditForm}
        setShowEditForm={setShowEditForm}
        setEditAccount={setEditAccount}
        editAccount={editAccount}
      />
      {/* <div className="self-end mr-8 mb-4">
        <Button size="default" onClick={() => setShowForm((show) => !show)}>
          {!showForm ? `Add Account` : "Close Form"}
        </Button>
      </div> */}

      {
        <Dialog>
          <DialogTrigger className="flex self-end mr-8">
            <Button size="default" onClick={() => setShowForm((show) => !show)}>
              Add account
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-[55rem] p-12">
            <CreateNewAccount showEditForm={showEditForm} />
          </DialogContent>
        </Dialog>
      }
    </div>
  );
}

export default Accounts;
