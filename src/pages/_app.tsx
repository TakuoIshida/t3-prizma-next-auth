import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { type AppType } from 'next/app';

import Layout from 'components/layout/layout';
import Link from 'next/link';
import { Component } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import 'styles/globals.css';
import { TrpcProvider } from 'utils/trpc-provider';

const MyApp: AppType<{
  session: Session | null;
}> = ({ pageProps: { session, ...pageProps } }) => {
  return (
    <ErrorBoundary fallbackRender={fallbackRender}>
      <TrpcProvider>
        <SessionProvider session={session}>
          {session ? (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          ) : (
            <Component {...pageProps} />
          )}
        </SessionProvider>
      </TrpcProvider>
    </ErrorBoundary>
  );
};

function fallbackRender() {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <Link href="/">topに戻る</Link>
    </div>
  );
}

export default MyApp;
