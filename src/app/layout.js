import { Oswald } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Aurora from "@/components/aurora";
import GradualBlur from "@/components/gradual-blur";
import GlassBox from "@/components/glass-box";

const oswald = Oswald({
  subsets: ["latin"],
})

export const metadata = {
  title: "Portfolio | Thanabadee Techakasiwattana",
  description: "Portfolio | Chulalongkorn University | Computer Engineering and Digital Technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${oswald.className} antialiased`}
      >

        <div className="inset-0 w-screen h-screen overflow-hidden bg-black relative">
          <div className="w-full absolute">
            <Aurora
              colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
              blend={0.5}
              amplitude={1.0}
              speed={0.5}
            />
          </div>

          {/* Navbar */}
          <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
            <nav>
              <GlassBox className="flex items-center gap-6 p-3">
                <Link href="/">
                  <span className="opacity-70 hover:opacity-100 cursor-pointer text-amber-50">Home</span>
                </Link>
                <Link href="/projects">
                  <span className="opacity-70 hover:opacity-100 cursor-pointer text-amber-50">Projects</span>
                </Link>
                <Link href="/about-me">
                  <span className="opacity-70 hover:opacity-100 cursor-pointer text-amber-50">About Me</span>
                </Link>
              </GlassBox>
            </nav>
          </header>

          <div className="relative h-full w-full overflow-y-scroll text-white py-20">
            {children}
          </div>

          <GradualBlur

            target="page"

            position="bottom"

            height="2rem"

            strength={2}

            divCount={5}

            curve="bezier"

            exponential={true}

            opacity={1}

          />
        </div>
      </body>
    </html>
  );
}
