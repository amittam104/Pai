import supabase from "./supabase";

export async function getTransactions() {
  try {
    const { data: transactions, error } = await supabase
      .from("transactions")
      .select("*");

    if (error) throw new Error("Could not get all the transactions");

    return transactions;
  } catch (error) {
    console.error(error.message);
  }
}

export async function deleteTransaction(id) {
  try {
    const { data, error } = await supabase
      .from("transactions")
      .delete()
      .eq("id", id);

    if (error) throw new Error("Could not get all the transactions");

    return data;
  } catch (error) {
    console.error(error.message);
  }
}
