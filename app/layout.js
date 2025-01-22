import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CartProvider } from '@/context/CartContext';
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Nii Kwei Ministry",
  description: "Transforming Lives Through Worship and Service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
