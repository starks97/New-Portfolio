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
      gridTemplateRows: {
        base: "repeat(4, 1fr)",
        sm: "repeat(4, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(2, 1fr)",
        xl: "repeat(2, 1fr)",
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
      gridTemplateRows: {
        base: "repeat(1, 1fr)",
        sm: "repeat(1, 1fr)",
        md: "repeat(1, 1fr)",
        lg: "repeat(1, 1fr)",
        xl: "repeat(1, 1fr)",
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
      gridTemplateRows: {
        base: "repeat(1, 1fr)",
        sm: "repeat(1, 1fr)",
        md: "repeat(1, 1fr)",
        lg: "repeat(1, 1fr)",
        xl: "repeat(1, 1fr)",
      },

      justifyContent: "center",
      alignItems: "center",
      gap: 5,
      justifyItems: "center",
      width: "100%",
      height: "100%",
      paddingBottom: "3rem",
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
      gridTemplateRows: {
        base: "repeat(1, 1fr)",
        sm: "repeat(1, 1fr)",
        md: "repeat(1, 1fr)",
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
      alignItems: "flex-start",
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
      gridTemplateRows: {
        base: "repeat(1, 1fr)",
        sm: "repeat(1, 1fr)",
        md: "repeat(1, 1fr)",
        lg: "repeat(1, 1fr)",
        xl: "repeat(1, 1fr)",
      },
      gap: 2,
      width: "100%",
      height: "100%",
    },

    postPage: {
      display: "grid",
      gridTemplateColumns: {
        base: "repeat(1, 1fr)",
        sm: "repeat(1, 1fr)",
        md: "repeat(1, 1fr)",
        lg: "70% 30%",
        xl: "70% 30%",
      },
      justifyContent: "center",
      alignItems: "flex-start",
      gap: 7,
      justifyItems: "center",
      width: "100%",
      height: "100%",
      mb: "4rem",
      p: "none",
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
      bg: "#020203",
      color: "#0ea5ea",
      w: "full",
      border: "1px solid #0ea5ea",
      rounded: "lg",

      _hover: {
        bg: "#131c31",
        border: "2px solid #0ea5ea",
        color: "white",
      },
      _focus: {
        outline: "none",
      },
      _active: {
        bg: "transparent",
      },
      fontFamily: "Roboto Mono",
      textTransform: "uppercase",
    },
    refreshButton: {
      bg: "#020203",
      color: "#0ea5ea",
      w: "full",
      border: "1px solid #0ea5ea",
      rounded: "lg",

      _hover: {
        bg: "#131c31",
        border: "2px solid #0ea5ea",
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

    DashButton: {
      bg: "#020203",
      color: "#0ea5ea",
      border: "1px solid #0ea5ea",
      rounded: "lg",
      fontFamily: "Lato, sans-serif, serif",
    },

    menuButtonResume: {
      border: "1px solid white",
      size: "lg",
      bg: "transparent",
      variant: "none",
      _active: {
        bg: "transparent",
      },
      _focus: {
        outline: "none",
      },
      _hover: {
        opacity: 0.5,
        border: "1px solid #2aa5ea",
        color: "#b9e0f2",
      },
      fontSize: "2xl",
      fontFamily: "Roboto Mono",
    },
    menuButtons: {
      varian: "none",
      bg: "none",
      fontSiz: "2xl",
      _active: {
        bg: "transparent",
      },
      _focus: {
        outline: "none",
      },
      _hover: {
        opacity: 0.5,
        color: "#2aa5ea",
      },
      fontSize: "2xl",
      fontFamily: "Roboto Mono",
      color: "#b9e0f2",
    },
    menuButtonTitle: {
      variant: "none",
      fontFamily: "raleway",
      fontWeight: "semibold",
      fontSize: "4xl",
      bg: "transparent",
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
      gap: "0px",
      overflow: "auto",
      transition: "transform 0.2s ease",
      zIndex: 1,
    },

    footer: {
      display: "flex",
      flexDirection: "column",
      bg: "none",
      alignItems: "center",
      w: "full",
      h: "full",
    },
    post: {
      display: "flex",
      gap: "2rem",
      flexDir: "column",
      justifyContent: "flex-start",
      mb: "4rem",
      bg: "none",
    },

    postPageItem: {
      display: "flex",
      gap: "2rem",
      flexDir: "column",
      justifyContent: "flex-start",
      bg: "none",
      alignItems: "center",
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
  },
});

export const IconCustom = defineStyleConfig({
  baseStyle: {
    color: "#b9e0f2",
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
      fontFamily: "Roboto Mono",
      fontSize: "1.7rem",
      fontWeight: "extrabold",
    },

    profile: {
      fontFamily: "Roboto Mono",
      fontSize: "30px",
      fontWeight: "extrabold",
      textTransform: "uppercase",
    },

    postCardAuthor: {
      fontWeight: 600,
      fontFamily: "Roboto Mono",
      fontSize: "xl",
      textTransform: "capitalize",
    },

    postMainTitle: {
      fontFamily: "Roboto Mono",
      fontSize: "3xl",
      fontWeight: "extrabold",
      w: "full",
      p: "none",
    },
  },
});

export const CustomBox = defineStyleConfig({
  baseStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    w: "full",
    h: "full",
  },
  variants: {
    postImage: {
      mt: -6,
      mx: -6,
      mb: 6,
      pos: "relative",
      margin: 1,
      borderRadius: "lg",
      transition: "transform 0.2s ease",
      _hover: { transform: "scale(1.05)" },
      overflow: "hidden",
    },
    MenuBox: {
      display: "flex",
      zIndex: "999",
      width: "100vw",
      height: "100vh",
      inset: "0",
      position: "fixed",
      color: "white",
      backdropFilter: "blur(10px)",
      shadow: "md",
    },
  },
});

export const CustomIconButton = defineStyleConfig({
  baseStyle: {
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
    size: "md",
    ariaLabel: "open menu",
    display: { md: "none" },
  },
  variants: {
    resumeButton: {
      bg: "transparent",
      ariaLabel: "resume",
      color: "#94a9c9",
      border: "1px solid #94a9c9",
    },
  },
});
