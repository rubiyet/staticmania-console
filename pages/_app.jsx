import "@/styles/globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.className}`}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
