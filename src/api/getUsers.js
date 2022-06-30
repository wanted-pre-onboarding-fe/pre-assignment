export async function getUser() {
  return await (await fetch('/data/user.json')).json();
}
