import { JSXElementConstructor, ReactElement, ReactNode } from "react";
import { IconType } from "react-icons";

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
  onSubmit?: () => void;
  sx?: Record<string, unknown>;
  rightIcon?:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | undefined;
}
