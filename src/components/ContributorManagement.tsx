import React from "react";
import ContributorInput from "./ContributorInput";
import { ContributorRole } from "../data";
import { useContributorManagement } from "../hooks/useContributorManagement";

const ContributorManagement: React.FC = () => {
  const {
    contributors,
    musicType,
    setMusicType,
    handleContributorSelect,
    handleContributorRemove,
    handleEditContributor,
    validateForm,
    errors,
  } = useContributorManagement();

  const handleSave = () => {
    const isValid = validateForm();
    if (!isValid) {
      alert("Please fix the errors before saving.");
    } else {
      alert("Form is valid, proceed with saving.");
    }
  };

  return (
    <div className="bg-black text-white p-6 min-h-screen">
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">
          Music type <span className="text-red-500">*</span>
        </label>
        <div className="flex space-x-4">
          {["Instrumental", "Ballad", "Rock"].map((type) => (
            <button
              key={type}
              onClick={() =>
                setMusicType(type as "Instrumental" | "Ballad" | "Rock")
              }
              className={`px-4 py-2 rounded-md ${
                musicType === type
                  ? "bg-blue-600"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
        {errors["MainAndFeaturedLimit"] && (
          <p className="text-red-500 text-xs mt-2">
            {errors["MainAndFeaturedLimit"]}
          </p>
        )}
      </div>
      <div className="grid grid-cols-2 gap-6">
        {[
          "MainArtist",
          "FeaturedArtist",
          "Composer",
          "Lyricist",
          "MusicPublisher",
          "Producer",
          "Mixer",
          "Remixer",
        ].map((role) => {
          const isRequired =
            role !== "FeaturedArtist" &&
            role !== "Remixer" &&
            (musicType !== "Instrumental" || role !== "Lyricist");

          return (
            <div key={role} className="space-y-3 bg-gray-900 p-3 rounded-sm">
              <ContributorInput
                role={role as ContributorRole}
                handleContributorSelect={handleContributorSelect}
                handleContributorRemove={handleContributorRemove}
                handleEditContributor={handleEditContributor}
                contributors={contributors[role as ContributorRole]}
                required={isRequired} // Pass required flag
              />
              {errors[role] && (
                <p className="text-red-500 text-xs">{errors[role]}</p>
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-6">
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ContributorManagement;
