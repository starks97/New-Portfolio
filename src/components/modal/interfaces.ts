import { ReactNode } from "react";

export type ModalProps = {
  children: ReactNode;
  onClose: () => void;
  size: string;
  isOpen: boolean;
  scrollBehavior: string;
};
