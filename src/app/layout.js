import { Oswald } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const oswald = Oswald({
  subsets: ["latin"],
})

export const metadata = {
  title: "Portfolio | Thanabadee Techakasiwattana",
  description: "Portfolio | Chulalongkorn University | Computer Engineering and Digital Technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${oswald.className} antialiased`}
      >
        {/* Navbar */}
        <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
          <nav className="flex items-center gap-6 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-xl shadow-lg shadow-black/40">
            <Link href="/">
              <span className="opacity-70 hover:opacity-100 cursor-pointer">Home</span>
            </Link>
            {/* <span className="opacity-70 hover:opacity-100 cursor-pointer">About Me</span> */}
            {/* <span className="opacity-70 hover:opacity-100 cursor-pointer">Projects</span> */}
          </nav>
        </header>
        <div className="mt-20" />
        {children}
      </body>
    </html>
  );
}
