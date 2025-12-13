import GlassBox from "@/components/glass-box"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (


      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center mt-20">

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          <span className="bg-linear-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent uppercase">
            Portfolio
          </span>
        </h1>

        <h2 className="mt-6 max-w-3xl text-2xl md:text-3xl font-semibold text-slate-200">
          Thanabadee Techakasiwattana
        </h2>

        <p className="mt-4 max-w-2xl text-slate-400">
          Study at{" "}
          <span className="text-white font-medium">
            Chulalongkorn University
          </span>{" "}
          Bachelor of Engineering
          2025 (First-year Student)
          <br />
          Computer Engineering and Digital Technology (CEDT)

        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="mailto:bankthanabadee2007@gmail.com">
            <p
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-md"
            >
              bankthanabadee2007@gmail.com
            </p>
          </Link>
          <Link href="mailto:contact@iambanky.com">
            <p
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-md"
            >
              contact@iambanky.com
            </p>
          </Link>
        </div>

        <section className="w-full flex flex-col items-center">
          <GlassBox className="rounded-xl mt-6 w-full p-6">
            <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-slate-200">
              Projects
            </h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center sm:place-items-stretch">
              <GlassBox className="p-0 w-full max-w-md">
                <div className="relative aspect-video bg-amber-50 rounded-t-xl w-full">
                <Image src="/projects/mini-cpu.svg" alt="Mini CPU" fill className="object-contain rounded-t-xl" />
                </div>
                <div className="p-3">
                  <h3 className="text-lg font-bold">Mini CPU Project</h3>
                  <ul className="text-left list-disc list-inside">
                    <li>
                      Designed and built a functional 8-bit multi-cycle CPU (ALU, control unit, registers, memory).
                    </li>
                    <li>
                      Implemented a custom 14-bit ISA with arithmetic, branching, memory ops, and LCM/factorial/prime instructions.
                    </li>
                    <li>
                      Added program loader, execution controller, and hardware output (7-seg display).
                    </li>
                  </ul>
                  <div className="w-full text-right mt-3">
                    <Link href="https://github.com/BankTNBD/Mini-CPU" className="uppercase underline hover:no-underline">more...</Link>
                  </div>
                </div>
              </GlassBox>

              <GlassBox className="p-0 w-full max-w-md">
                <div className="relative aspect-video bg-amber-50 rounded-t-xl w-full">
                <Image src="/projects/idea-cloud.png" alt="IdeaCloud" fill className="object-contain rounded-t-xl" />
                </div>
                <div className="p-3">
                  <h3 className="text-lg font-bold">Idea Cloud – AI-Powered Idea Generation Web Application</h3>
                  <p className="text-left">
                    Developed a single-page web application that helps users generate, explore, and manage project ideas using AI.
                  </p>
                  <div className="w-full text-right mt-3">
                    <Link href="https://github.com/BankTNBD/idea-cloud" className="uppercase underline hover:no-underline">more...</Link>
                  </div>
                </div>
              </GlassBox>

              <GlassBox className="p-0 w-full max-w-md">
                <div className="relative aspect-video bg-amber-50 rounded-t-xl w-full">
                  <Image src="/projects/reverse-proxy.png" alt="IdeaCloud" fill className="object-contain rounded-t-xl" />
                </div>
                <div className="p-3">
                  <h3 className="text-lg font-bold">Reverse Proxy</h3>
                  <p className="text-left">
                    Developed a configurable reverse proxy supporting HTTP/HTTPS/TCP in Node.js, hostname-based routing, and SSL integration. Implemented JSON-driven forwarding rules for dynamic request handling and streamlined multi-service routing.
                  </p>
                  <div className="w-full text-right mt-3">
                    <Link href="https://github.com/BankTNBD/reverse-proxy" className="uppercase underline hover:no-underline">more...</Link>
                  </div>
                </div>
              </GlassBox>
            </div>
            <div className="w-full text-right mt-3">
            <Link href="/projects" className="uppercase underline hover:no-underline">more projects...</Link>
            </div>
          </GlassBox>
        </section>
      </main>
  )
}