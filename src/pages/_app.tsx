import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps, AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
    <SessionProvider session={session}>
      <ChakraProvider>{getLayout(<Component {...pageProps} />)}</ChakraProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
