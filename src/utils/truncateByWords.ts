export function truncateHtmlWords(html: string, wordLimit: number): string {
  if (!html) return "";

  // Strip all tags to count words properly
  const text = html.replace(/<[^>]+>/g, "");
  const words = text.split(/\s+/);

  if (words.length <= wordLimit) return html; // no need to cut

  const truncatedText = words.slice(0, wordLimit).join(" ") + "…";

  return `<p>${truncatedText}</p>`; // wrap back as HTML
}
