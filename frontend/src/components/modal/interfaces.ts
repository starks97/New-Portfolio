import React, { ChangeEventHandler, Dispatch, SetStateAction } from "react";

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
    icons: React.ElementType[];
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
    SKILLS: ISwiperAboutSkills[];
  };
  journey?: string;
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
    "description" | "activeIndex" | "id" | "dataAbout" | "journey"
  > {}

export interface IAboutSwiperProps
  extends Pick<IAboutProps, "dataAbout" | "journey"> {}

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
  icon?: React.ElementType;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  value: string;
  name: string;
}

export interface IPortfolioCardProps {
  title: string;
  client: string;
  startDate: string;
  endDate: string;
  iconUsedTechnologies: React.ElementType[];
  image: string;
  index: number;
  url: string;
  description: string;
}

export interface SwiperIPortfolioProps
  extends Pick<IPortfolioCardProps, "image" | "description"> {}

export type ISwiperAboutType = {
  index: number;
  title: string;
  date: string;
  description: string;
};

export type ISwiperAboutSkills = {
  index: number;
  title: string;
  icon: React.ElementType;
};
