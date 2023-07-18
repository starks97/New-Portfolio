import { ReactNode } from "react";

export interface IModalProps {
  children: ReactNode;
  onClose: () => void;
  size: string;
  isOpen: boolean;
  scrollBehavior: string;
  onOpen(): void;
  handleSizeClick: (newSize: string) => void;

  setSize: React.Dispatch<React.SetStateAction<string>>;
}

interface IModal {
  title: string;
}
