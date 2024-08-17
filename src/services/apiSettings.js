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

export async function updateSettings(newSetting) {
  try {
    const { data, error } = await supabase
      .from("settings")
      .update(newSetting)
      .eq("id", 1)
      .select();

    if (error) throw new Error("Could not update the settings");

    return data;
  } catch (error) {
    console.error(error);
  }
}
