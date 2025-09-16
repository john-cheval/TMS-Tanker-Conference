import React, { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query);
      setMatches(media.matches);

      const listener = () => setMatches(media.matches);
      media.addEventListener("change", listener);

      return () => media.removeEventListener("change", listener);
    }
  }, [query, matches]);
  return matches;
};

export default useMediaQuery;
