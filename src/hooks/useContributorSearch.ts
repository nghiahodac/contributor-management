import { useState, useEffect } from "react";
import { Contributor } from "../data";

interface UseContributorSearchProps {
  contributors: Contributor[];
  role: string;
}

export const useContributorSearch = ({
  contributors,
  role,
}: UseContributorSearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContributors, setFilteredContributors] = useState<
    Contributor[]
  >([]);
  const [cache, setCache] = useState<Record<string, Contributor[]>>({}); // Cache for search results

  // Debounced search term
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  // Handle debouncing
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300); // 300ms debounce

    return () => clearTimeout(handler);
  }, [searchTerm]);

  // Handle filtering and caching
  useEffect(() => {
    if (debouncedSearchTerm.trim() === "") {
      setFilteredContributors([]);
      return;
    }

    // Check cache first
    if (cache[debouncedSearchTerm]) {
      setFilteredContributors(cache[debouncedSearchTerm]);
      return;
    }

    // Filter contributors
    const filtered = contributors.filter(
      (c) =>
        c.contributorRole === role &&
        (c.contributorName
          ?.toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase()) ||
          c.contributorAlias
            ?.toLowerCase()
            .includes(debouncedSearchTerm.toLowerCase()))
    );

    // Update cache and filtered results
    setCache((prevCache) => ({
      ...prevCache,
      [debouncedSearchTerm]: filtered,
    }));
    setFilteredContributors(filtered);
  }, [debouncedSearchTerm, role, cache, contributors]);

  return { searchTerm, setSearchTerm, filteredContributors };
};
