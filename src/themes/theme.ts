import { extendTheme } from "@chakra-ui/react";
import {
  Button,
  GridItemComponent,
  IconCustom,
  Layout,
  Text,
} from "./custom_CSS";
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
        bg: "#020203",
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
    GridItemComponent,
    IconCustom,
    Text,
  },
});

export default theme;
