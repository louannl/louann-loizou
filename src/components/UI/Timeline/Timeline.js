import React, { useState } from "react";
import tw from "../../../helpers/tailwind";

const timelineColors = {
    label: "text-white/80",

    title: "text-white",
    body: "text-themeLightGrey/90",

    line: "before:bg-white/40",

    dot: "after:bg-mint",
    dotBorder: "after:border-white",

    dateText: "text-themeDarkGrey",
    dateBg: "bg-mint",
};

const TimelineCard = ({ isRight, label, logo, date, title, image, skills, isOpen, children }) => {
    return (
        <div className={tw(
            "bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 transition-all duration-300 transform cursor-default",
            "sm:hover:scale-[1.05] sm:hover:bg-white/20 hover:shadow-2xl",
            isOpen ? "bg-white/20 shadow-2xl scale-[1.02] sm:scale-[1.05]" : ""
        )}>
            <TimelineCardHeader isRight={isRight} label={label} logo={logo} />
            <TimelineCardSubHeader isRight={isRight} date={date} title={title} />

            <div className={tw(
                "grid transition-all duration-500 ease-in-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr] sm:group-hover:grid-rows-[1fr]"
            )}>
                <div className="overflow-hidden">
                    <TimelineCardContent image={image} title={title}>
                        {children}
                    </TimelineCardContent>
                </div>
            </div>
        </div>
    );
};

const TimelineCardHeader = ({ isRight, label, logo }) => (
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
);

const TimelineCardSubHeader = ({ isRight, date, title }) => (
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
        <div className="text-xl font-bold text-white">
            {title}
        </div>
    </div>
);

const TimelineCardContent = ({ image, title, children }) => (
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
);

export function Timeline({ children }) {
    return (
        <div className="relative overflow-x-hidden px-4 sm:px-12">
            {/* Centered line (Desktop) / Left line (Mobile) */}
            <div className={tw(
                "absolute h-full w-0.5 transform -translate-x-1/2",
                "left-6 sm:left-1/2"
            )}>
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

export function TimelineItem({ label, date, title, side = 'right', logo, image, skills = [], children }) {
    const [isOpen, setIsOpen] = useState(false);
    const isRight = side === 'right';

    return (
        <div className={tw(
            "relative flex flex-col sm:flex-row items-center justify-center",
            "group py-8"
        )}>
            {/* The Dot on the timeline line */}
            <div className={tw(
                "absolute left-6 sm:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white z-10 bg-mint",
            )}></div>

            <div
                onClick={() => setIsOpen(!isOpen)}
                className={tw(
                    "w-full sm:flex-1 pl-14 pr-6 sm:px-0 z-20 flex justify-center",
                    isRight ? "sm:order-2" : "sm:order-1"
                )}
            >
                <div className="w-full sm:max-w-[90%]">
                    <TimelineCard
                        isRight={isRight}
                        label={label}
                        logo={logo}
                        date={date}
                        title={title}
                        image={image}
                        skills={skills}
                        isOpen={isOpen}
                    >
                        {children}
                    </TimelineCard>
                </div>
            </div>

            <div className={tw(
                "w-full sm:flex-1 mt-4 sm:mt-0 pl-14 pr-6 sm:px-0 flex items-center",
                isRight ? "sm:order-1 sm:pr-8 sm:justify-end" : "sm:order-2 sm:justify-start sm:pl-8"
            )}>
                <TimelineSkills skills={skills} isRight={isRight} />
            </div>
        </div>
    );
}

const TimelineSkills = ({ skills, isRight }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const limit = 3;
    const hasMore = skills.length > limit;
    const displayedSkills = isExpanded ? skills : skills.slice(0, limit);

    if (!skills || skills.length === 0) return null;

    return (
        <div className={tw(
            "flex flex-wrap gap-2 items-center"
        )}>
            {displayedSkills.map((skill, index) => (
                <span
                    key={index}
                    className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-white/90 whitespace-nowrap"
                >
                    {skill}
                </span>
            ))}
            {hasMore && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsExpanded(!isExpanded);
                    }}
                    className="px-3 py-1 bg-purple border border-purple/40 rounded-full text-xs text-white hover:bg-purple/80 transition-colors shadow-sm"
                >
                    {isExpanded ? "Less" : `+${skills.length - limit} more`}
                </button>
            )}
        </div>
    );
};