import React, { useState } from "react";
import { Contributor, ContributorRole } from "../../../data";
import { FiMoreVertical } from "react-icons/fi";

interface ContributorListProps {
  contributors: Contributor[];
  role: ContributorRole;
  onRemoveContributor: (role: ContributorRole, id: number) => void;
  onEditContributor: (contributor: Contributor) => void;
}

const ContributorList: React.FC<ContributorListProps> = ({
  contributors,
  role,
  onRemoveContributor,
  onEditContributor,
}) => {
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  const toggleMenu = (id: number) => {
    setOpenMenuId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="flex flex-wrap gap-2">
      {contributors.map((c) => (
        <div
          key={c.contributorId}
          className="relative flex items-center bg-gray-800 text-white px-4 py-2 rounded-md space-x-3 w-full max-w-sm"
        >
          {/* Avatar */}
          <img
            src={c.contributorAvatarUrl || "https://via.placeholder.com/40"}
            alt={`${c.contributorName || "Contributor"} avatar`}
            className="w-8 h-8 rounded-full"
          />

          {/* Contributor Details */}
          <div className="flex-1">
            <p className="text-sm font-semibold">
              {c.contributorName || "No name"}
            </p>
            <p className="text-xs text-gray-400">
              {c.contributorAlias ? `Alias: ${c.contributorAlias}` : ""}
              {` (ID: ${c.contributorId})`}
            </p>
          </div>

          {/* Three-Dot Menu Icon */}
          <div className="relative">
            <div
              onClick={() => toggleMenu(c.contributorId)}
              className="text-gray-400 hover:text-gray-200 cursor-pointer"
              title="Options"
            >
              <FiMoreVertical className="w-5 h-5" />
            </div>

            {/* Dropdown Menu */}
            {openMenuId === c.contributorId && (
              <div className="absolute right-0 mt-2 bg-gray-900 text-white rounded-md shadow-lg z-50 cursor-pointer">
                <div
                  onClick={() => {
                    onEditContributor(c);
                    setOpenMenuId(null);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-700"
                >
                  Edit
                </div>
                <div
                  onClick={() => {
                    onRemoveContributor(role, c.contributorId);
                    setOpenMenuId(null);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-700"
                >
                  Delete
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContributorList;
