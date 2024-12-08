import { useEffect, useState } from "react";
import { ContributorRole, Contributor } from "../data";

interface UseContributorManagementReturn {
  contributors: Record<ContributorRole, Contributor[]>;
  musicType: "Instrumental" | "Ballad" | "Rock";
  setMusicType: (type: "Instrumental" | "Ballad" | "Rock") => void;
  handleContributorSelect: (
    role: ContributorRole,
    contributor: Contributor
  ) => void;
  handleContributorRemove: (role: ContributorRole, id: number) => void;
  handleEditContributor: (
    role: ContributorRole,
    updatedContributor: Contributor
  ) => void;
  validateForm: () => boolean; // To validate form data
  errors: Record<string, string>; // To store error messages
}

export const useContributorManagement = (): UseContributorManagementReturn => {
  const [musicType, setMusicType] = useState<
    "Instrumental" | "Ballad" | "Rock"
  >("Instrumental");

  const [contributors, setContributors] = useState<
    Record<ContributorRole, Contributor[]>
  >({
    MainArtist: [],
    FeaturedArtist: [],
    Composer: [],
    Lyricist: [],
    MusicPublisher: [],
    Producer: [],
    Mixer: [],
    Remixer: [],
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Reset errors when musicType changes
  useEffect(() => {
    setErrors({});
  }, [musicType]);

  // Validation function
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    const requiredFields: { [key: string]: boolean } = {
      MainArtist: true,
      Composer: true,
      Lyricist: musicType !== "Instrumental", // Only required if music type is not Instrumental
      MusicPublisher: true,
      Producer: true,
      Mixer: true,
      Remixer: false,
      FeaturedArtist: false, // Not required
    };

    // Check if each required field is filled
    Object.keys(requiredFields).forEach((role) => {
      if (
        requiredFields[role as ContributorRole] &&
        contributors[role as ContributorRole].length === 0
      ) {
        newErrors[role] = `${role} is required.`;
      }
    });

    // Validate MainArtist and FeaturedArtist combined limit
    const totalMainAndFeatured =
      contributors.MainArtist.length + contributors.FeaturedArtist.length;
    if (totalMainAndFeatured > 3) {
      newErrors["MainAndFeaturedLimit"] =
        "Main Artist and Featured Artist combined cannot exceed 3 contributors.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleContributorSelect = (
    role: ContributorRole,
    contributor: Contributor
  ) => {
    console.log(contributors, "contributors");
    if (
      !contributors[role].some(
        (c) => c.contributorId === contributor.contributorId
      )
    ) {
      setContributors((prev) => ({
        ...prev,
        [role]: [...prev[role], contributor],
      }));
    }
  };

  const handleContributorRemove = (role: ContributorRole, id: number) => {
    setContributors((prev) => ({
      ...prev,
      [role]: prev[role].filter((c) => c.contributorId !== id),
    }));
  };

  const handleEditContributor = (
    role: ContributorRole,
    updatedContributor: Contributor
  ) => {
    setContributors((prev) => ({
      ...prev,
      [role]: prev[role].map((c) =>
        c.contributorId === updatedContributor.contributorId
          ? updatedContributor
          : c
      ),
    }));
  };

  return {
    contributors,
    musicType,
    setMusicType,
    handleContributorSelect,
    handleContributorRemove,
    handleEditContributor,
    validateForm,
    errors,
  };
};
