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
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white/40 hidden sm:block"></div>
            <div className="space-y-12 sm:space-y-0">
                {children}
            </div>
        </div>
    );
}

export function TimelineItem({ label, date, title, side = 'right', children }) {
    const isRight = side === 'right';

    return (
        <div className={tw(
            "relative flex flex-col sm:flex-row items-center",
            isRight ? "sm:justify-end" : "sm:justify-start",
            "group"
        )}>
            {/* The Dot on the center line */}
            <div className={tw(
                "absolute left-2 sm:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white z-10",
                timelineColors.dot,
                "after:content-['']"
            )}></div>

            <div className={tw(
                "w-full sm:w-[45%] pl-8 sm:pl-0",
                isRight ? "sm:order-2 sm:text-left sm:pl-8" : "sm:order-1 sm:text-right sm:pr-8"
            )}>
                <div className={tw(
                    "font-Monoton font-medium text-2xl mb-1",
                    timelineColors.label
                )}>
                    {label}
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center mb-1 gap-2">
                    <time className={tw(
                        "inline-flex items-center justify-center text-xs font-semibold uppercase px-3 py-1 rounded-full",
                        timelineColors.dateText,
                        timelineColors.dateBg,
                        !isRight && "sm:order-2"
                    )}>
                        {date}
                    </time>
                    <div className={tw(
                        "text-xl font-bold",
                        timelineColors.title,
                        !isRight && "sm:order-1"
                    )}>
                        {title}
                    </div>
                </div>
                <div className={tw(timelineColors.body)}>
                    {children}
                </div>
            </div>
        </div>
    );
}