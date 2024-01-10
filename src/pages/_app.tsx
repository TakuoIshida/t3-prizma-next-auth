import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import "styles/globals.css";
import { TrpcProvider } from "utils/trpc-provider";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <TrpcProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </TrpcProvider>
  );
};

export default MyApp;
