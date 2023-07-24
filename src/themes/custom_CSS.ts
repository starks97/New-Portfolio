import { defineStyleConfig } from "@chakra-ui/react";

export const Layout = defineStyleConfig({
  baseStyle: {
    display: "grid",
    gridTemplateColumns: {
      base: "repeat(1, 1fr)",
      sm: "repeat(1, 1fr)",
      md: "repeat(1, 1fr)",
      lg: "35% 65%",
      xl: "35% 65%",
    },
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    justifyItems: "center",
    width: "100%",
    height: "100%",
  },
  variants: {
    cardLayout: {
      display: "grid",
      sx: {
        "@media (max-width: 768px)": {
          gridTemplateRows: {
            base: "repeat(1, 1fr)",
          },
        },
      },
      gridTemplateColumns: {
        base: "repeat(1, 1fr)",
        sm: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(2, 1fr)",
        xl: "repeat(2, 1fr)",
      },
      justifyItems: "center",
      alignItems: "center",
      gap: 7,
      width: "100%",
      height: "100%",
    },
  },
});
