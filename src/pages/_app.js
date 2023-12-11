import '../pages/globals.css'
import Layout from "../components/Layout/Layout"
import { Inter, Roboto, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
