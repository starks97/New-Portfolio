import React, { useEffect } from "react";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { AppProps } from "next/app";
import { theme } from "@/themes";
import { Roboto_Mono, Roboto_Serif } from "next/font/google";
const roboto = Roboto_Mono({
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ChakraProvider theme={theme}>
          <CSSReset />
          <main className={roboto.className}>
            <Component {...pageProps} />
          </main>
        </ChakraProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
