import supabase from "./supabase";

export async function getSummary() {
  try {
    let { data, error } = await supabase.from("summary").select("*");

    if (error)
      throw new Error("Could not get all summary data. Please try again!");

    return data;
  } catch (error) {
    console.error(error);
  }
}

// export async function uploadSummary({ summaryData }) {
//   try {
//     const { error } = await supabase
//       .from("summary")
//       .insert([summaryData])
//       .select();

//     if (error) throw new Error("Could not upload summary data");
//   } catch (error) {
//     console.error(error);
//   }
// }

export async function getLoanSummary() {
  try {
    let { data, error } = await supabase
      .from("summary")
      .select("exsistingLoan");

    if (error) throw new Error("Could not get the loans data");

    console.log(data);

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getCardsSummary() {
  try {
    let { data, error } = await supabase.from("summary").select("cards");

    if (error) throw new Error("Could not get the cards data");

    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
