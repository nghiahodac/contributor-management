import React from "react";
import { Contributor, contributorRoles } from "../../../data";
import { useContributorForm } from "../../../hooks/useContributorForm";

interface ContributorModalProps {
  isOpen: boolean;
  contributor: Contributor | null;
  onClose: () => void;
  onSave: (contributor: Contributor) => void;
}

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
  <p className="text-sm text-red-500">{message}</p>
);

const InputField: React.FC<{
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
}> = ({ name, placeholder, value, onChange, errorMessage }) => (
  <div>
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-2 rounded-md bg-gray-900 text-white"
    />
    {errorMessage && <ErrorMessage message={errorMessage} />}
  </div>
);

const ContributorModal: React.FC<ContributorModalProps> = ({
  isOpen,
  contributor,
  onClose,
  onSave,
}) => {
  const { formData, errors, handleChange, handleRoleChange, validate } =
    useContributorForm({ contributor });

  const handleSubmit = () => {
    if (validate()) {
      const contributorData = {
        ...(formData as Contributor),
        contributorId:
          contributor?.contributorId || Math.floor(Math.random() * 100 + 1),
      };
      onSave(contributorData);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
      <div className="bg-gray-800 p-6 rounded-lg w-96 space-y-4">
        <h2 className="text-lg font-semibold text-white">
          {contributor ? "Edit Contributor" : "Add Contributor"}
        </h2>

        {/* Contributor Name */}
        <InputField
          name="contributorName"
          placeholder="Contributor Name"
          value={formData.contributorName}
          onChange={handleChange}
          errorMessage={errors.contributorName}
        />

        {/* Contributor Alias */}
        <InputField
          name="contributorAlias"
          placeholder="Contributor Alias"
          value={formData.contributorAlias}
          onChange={handleChange}
          errorMessage={errors.contributorAlias}
        />

        {/* Avatar URL */}
        <InputField
          name="contributorAvatarUrl"
          placeholder="Avatar URL"
          value={formData.contributorAvatarUrl}
          onChange={handleChange}
          errorMessage={errors.contributorAvatarUrl}
        />

        {/* Contributor Role Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Contributor Role
          </label>
          <select
            name="contributorRole"
            value={formData.contributorRole}
            onChange={handleRoleChange}
            className="w-full p-2 rounded-md bg-gray-900 text-white"
          >
            {contributorRoles.map((role) => (
              <option key={role} value={role}>
                {role.replace(/([A-Z])/g, " $1")}
              </option>
            ))}
          </select>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-700 text-white rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContributorModal;
