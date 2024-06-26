
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/layout/Navbar";
import Footer from "./(components)/layout/Footer";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AK Techno Tip",
  description: "A Complete Solution to Your Technological Need",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
          <Navbar />
          {children}
          <Footer />

      </body>
    </html>
  );
}
