import supabase from "./supabase";

export async function getTransactions() {
  try {
    const { data: transactions, error } = await supabase
      .from("transactions")
      .select("*");

    if (error) throw new Error("Could not get all the transactions");

    return transactions;
  } catch (error) {
    console.error(error);
  }
}
