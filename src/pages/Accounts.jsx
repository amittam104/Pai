import { Button } from "@/components/ui/button";
import AccountsTable from "@/features/accounts/AccountsTable";
import CreateNewAccount from "@/features/accounts/CreateNewAccount";
import { useState } from "react";

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
      <div className="self-end mr-8 mb-4">
        <Button size="default" onClick={() => setShowForm((show) => !show)}>
          {!showForm ? `Add Account` : "Close Form"}
        </Button>
      </div>

      {showForm && <CreateNewAccount showEditForm={showEditForm} />}
    </div>
  );
}

export default Accounts;
