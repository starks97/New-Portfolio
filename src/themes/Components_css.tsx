import { Box, useStyleConfig } from "@chakra-ui/react";
import { ReactNode } from "react";

type VariantProps = Record<string, Record<string, unknown>>;
interface CustomProps {
  variant?: keyof VariantProps;
  children: ReactNode;
}

export function LayoutComponent({ variant, children }: CustomProps) {
  const styles = useStyleConfig("Layout", { variant });
  return <Box __css={styles}>{children}</Box>;
}
