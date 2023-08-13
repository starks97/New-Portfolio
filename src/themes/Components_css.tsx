import {
  Box,
  Button,
  Flex,
  GridItem,
  Icon,
  useStyleConfig,
  Text,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  ICustomComponentsProps,
  ICustomFormComponentProps,
  ICustomIconProps,
} from "./interfaces";

export function LayoutComponent({ variant, children }: ICustomComponentsProps) {
  const styles = useStyleConfig("Layout", { variant });
  return <Box __css={styles}>{children}</Box>;
}

export function WrapperComponent({
  children,
  variant,
}: ICustomComponentsProps) {
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

export function CustomButtonComponent({
  children,
  variant,
  onSubmit,
  sx,
}: ICustomFormComponentProps) {
  const styles = useStyleConfig("Button", { variant });
  return (
    <Button __css={styles} onSubmit={onSubmit} sx={sx}>
      {children}
    </Button>
  );
}

export function GridItemCustom({ children }: ICustomComponentsProps) {
  const styles = useStyleConfig("GridItem");
  return <GridItem __css={styles}>{children}</GridItem>;
}

export function CustomIconComponent({ as, variant }: ICustomIconProps) {
  const styles = useStyleConfig("IconCustom", { variant });
  return <Icon __css={styles} as={as} />;
}

export function CustomTextComponent({
  children,
  variant,
}: ICustomComponentsProps) {
  const styles = useStyleConfig("TextCusto", { variant });
  return <Text __css={styles}>{children}</Text>;
}
