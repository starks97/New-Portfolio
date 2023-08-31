import { SystemStyleObject } from "@chakra-ui/react";

export interface ICardProps {
  bg: string;
  cursor: string;
  onClick: () => void;
  children: React.ReactNode;
  title: string;
  rounded: string;
  boxShadow: string;
  _hover: SystemStyleObject | undefined;
  role: string;
  height: string;
}
