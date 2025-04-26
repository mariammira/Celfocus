import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { appName } from '@services';
import Providers from './../../_redux/provider';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to Celfocus! {appName()}</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
       
      </Head>
      <main className="app">
        <Providers>
          <Component {...pageProps} />
        </Providers>
        
      </main>
    </>
  );
}

export default CustomApp;
