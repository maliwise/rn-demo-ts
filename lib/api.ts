export async function login(email: string, password: string) {
  await new Promise(r => setTimeout(r, 600));
  if (email.length > 3 && password.length > 3) {
    return { token: "demo-" + Date.now() };
  }
  throw new Error("Ungültige Zugangsdaten");
}

export type Post = { id: number; title: string };

export async function fetchPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=20");
  if (!res.ok) throw new Error("Liste konnte nicht geladen werden");
  const data = (await res.json()) as any[];
  return data.map(d => ({ id: d.id, title: d.title }));
}
