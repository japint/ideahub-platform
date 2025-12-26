import { useState } from 'react';

export function useCTAModal() {
  const [modal, setModal] = useState<string | null>(null);
  const openModal = (type: string) => setModal(type);
  const closeModal = () => setModal(null);
  return { modal, openModal, closeModal };
}
