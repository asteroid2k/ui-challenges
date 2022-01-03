export function getImageUrl(dir) {
  return new URL(`./${dir}`, import.meta.url).href;
}
