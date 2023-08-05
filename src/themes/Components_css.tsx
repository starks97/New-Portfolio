import { Box, Flex, Icon, useStyleConfig } from "@chakra-ui/react";
import { ReactNode } from "react";
import { IconType } from "react-icons";

type VariantProps = Record<string, Record<string, unknown>>;
interface CustomProps {
  variant?: keyof VariantProps;
  children: ReactNode;
  icon?: IconType;
}

export function LayoutComponent({ variant, children }: CustomProps) {
  const styles = useStyleConfig("Layout", { variant });
  return <Box __css={styles}>{children}</Box>;
}

export function WrapperComponent({ children, variant }: CustomProps) {
  const styles = useStyleConfig("Wrapper", { variant });
  return <Box __css={styles}>{children}</Box>;
}

export function LineSeparator({ icon }: { icon: IconType }) {
  return (
    <Flex
      overflow={"inherit"}
      bg="none"
      margin="35px 0 62px"
      justifyItems="center"
      alignItems="center"
      w="50%"
    >
      <Flex borderBottom="2px solid #666" width="100%" />
      <Icon as={icon} bg="none" color="orange" w={5} h={5} margin={"1rem"} />
      <Flex borderBottom="2px solid #666" width="100%" />
    </Flex>
  );
}
