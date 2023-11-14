import { ResponsiveValue, SystemStyleObject } from "@chakra-ui/react";
import {
  JSXElementConstructor,
  MouseEventHandler,
  ReactElement,
  ReactNode,
} from "react";
import { IconType } from "react-icons";
import { Token } from "typescript";

type VariantProps = Record<string, Record<string, unknown>>;

export interface ICustomComponentsProps {
  variant?: keyof VariantProps;
  children: ReactNode;
  icon?: IconType;
}

export interface ICustomFormComponentProps
  extends Pick<ICustomComponentsProps, "children" | "variant"> {
  onSubmit?: () => void;
  sx?: Record<string, unknown>;
}

export interface ICustomIconProps
  extends Pick<ICustomComponentsProps, "variant"> {
  as?: IconType;
}

export interface ICustomButtonComponentProps
  extends Pick<ICustomComponentsProps, "children" | "variant"> {
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  sx?: Record<string, unknown>;
  rightIcon?:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | undefined;
}

export interface ICustomTextComponentProps
  extends Pick<ICustomComponentsProps, "children" | "variant"> {
  fontSize?: string;
  color: string;
  sx?: Record<string, unknown>;
  _groupHover?: SystemStyleObject | undefined;
}

export interface ICustomGridItemComponentProps
  extends Pick<ICustomComponentsProps, "children" | "variant"> {
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
  cursor?: string;
  bg?: string;
  boxShadow?: string;
  rounded?: string;
  _hover?: SystemStyleObject | undefined;
  role?: string;
  h?: string;
}

export interface ICustomBoxComponentProps
  extends Pick<
    ICustomGridItemComponentProps,
    "children" | "variant" | "onClick"
  > {
  sx?: Record<string, unknown>;
  bgImage?: ResponsiveValue<string | (string & {})> | undefined;
}
