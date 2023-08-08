import { ChangeEventHandler, Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";

export interface IModalProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  activeIndex: number;
  description: string;
  isFadeOpen: boolean;
  setIsFadeOpen: React.Dispatch<React.SetStateAction<boolean>>;
  info: {
    icons: IconType[];
    path: string[];
  };
  email: string;
  phone: string;
  dataPortfolio?: IPortfolioCardProps[];
}

export interface ITouchProps
  extends Pick<IModalProps, "email" | "phone" | "activeIndex" | "info"> {}

export interface IPortfolioProps
  extends Pick<
    IModalProps,
    | "activeIndex"
    | "isFadeOpen"
    | "setIsFadeOpen"
    | "children"
    | "dataPortfolio"
  > {}

export interface IAboutProps
  extends Pick<IModalProps, "description" | "activeIndex"> {}

export interface IFormTouchProps {
  dataForm?: {
    names: string;
    email: string;
    comment: string;
  };
  setDataForm?: Dispatch<
    SetStateAction<{
      names: string;
      email: string;
      comment: string;
    }>
  >;
  label: string;
  icon?: IconType;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  value: string;
}

export interface IPortfolioCardProps {
  title: string;
  client: string;
  startDate: string;
  endDate: string;
  usedTechnologies: string[];
  image: string;
}
