import { extendTheme } from "@chakra-ui/react";
import { Button, GridItem, Icon, Layout, TextCusto } from "./custom_CSS";
import { Lato } from "next/font/google";

const nextFont = Lato({
  weight: ["900"],
  subsets: ["latin-ext", "latin"],
  style: "italic",
});

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "#111",
        color: "white",
        boxSizing: "border-box",
      },
    },
    fonts: {
      body: nextFont.style.fontFamily,
      heading: nextFont.style.fontFamily,
    },
  },

  components: {
    Layout,
    Button,
    GridItem,
    Icon,
    TextCusto,
  },
});

export default theme;
