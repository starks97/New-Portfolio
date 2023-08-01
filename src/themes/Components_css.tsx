import { Box, Flex, useStyleConfig } from "@chakra-ui/react";
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

export function WrapperComponent({ children, variant }: CustomProps) {
  const styles = useStyleConfig("Wrapper", { variant });
  return <Flex __css={styles}>{children}</Flex>;
}
