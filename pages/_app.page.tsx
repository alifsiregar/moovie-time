import '@/styles/globals.css';
import { useState } from 'react';
import type { AppProps } from 'next/app';
import axios from 'axios';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from 'react-query';

// google font
import { Montserrat } from 'next/font/google';

// component
import Layout from '@/components/Layout';

const montserrat = Montserrat({ subsets: ['latin'] });

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.NEXT_PUBLIC_MOVIEDB_TOKEN}`;

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <main className={montserrat.className}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </Hydrate>
    </QueryClientProvider>
  )
};
