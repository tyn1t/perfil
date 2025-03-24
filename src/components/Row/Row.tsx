interface RowProps {
    className?: string;
    children?: React.ReactNode;
}

export function Row ({className, children}: RowProps) {
    return (
        <>
            <div className={`flex z-10 mx-5 ${className || ""}`}>
                <div>
                    <div className="absolute h-[800px] z-10 mx-5 px-1 bg-amber-400">
                        
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}