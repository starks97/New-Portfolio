import { Box, Button, Flex, Icon, useStyleConfig } from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  ICustomBoxComponentProps,
  ICustomButtonComponentProps,
  ICustomComponentsProps,
  ICustomGridItemComponentProps,
  ICustomIconProps,
  ICustomTextComponentProps,
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
      justifyItems="center"
      alignItems="center"
      w="50%"
    >
      <Flex borderBottom="2px solid #66768f" width="100%" />
      <Icon as={icon} bg="none" color="#0ea5ea" w={5} h={5} margin={"1rem"} />
      <Flex borderBottom="2px solid #66768f" width="100%" />
    </Flex>
  );
}

export function CustomButtonComponent({
  children,
  variant,
  onSubmit,
  sx,
  rightIcon,
}: ICustomButtonComponentProps) {
  const styles = useStyleConfig("Button", { variant });
  return (
    <Button __css={styles} onSubmit={onSubmit} sx={sx} rightIcon={rightIcon}>
      {children}
    </Button>
  );
}

export function GridItemCustom({
  children,
  onClick,
  variant,
  cursor,
  bg,
  boxShadow,
  rounded,
  _hover,
  role,
}: ICustomGridItemComponentProps) {
  const styles = useStyleConfig("GridItemComponent", { variant });
  return (
    <Box
      __css={styles}
      onClick={onClick}
      cursor={cursor}
      bg={bg}
      boxShadow={boxShadow}
      rounded={rounded}
      _hover={_hover}
      role={role}
    >
      {children}
    </Box>
  );
}

export function CustomIconComponent({ as, variant }: ICustomIconProps) {
  const styles = useStyleConfig("IconCustom", { variant });
  return <Icon __css={styles} as={as} />;
}

export function CustomTextComponent({
  children,
  variant,
  fontSize,
  color,
  sx,
  _groupHover,
}: ICustomTextComponentProps) {
  const styles = useStyleConfig("Text", { variant });
  return (
    <Box
      __css={styles}
      fontSize={fontSize}
      color={color}
      sx={sx}
      _groupHover={_groupHover}
    >
      {children}
    </Box>
  );
}

export function CustomBoxComponent({
  variant,
  children,
  onClick,
  sx,
}: ICustomBoxComponentProps) {
  const styles = useStyleConfig("CustomBox", { variant });
  return (
    <Box __css={styles} onClick={onClick} sx={sx}>
      {children}
    </Box>
  );
}
