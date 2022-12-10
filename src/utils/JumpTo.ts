export function jumpTo(id: string) {
  let target = document.getElementById(id);
  if (target !== null) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}
