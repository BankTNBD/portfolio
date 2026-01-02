import GlassBox from "@/components/glass-box";
import Image from "next/image";
import Link from "next/link";

const info = [
    { label: "Education", value: "CEDT 1st Year student @ Chulalongkorn University" },
    { label: "Age", value: "18 years old" },
    { label: "Interests", value: "Low-Level Programming, Backend, Linux, Computer Architecture" },
];

export default function AboutMePage() {
    return (
        <main className="relative z-10 grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
            <section className="w-full" aria-labelledby="about-profile">
                <GlassBox className="h-full p-4">
                    <h1 id="about-profile" className="text-center text-2xl font-bold">
                        IamBanky
                    </h1>

                    <GlassBox className="relative mt-4 aspect-square">
                        <Image
                            src="/my-photo.png"
                            alt="Thanabadee Techakasiwattana"
                            fill
                            className="object-contain"
                            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                            priority
                        />
                    </GlassBox>

                    <p className="mt-2 text-center text-lg">Thanabadee Techakasiwattana</p>
                </GlassBox>
            </section>

            <section className="w-full lg:col-span-2" aria-labelledby="about-me-title">
                <GlassBox className="h-full p-4">
                    <GlassBox className="mb-4 w-fit p-4">
                        <h2 id="about-me-title" className="text-2xl font-bold">
                            About Me
                        </h2>
                    </GlassBox>

                    <div>
                        {info.map((item) => (
                            <div key={item.label} className="grid w-full grid-cols-3 gap-4 mt-2">
                                <GlassBox className="col-span-1 p-4">
                                    <h3 className="text-lg">{item.label}</h3>
                                </GlassBox>
                                <GlassBox className="col-span-2 p-4">
                                    <p className="text-lg">{item.value}</p>
                                </GlassBox>
                            </div>
                        ))}
                        <div className="grid w-full grid-cols-3 gap-4 mt-2">
                            <GlassBox className="col-span-1 p-4">
                                <h3 className="text-lg">Website</h3>
                            </GlassBox>
                            <GlassBox className="col-span-2 p-4">
                                <Link href="https://me.iambanky.com" target="_blank" rel="noopener noreferrer" className="text-lg underline hover:no-underline">me.iambanky.com</Link>
                            </GlassBox>
                        </div>
                    </div>
                </GlassBox>
            </section>
        </main>
    );
}