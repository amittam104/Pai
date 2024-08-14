import supabase from "./supabase";

export async function getAccounts() {
  try {
    const { data: accounts, error } = await supabase
      .from("accounts")
      .select("*");

    if (error) throw new Error("Colud not get the accounts. Please try again!");

    return accounts;
  } catch (error) {
    console.error(error.message);
  }
}

export async function deleteAccounts(id) {
  try {
    const { error } = await supabase.from("accounts").delete().eq("id", id);

    if (error) throw new Error("Could not delete the account");
  } catch (error) {
    console.error(error.message);
  }
}

export async function addAccount(accountData) {
  try {
    const { data, error } = await supabase
      .from("accounts")
      .insert([accountData])
      .select();

    if (error) throw new Error("Could not create new account.");

    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function updateAccount(accountData) {
  try {
    const { data, error } = await supabase
      .from("accounts")
      .update({ ...accountData })
      .eq("accountNo", accountData.accountNo)
      .select();

    if (error) throw new Error("Could not update the account.");

    return data;
  } catch (error) {
    console.error(error.message);
  }
}
