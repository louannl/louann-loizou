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


export function TimelineItem({ label, date, title, children }) {
    return ( <div className="relative pl-8 sm:pl-32 py-6 group">
            <div
            className={tw(
                "font-Monoton font-medium text-2xl mb-1 sm:mb-0",
                timelineColors.label
            )}
        >
            {label}
        </div>

        <div
            className={tw(
                "flex flex-col sm:flex-row items-start mb-1",

                "group-last:before:hidden",

                "before:absolute before:left-2 sm:before:left-0",
                "before:h-full before:px-px",
                timelineColors.line,
                "sm:before:ml-[6.5rem]",
                "before:self-start",
                "before:-translate-x-1/2 before:translate-y-3",

                "after:absolute after:left-2 sm:after:left-0",
                "after:w-2 after:h-2",
                timelineColors.dot,
                "after:border-4 after:box-content",
                timelineColors.dotBorder,
                "after:rounded-full sm:after:ml-[6.5rem]",
                "after:-translate-x-1/2 after:translate-y-1.5"
            )}
        >
            <time
                className={tw(
                    "sm:absolute left-0 translate-y-0.5",
                    "inline-flex items-center justify-center",
                    "text-xs font-semibold uppercase",
                    "w-20 h-6 mb-3 sm:mb-0",
                    "rounded-full",
                    timelineColors.dateText,
                    timelineColors.dateBg
                )}
            >
                {date}
            </time>
            <div
                className={tw(
                    "text-xl font-bold",
                    timelineColors.title
                )}
            >
                {title}
            </div>
        </div>
        <div className={tw(timelineColors.body)}>
            {children}
        </div>
    </div>
);
}