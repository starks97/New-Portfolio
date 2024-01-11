import { ResponsiveValue, SystemStyleObject } from "@chakra-ui/react";
import {
  JSXElementConstructor,
  MouseEventHandler,
  ReactElement,
  ReactNode,
} from "react";

type VariantProps = Record<string, Record<string, unknown>>;

export interface ICustomComponentsProps {
  variant?: keyof VariantProps;
  children?: ReactNode;
  icon?: React.ReactElement;
}

export interface ICustomFormComponentProps
  extends Pick<ICustomComponentsProps, "children" | "variant"> {
  onSubmit?: () => void;
  sx?: Record<string, unknown>;
}

export interface ICustomIconProps
  extends Pick<ICustomComponentsProps, "variant"> {
  as?: any;
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

export interface ICustomIconButtonComponentProps
  extends Pick<ICustomComponentsProps, "children" | "variant"> {
  onClick?: () => void;
  icon?: React.ReactElement;
  ariaLabel?: string;
  boxSize?: ResponsiveValue<
    | number
    | (string & {})
    | "inherit"
    | "-moz-initial"
    | "initial"
    | "revert"
    | "revert-layer"
    | "unset"
    | "auto"
    | "-moz-fit-content"
    | "-moz-max-content"
    | "-moz-min-content"
    | "-webkit-fit-content"
    | "-webkit-max-content"
    | "-webkit-min-content"
    | "fit-content"
    | "max-content"
    | "min-content"
  >;
}
