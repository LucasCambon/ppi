import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import BackgroundOverlay from "@/components/BackgroundOverlay/BackgroundOverlay";
import { CurrenciesProvider } from "@/services/CurrenciesContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Currency exchange",
  description: "Currency exchange - PPI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <BackgroundOverlay />
        <CurrenciesProvider>
          {children}
        </CurrenciesProvider>
      </body>
    </html>
  );
}
