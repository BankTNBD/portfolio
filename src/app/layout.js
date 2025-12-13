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
              <span className="opacity-70 hover:opacity-100 cursor-pointer text-amber-50">Home</span>
            </Link>
            <Link href="/projects">
              <span className="opacity-70 hover:opacity-100 cursor-pointer text-amber-50">Projects</span>
            </Link>
            {/* <span className="opacity-70 hover:opacity-100 cursor-pointer">Projects</span> */}
          </nav>
        </header>
        <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">

          {/* Background grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[40px_40px]" />

          {/* Radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(124,58,237,0.25),transparent_60%)]" />
        {children}
        </div>
      </body>
    </html>
  );
}
