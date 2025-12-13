"use client"

export default function GradientText({
    children,
    className = '',
    colors = ['#ffaa40', '#9c40ff', '#ffaa40'],
    animationSpeed = 8,
    showBorder = false
}) {
    const gradientStyle = {
        backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
        backgroundSize: '300% 100%',
        animation: `gradientMove ${animationSpeed}s linear infinite`
    };

    return (
        <>
            <style jsx>{`
                @keyframes gradientMove {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }
            `}</style>

            <div
                className={`relative mx-auto flex max-w-fit items-center justify-center rounded-[1.25rem] font-medium backdrop-blur overflow-hidden cursor-pointer ${className}`}
            >
                {showBorder && (
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={gradientStyle}
                    >
                        <div
                            className="absolute inset-0 bg-black rounded-[1.25rem]"
                            style={{
                                width: 'calc(100% - 2px)',
                                height: 'calc(100% - 2px)',
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)'
                            }}
                        />
                    </div>
                )}

                <div
                    className="relative text-transparent m-3"
                    style={{
                        ...gradientStyle,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text'
                    }}
                >
                    {children}
                </div>
            </div>
        </>
    );
}