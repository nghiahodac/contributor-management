import React from "react";
import { Contributor, ContributorRole } from "../../data";
import { useContributorModal } from "../../hooks/useContributorModal";
import ContributorDropdown from "./components/ContributorDropdown";
import ContributorList from "./components/ContributorList";
import ContributorModal from "./components/ContributorModal";

interface ContributorInputProps {
  role: ContributorRole;
  contributors: Contributor[];
  handleContributorSelect: (
    role: ContributorRole,
    contributor: Contributor
  ) => void;
  handleContributorRemove: (role: ContributorRole, id: number) => void;
  handleEditContributor: (
    role: ContributorRole,
    updatedContributor: Contributor
  ) => void;
  required: boolean;
}

const ContributorInput: React.FC<ContributorInputProps> = ({
  role,
  contributors,
  handleContributorSelect,
  handleContributorRemove,
  handleEditContributor,
  required,
}) => {
  const {
    isModalOpen,
    currentContributor,
    openAddModal,
    openEditModal,
    closeModal,
  } = useContributorModal();

  // Handle save contributor (add or edit)
  const handleSaveContributor = (contributor: Contributor) => {
    if (currentContributor) {
      // Editing existing contributor
      handleEditContributor(role, contributor);
    } else {
      // Adding new contributor
      handleContributorSelect(role, contributor);
    }
    closeModal();
  };

  return (
    <div className="space-y-3 bg-gray-900 p-3 rounded-sm">
      {/* Label */}
      <label className="block text-sm font-medium text-white">
        {role.replace(/([A-Z])/g, " $1")}
        {required && <span className="text-red-500">*</span>}
      </label>

      {/* Contributor List */}
      <ContributorList
        contributors={contributors}
        role={role}
        onRemoveContributor={handleContributorRemove}
        onEditContributor={openEditModal}
      />

      {/* Contributor Dropdown */}
      <ContributorDropdown
        role={role}
        openAddModal={openAddModal}
        handleContributorSelect={handleContributorSelect}
      />

      {/* Contributor Modal (used for both add and edit) */}
      {isModalOpen && (
        <ContributorModal
          isOpen={isModalOpen}
          contributor={currentContributor}
          onClose={closeModal}
          onSave={handleSaveContributor}
        />
      )}

      {/* Contributor Count */}
      <p className="text-xs text-gray-500">{contributors.length} selected</p>
    </div>
  );
};

export default ContributorInput;
