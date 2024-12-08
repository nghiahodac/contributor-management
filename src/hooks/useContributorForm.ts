import { useState, useEffect } from "react";
import { Contributor, ContributorRole } from "../data";

interface UseContributorFormProps {
  contributor: Contributor | null;
}

export const useContributorForm = ({
  contributor,
}: UseContributorFormProps) => {
  const [formData, setFormData] = useState({
    contributorName: "",
    contributorAlias: "",
    contributorAvatarUrl: "",
    contributorRole: "MainArtist", // Default to MainArtist if no contributor data
  });

  const [errors, setErrors] = useState({
    contributorName: "",
    contributorAlias: "",
    contributorAvatarUrl: "",
    contributorRole: "",
  });

  // Sync state with the contributor prop when it changes
  useEffect(() => {
    if (contributor) {
      setFormData({
        contributorName: contributor.contributorName || "",
        contributorAlias: contributor.contributorAlias || "",
        contributorAvatarUrl: contributor.contributorAvatarUrl || "",
        contributorRole: contributor.contributorRole || "MainArtist",
      });
    } else {
      setFormData({
        contributorName: "",
        contributorAlias: "",
        contributorAvatarUrl: "",
        contributorRole: "",
      });
    }

    // Reset errors when the contributor changes
    setErrors({
      contributorName: "",
      contributorAlias: "",
      contributorAvatarUrl: "",
      contributorRole: "",
    });
  }, [contributor]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for the field being edited
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      contributorRole: value as ContributorRole,
    }));
    setErrors((prev) => ({ ...prev, contributorRole: "" }));
  };

  const validate = () => {
    const newErrors: typeof errors = {
      contributorName: "",
      contributorAlias: "",
      contributorAvatarUrl: "",
      contributorRole: "",
    };

    if (!formData.contributorName.trim()) {
      newErrors.contributorName = "Contributor name is required.";
    }
    if (!formData.contributorAlias.trim()) {
      newErrors.contributorAlias = "Contributor alias is required.";
    }
    if (!formData.contributorAvatarUrl.trim()) {
      newErrors.contributorAvatarUrl = "Avatar URL is required.";
    }

    setErrors(newErrors);

    // Return true if no errors
    return !Object.values(newErrors).some((error) => error);
  };

  return { formData, errors, handleChange, handleRoleChange, validate };
};
