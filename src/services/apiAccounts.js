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
