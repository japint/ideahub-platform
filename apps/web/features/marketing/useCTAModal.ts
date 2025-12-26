import { useState } from 'react';

export type CTAModalType = 'assessment' | 'consultation' | null;

export function useCTAModal() {
  const [modal, setModal] = useState<CTAModalType>(null);
  const openModal = (type: CTAModalType) => setModal(type);
  const closeModal = () => setModal(null);
  return { modal, openModal, closeModal };
}
