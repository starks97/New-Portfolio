import { extendTheme } from "@chakra-ui/react";
import { Layout } from "./custom_CSS";

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "#111",
        color: "white",
        margin: "2rem",
        boxSizing: "border-box",
      },
    },
  },

  components: {
    Layout,
  },
});

export default theme;
