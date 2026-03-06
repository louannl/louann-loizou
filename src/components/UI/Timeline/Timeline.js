import tw from "../../../helpers/tailwind";

const timelineColors = {
    label: "text-white/80",

    title: "text-white",
    body: "text-slate-200",

    line: "before:bg-white/40",

    dot: "after:bg-emerald-300",
    dotBorder: "after:border-white",

    dateText: "text-emerald-900",
    dateBg: "bg-emerald-200",
};


export function Timeline({ children }) {
    return (
        <div className="relative">
            {/* Centered line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 hidden sm:block">
                {/* Dashed top */}
                <div className="h-24 w-full border-l-2 border-dashed border-white/40"></div>
                {/* Solid middle */}
                <div className="h-[calc(100%-12rem)] w-full bg-white/40"></div>
                {/* Dashed bottom */}
                <div className="h-24 w-full border-l-2 border-dashed border-white/40"></div>
            </div>
            <div className="space-y-12 sm:space-y-0">
                {children}
            </div>
        </div>
    );
}

export function TimelineItem({ label, date, title, side = 'right', logo, image, children }) {
    const isRight = side === 'right';

    return (
        <div className={tw(
            "relative flex flex-col sm:flex-row items-center",
            isRight ? "sm:justify-end" : "sm:justify-start",
            "group py-8"
        )}>
            {/* The Dot on the center line */}
            <div className={tw(
                "absolute left-2 sm:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white z-10 bg-emerald-300",
                "after:content-['']"
            )}></div>

            <div className={tw(
                "w-full sm:w-[45%] pl-12 sm:pl-0",
                isRight ? "sm:order-2 sm:text-left sm:pl-12" : "sm:order-1 sm:text-right sm:pr-12"
            )}>
                {/* Card Container */}
                <div className={tw(
                    "bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:bg-white/20 cursor-default",
                    "group-hover:shadow-2xl"
                )}>
                    {/* Header with Logo */}
                    <div className={tw(
                        "flex items-center gap-4 mb-4",
                        !isRight && "sm:flex-row-reverse"
                    )}>
                        {logo && (
                            <div className="w-12 h-12 flex-shrink-0 bg-white rounded-lg p-2 flex items-center justify-center">
                                <img src={logo} alt={label} className="max-w-full max-h-full object-contain" />
                            </div>
                        )}
                        <div className={tw(
                            "font-Monoton font-medium text-2xl text-white",
                            !isRight && "sm:text-right"
                        )}>
                            {label}
                        </div>
                    </div>

                    <div className={tw(
                        "flex flex-col sm:flex-row items-start sm:items-center mb-4 gap-2",
                        !isRight && "sm:flex-row-reverse"
                    )}>
                        <time className={tw(
                            "inline-flex items-center justify-center text-xs font-semibold uppercase px-3 py-1 rounded-full",
                            timelineColors.dateText,
                            timelineColors.dateBg
                        )}>
                            {date}
                        </time>
                        <div className={tw(
                            "text-xl font-bold text-white"
                        )}>
                            {title}
                        </div>
                    </div>

                    {/* Expandable Content */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                        <div className="overflow-hidden">
                            <div className={tw(
                                "pt-4 border-t border-white/10",
                                timelineColors.body
                            )}>
                                {children}

                                {image && (
                                    <div className="mt-4 rounded-lg overflow-hidden border border-white/10 shadow-lg">
                                        <img src={image} alt={title} className="w-full h-auto object-cover" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}