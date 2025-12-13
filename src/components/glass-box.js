import { cn } from "@/lib/utils"

export default function GlassBox({ className, children }) {
    return (
        <div className={cn("w-full rounded-xl border border-white/20 bg-white/10 text-sm backdrop-blur-md shadow-xl", className)}>
            {children}
        </div>
    )
}