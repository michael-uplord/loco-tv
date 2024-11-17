import Layout from "../components/layout";
import { DM_Sans } from 'next/font/google'
import "@/styles/style.scss";

const dmSans = DM_Sans({ subsets: ['latin'] })
 
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout className={dmSans.className}>
      <Component {...pageProps} />
    </Layout>
  )
}
