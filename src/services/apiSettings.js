import supabase from "./supabase";

export async function getSettings() {
  try {
    const { data: settings, error } = await supabase
      .from("settings")
      .select("*")
      .single();

    if (error) throw new Error("Could not get the settings");

    return settings;
  } catch (error) {
    console.error(error);
  }
}
