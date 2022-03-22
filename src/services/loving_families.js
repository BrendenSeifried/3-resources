export async function fetchLovingFamilies() {
  const response = await fetch(`${process.env.REACT_APP_SUPABASE_URL}/rest/v1/workshops?`, {
    headers: {
      apikey: process.env.REACT_APP_SUPABASE_KEY,
      Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
    },
  });
  const data = await response.json();
  console.log(data);
  return data;
}