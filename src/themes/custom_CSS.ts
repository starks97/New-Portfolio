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

    PortfolioLayout: {
      display: "grid",
      gridTemplateColumns: {
        base: "repeat(1, 1fr)",
        sm: "repeat(1, 1fr)",
        md: "repeat(1, 1fr)",
        lg: "repeat(2, 1fr)",
        xl: "repeat(2, 1fr)",
      },
      justifyContent: "center",
      alignItems: "center",
      gap: 5,
      justifyItems: "center",
      width: "100%",
      height: "100%",
    },

    aboutCard: {
      display: "grid",
      gridTemplateColumns: {
        base: "repeat(1, 1fr)",
        sm: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(1, 1fr)",
        xl: "repeat(1, 1fr)",
      },
      justifyContent: "center",
      alignItems: "center",
      gap: 4,
      justifyItems: "center",
      width: "100%",
      height: "100%",
    },

    postCard: {
      display: "grid",
      gridTemplateColumns: {
        base: "repeat(1, 1fr)",
        sm: "repeat(1, 1fr)",
        md: "repeat(1, 1fr)",
        lg: "70% 30%",
        xl: "70% 30%",
      },

      justifyContent: "center",
      alignItems: "center",
      gap: 5,
      justifyItems: "center",
      width: "100%",
      height: "100%",
    },
    footerCard: {
      display: "grid",
      gridTemplateColumns: {
        base: "repeat(1, 1fr)",
        sm: "repeat(1, 1fr)",
        md: "repeat(1, 1fr)",
        lg: "repeat(3, 1fr)",
        xl: "repeat(3, 1fr)",
      },
      width: "100%",
      height: "100%",
      boxShadow: "2xl",
      rounded: "3xl",

      gap: 5,
      border: "1px solid #222f43",
      bg: "#131c31",
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
      bg: "#222",
      color: "orange",
      borderRadius: "0",
      border: "1px solid #F0A202",

      _hover: {
        bg: "orange",
        border: "2px solid orange",
        color: "white",
      },
      _focus: {
        outline: "none",
      },
      _active: {
        bg: "transparent",
      },
      fontFamily: "Lato, sans-serif, serif",
      textTransform: "uppercase",
    },
    AboutButton: {
      bg: "#222",
      color: "orange",
      borderRadius: "0",
      border: "1px solid #F0A202",

      _hover: {
        bg: "orange",
        border: "2px solid orange",
        color: "white",
      },
      _focus: {
        outline: "none",
      },
      _active: {
        bg: "transparent",
      },
      fontFamily: "Lato, sans-serif, serif",
      textTransform: "uppercase",
    },
  },
});

export const GridItemComponent = defineStyleConfig({
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
  variants: {
    profile: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      w: "full",
      h: "full",
      gap: "0px",
      role: "group",
    },
    footer: {
      display: "flex",
      flexDirection: "column",
      bg: "none",
      alignItems: "center",
      justifyContent: "center",
      w: "full",
    },
  },
});

export const IconCustom = defineStyleConfig({
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
  variants: {
    portfolioTechIcon: {
      color: "white",
      w: 5,
      h: 5,
      bg: "transparent",
    },
  },
});

export const Text = defineStyleConfig({
  variants: {
    formTitle: {
      fontFamily: "Lato, serif, Calibri, Arial",
      fontSize: "1.3rem",
      fontWeight: "extrabold",
    },

    portfolioTitle: {
      fontFamily: "Lato, serif, Calibri, Arial",
      fontSize: "1.7rem",
      fontWeight: "extrabold",
      textTransform: "uppercase",
    },

    profile: {
      fontFamily: "Lato, serif, Calibri, Arial",
      fontSize: "30px",
      fontWeight: "extrabold",
      textTransform: "uppercase",
      color: "orange",
      _groupHover: {
        color: "white",
      },
    },
  },
});
