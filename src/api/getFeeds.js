export async function getFeeds() {
  return await (await fetch('/data/feed.json')).json();
}
