import { useState } from "react";
import { Contributor } from "../data";

interface UseContributorModal {
  isModalOpen: boolean;
  currentContributor: Contributor | null;
  openAddModal: () => void;
  openEditModal: (contributor: Contributor) => void;
  closeModal: () => void;
}

export const useContributorModal = (): UseContributorModal => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentContributor, setCurrentContributor] =
    useState<Contributor | null>(null);

  const openAddModal = () => {
    setCurrentContributor(null); // Reset to null for adding a new contributor
    setModalOpen(true);
  };

  const openEditModal = (contributor: Contributor) => {
    setCurrentContributor(contributor); // Set contributor for editing
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentContributor(null); // Reset after closing
  };

  return {
    isModalOpen,
    currentContributor,
    openAddModal,
    openEditModal,
    closeModal,
  };
};
