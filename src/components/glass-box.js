export default function GlassBox({ className = "", children }) {
    return (
        <div className={`w-full rounded-xl border border-white/20 bg-white/10 text-sm backdrop-blur-md ${className}`}>
            {children}
        </div>
    )
}