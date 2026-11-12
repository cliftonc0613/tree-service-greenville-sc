// Turns *marked* words in heading text into highlighted spans.
// Input comes from our own data files, so only &, <, > are escaped; markers are then converted.
export function highlight(text: string): string {
  const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return escaped.replace(/\*([^*]+)\*/g, '<span class="hl">$1</span>');
}
