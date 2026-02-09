export default async function fetchData<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Error" + res.status);
    const json = await res.json();
    return json;
  } catch (err) {
    if (err instanceof Error) console.error(err.message);
    return null;
  }
}
