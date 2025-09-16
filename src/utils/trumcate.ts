// src/utils/truncateHtml.ts

import truncate from "html-truncate";

/**
 * Safely truncates an HTML string to a specified number of characters.
 * This function is safe and will not break HTML tags.
 * @param htmlContent The HTML string to truncate.
 * @param limit The maximum number of characters.
 * @returns The safely truncated HTML string.
 */
export const truncateHtml = (htmlContent: string, limit: number): string => {
  if (htmlContent.length <= limit) {
    return htmlContent;
  }

  // The html-truncate library ensures tags are not broken
  return truncate(htmlContent, limit, { ellipsis: "..." });
};
