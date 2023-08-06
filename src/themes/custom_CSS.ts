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
    AboutLayout: {
      display: "grid",
      gridTemplateColumns: {
        base: "repeat(1, 1fr)",
        sm: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
        xl: "repeat(3, 1fr)",
      },
      justifyContent: "center",
      alignItems: "center",
      gap: 6,
      justifyItems: "center",
      width: "100%",
      height: "100%",
    },
    touchLayout: {
      display: "grid",
      gridTemplateColumns: {
        base: "repeat(1, 1fr)",
        sm: "repeat(1, 1fr)",
        md: "repeat(1, 1fr)",
        lg: "40% 60%",
        xl: "40% 60%",
      },
      justifyContent: "center",
      alignItems: "center",
      gap: 6,
      justifyItems: "center",
      width: "100%",
      height: "100%",
    },
  },
});

export const Wrapper = defineStyleConfig({
  baseStyle: {
    display: "flex",
    overflow: "inherit",
    bg: "none",
    margin: "35px 0 62px",
    justifyItems: "center",
    alignItems: "center",
    w: "50%",
  },

  variants: {
    cardWrapper: {
      display: "flex",
      overflow: "inherit",
      bg: "none",
      margin: "35px 0 62px",
      justifyItems: "center",
      alignItems: "center",
      w: "100%",
    },
  },
});

export const Button = defineStyleConfig({
  baseStyle: {
    bg: "#BB5611",
    color: "white",
  },
  variants: {
    FormButton: {
      bg: "#BB5611",
      color: "white",

      _hover: {
        opacity: 0.5,
      },
      _focus: {
        outline: "none",
      },
      _active: {
        bg: "transparent",
      },
    },
  },
});

export const GridItem = defineStyleConfig({
  baseStyle: {
    bg: "#111",
    width: "full",
    h: "full",
    display: "flex",
    gap: "inherit",
    flexDirection: "column",
    alignItems: "start",
    p: "1rem",
  },
});

export const Icon = defineStyleConfig({
  baseStyle: {
    color: "#FFB25C",
    w: 5,
    h: 5,
    bg: "transparent",
    _active: {
      bg: "transparent",
    },
    _focus: {
      outline: "none",
    },
    _hover: {
      opacity: 0.5,
    },
  },
});

export const TextCusto = defineStyleConfig({
  baseStyle: {
    fontFamily: "Lato, sans-serif, serif",
    fontSize: "50px",
    textTransform: "uppercase",
    fontWeight: 900,
    color: "white",
  },
  variants: {
    formTitle: {
      fontFamily: "Lato, serif, Calibri, Arial",
      fontSize: "1.3rem",
      fontWeight: "extrabold",
    },
  },
});
