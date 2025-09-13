import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
});

export const metadata = {
  title: "J Shop",
  description: "A Shopping website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased bg-stone-100 text-black`}
      >
        <Navbar />
        <div className="p-4">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
