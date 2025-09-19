// src/utils/truncateHtml.ts

import truncate from "html-truncate";

/**
 * Safely truncates an HTML string to a specified number of words.
 * @param htmlContent The HTML string to truncate.
 * @param limit The maximum number of words.
 * @returns The safely truncated HTML string.
 */
export const truncateHtmlByWords = (
  htmlContent: string,
  limit: number
): string => {
  // Use a regular expression to remove all HTML tags from the string.
  const plainText = htmlContent.replace(/<[^>]*>/g, "");

  // Split the plain text by spaces to get an array of words.
  const words = plainText.split(/\s+/).filter(Boolean);

  // If the word count is within the limit, return the original HTML.
  if (words.length <= limit) {
    return htmlContent;
  }

  // Get the first 'limit' number of words.
  const truncatedWords = words.slice(0, limit);

  // Join the words back together to get the character count of the truncated plain text.
  const characterLimit = truncatedWords.join(" ").length;

  // Use the html-truncate library with the calculated character limit
  // to ensure HTML tags are not broken.
  return truncate(htmlContent, characterLimit, { ellipsis: "..." });
};
