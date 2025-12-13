import GlassBox from "@/components/glass-box";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
    return (
        <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
            <section className="w-full flex flex-col items-center">
                <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-slate-200">
                    Projects
                </h2>
                <GlassBox className="rounded-xl mt-6 w-full p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center sm:place-items-stretch">
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
                                    <Link href="https://github.com/BankTNBD/Mini-CPU" target="_blank" rel="noopener noreferrer" className="uppercase underline hover:no-underline">more...</Link>
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
                                    <Link href="https://github.com/BankTNBD/idea-cloud" target="_blank" rel="noopener noreferrer" className="uppercase underline hover:no-underline">more...</Link>
                                </div>
                            </div>
                        </GlassBox>

                        <GlassBox className="p-0 w-full max-w-md">
                            <div className="relative aspect-video bg-amber-50 rounded-t-xl w-full">
                                <Image src="/projects/reverse-proxy.png" alt="Reverse Proxy" fill className="object-contain rounded-t-xl" />
                            </div>
                            <div className="p-3">
                                <h3 className="text-lg font-bold">Reverse Proxy</h3>
                                <p className="text-left">
                                    Developed a configurable reverse proxy supporting HTTP/HTTPS/TCP in Node.js, hostname-based routing, and SSL integration. Implemented JSON-driven forwarding rules for dynamic request handling and streamlined multi-service routing.
                                </p>
                                <div className="w-full text-right mt-3">
                                    <Link href="https://github.com/BankTNBD/reverse-proxy" target="_blank" rel="noopener noreferrer" className="uppercase underline hover:no-underline">more...</Link>
                                </div>
                            </div>
                        </GlassBox>

                        <GlassBox className="p-0 w-full max-w-md">
                            <div className="relative aspect-video bg-amber-50 rounded-t-xl w-full">
                                <Image src="/projects/kpsp.png" alt="KPSP" fill className="object-contain rounded-t-xl" />
                            </div>
                            <div className="p-3">
                                <h3 className="text-lg font-bold">KPSP School Website</h3>
                                <p className="text-left">
                                    Developed an experimental school website to practice and enhance web development skills. The project includes school information pages, staff profiles, and news and activities sections. Built with Next.js and React for the frontend, Supabase for the database, and Tailwind CSS for styling. All content is mock data created for learning purposes only.
                                </p>
                                <div className="w-full text-right mt-3">
                                    <Link href="https://github.com/BankTNBD/kpsp" target="_blank" rel="noopener noreferrer" className="uppercase underline hover:no-underline">more...</Link>
                                </div>
                            </div>
                        </GlassBox>

                        <GlassBox className="p-0 w-full max-w-md">
                            <div className="relative aspect-video bg-amber-50 rounded-t-xl w-full">
                                <Image src="/projects/guessy-game.png" alt="Guessy" fill className="object-contain rounded-t-xl" />
                            </div>
                            <div className="p-3">
                                <h3 className="text-lg font-bold">Guessy - The Ultimate 20 Questions Game</h3>
                                <p className="text-left">
                                    Developed a multiplayer 20 Questions web game allowing users to create rooms, invite friends, and play with configurable categories and question limits.
                                </p>
                                <div className="w-full text-right mt-3">
                                    <Link href="https://guessy.iambanky.com/" target="_blank" rel="noopener noreferrer" className="uppercase underline hover:no-underline">more...</Link>
                                </div>
                            </div>
                        </GlassBox>

                        <GlassBox className="p-0 w-full max-w-md">
                            <div className="relative aspect-video bg-amber-50 rounded-t-xl w-full">
                                <Image src="/projects/chula-portfolio.png" alt="Chula Portfolio" fill className="object-contain rounded-t-xl" />
                            </div>
                            <div className="p-3">
                                <h3 className="text-lg font-bold">Chula Portfolio</h3>
                                <p className="text-left">
                                    Designed and built a personal portfolio website for university admission to Chulalongkorn University, focusing on clear presentation of academic and project achievements.
                                </p>
                                <div className="w-full text-right mt-3">
                                    <Link href="https://chula-portfolio.iambanky.com" target="_blank" rel="noopener noreferrer" className="uppercase underline hover:no-underline">more...</Link>
                                </div>
                            </div>
                        </GlassBox>
                    </div>
                </GlassBox>
            </section>
        </main>
    )
}