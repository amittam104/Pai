import supabase from "./supabase";

export async function sendFeedback(feedback) {
  try {
    const { data, error } = await supabase
      .from("feedback")
      .insert([feedback])
      .select();

    if (error) throw new Error("Could not send feedback.");

    return data;
  } catch (error) {
    console.error(error);
  }
}
