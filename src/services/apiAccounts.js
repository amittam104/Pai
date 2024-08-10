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

export async function addAccount(account) {
  try {
    const { data, error } = await supabase
      .from("accounts")
      .insert([account])
      .select();

    if (error) throw new Error("Could not create new account.");

    return data;
  } catch (error) {
    console.error(error.message);
  }
}
