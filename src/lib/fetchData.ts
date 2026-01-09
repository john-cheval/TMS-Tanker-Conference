// import { cache } from "react";

// export const fetchData = /*cache*/ async (url: string) => {
//   try {
//     const response = await fetch(url, {
//       next: {
//         revalidate: 10,
//       }
//       , cache: "no-store" 
//     });

//     if (!response.ok) {
//       // Log the status code and the text of the error response from the API
//       const errorText = await response.text();
//       console.error(`API Error: Status ${response.status} from ${url}`);
//       console.error("API Error Body:", errorText);

//       // Throw a more informative error that includes the status
//       throw new Error(
//         `Failed to fetch data from ${url}: Status ${response.status}`
//       );
//     }

//     return await response.json();
//   } catch (error) {
//     // This catch block will now receive the detailed error
//     console.error("Fetch failed:", error);
//     return null;
//   }
// };

import { toast } from "sonner";

export const fetchData = async (
  url: string,
  options: RequestInit & {
    revalidate?: number | false;
  } = {}
) => {
  try {
    const response = await fetch(url, {
      cache: options.cache ?? "force-cache",
      next:
        options.revalidate === false
          ? undefined
          : { revalidate: options.revalidate ?? 10 },
    });

    if (!response.ok) {
      const errorText = await response.text();
      toast.error("API Error");

      throw new Error(
        `Failed to fetch data from ${url}: Status ${response.status}`
      );
    }

    return await response.json();
  } catch (error) {
    return null;
  }
};
