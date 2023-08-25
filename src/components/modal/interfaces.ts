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
  activeProjectCard?: number;
  setActiveProjectCard?: React.Dispatch<React.SetStateAction<number>>;
  id?: string;
  dataAbout?: {
    EDUCATION: ISwiperAboutType[];
    EXPERIENCE: ISwiperAboutType[];
  };
}

export interface ITouchProps
  extends Pick<
    IModalProps,
    "email" | "phone" | "activeIndex" | "info" | "id"
  > {}

export interface IPortfolioProps
  extends Pick<
    IModalProps,
    | "activeIndex"
    | "isFadeOpen"
    | "setIsFadeOpen"
    | "children"
    | "dataPortfolio"
    | "activeProjectCard"
    | "setActiveProjectCard"
    | "id"
  > {}

export interface IAboutProps
  extends Pick<
    IModalProps,
    "description" | "activeIndex" | "id" | "dataAbout"
  > {}

export interface IAboutSwiperProps extends Pick<IAboutProps, "dataAbout"> {}

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
  iconUsedTechnologies: IconType[];
  image: string;
  index: number;
}

export type ISwiperAboutType = {
  index: number;
  title: string;
  date: string;
  description: string;
};
