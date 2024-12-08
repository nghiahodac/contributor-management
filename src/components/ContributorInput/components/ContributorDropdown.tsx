import React from "react";
import { Contributor, ContributorRole, mockContributors } from "../../../data";
import { useContributorSearch } from "../../../hooks/useContributorSearch";

interface ContributorDropdownProps {
  role: ContributorRole;
  handleContributorSelect: (
    role: ContributorRole,
    contributor: Contributor
  ) => void;
  openAddModal: () => void;
}

const ContributorDropdown: React.FC<ContributorDropdownProps> = ({
  role,
  handleContributorSelect,
  openAddModal,
}) => {
  const { searchTerm, setSearchTerm, filteredContributors } = useContributorSearch({
    contributors: mockContributors,
    role,
  });

  return (
    <div className="relative">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Typing name or ID of artist here"
        className="w-full p-2 rounded-md bg-gray-900 text-white"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Dropdown List */}
      {searchTerm && (
        <div className="absolute z-10 w-full mt-1 bg-gray-800 text-white rounded-md shadow-lg max-h-60 overflow-auto">
          {filteredContributors.length > 0 ? (
            filteredContributors.map((c) => (
              <div
                key={c.contributorId}
                onClick={() => handleContributorSelect(role, c)}
                className="p-2 hover:bg-gray-700 cursor-pointer"
              >
                <p className="text-sm font-semibold">
                  {c.contributorName || c.contributorAlias}
                </p>
                <p className="text-xs text-gray-400">ID: {c.contributorId}</p>
              </div>
            ))
          ) : (
            <div className="p-2 text-sm text-gray-400">No matches found</div>
          )}
          <div
            onClick={openAddModal}
            className="p-2 text-sm text-blue-500 hover:bg-gray-700 cursor-pointer"
          >
            Add new contributor
          </div>
        </div>
      )}
    </div>
  );
};

export default ContributorDropdown;
