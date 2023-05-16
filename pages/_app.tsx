import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// google font
import { Montserrat } from 'next/font/google';

// component
import Layout from '@/components/Layout';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={montserrat.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>  
  )
}
