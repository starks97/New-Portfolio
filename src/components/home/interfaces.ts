export interface ICardProps {
  bg: string;
  cursor: string;
  onClick: () => void;
  children: React.ReactNode;
}

export interface IModalProps {
  title: string;
  children: React.ReactNode;
}
