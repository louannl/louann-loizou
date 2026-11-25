import React, { useState } from "react";
import tw from "../../../helpers/tailwind";
import { GlassCard } from "../../liquid-glass/glass-card";
import {
    GlassPopover,
    GlassPopoverClose,
    GlassPopoverContent,
    GlassPopoverTitle,
    GlassPopoverTrigger,
} from "../../liquid-glass/glass-popover";

const timelineGlass = { tintColor: "#18263d", borderAlpha: 0.4 };

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
        <GlassCard
            className="portfolio-glass portfolio-timeline-card rounded-2xl p-4 sm:p-6"
            tint={0.8}
            optics={timelineGlass}
        >
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
        </GlassCard>
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
            "min-w-0 font-Monoton text-lg font-medium text-white [overflow-wrap:anywhere] sm:text-2xl",
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
        <div className="relative overflow-x-clip px-4 sm:px-12">
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
            <div className="space-y-5 sm:space-y-0">
                {children}
            </div>
        </div>
    );
}

export function TimelineItem({ label, date, title, side = 'right', logo, image, skills = [], icon, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const isRight = side === 'right';

    return (
        <div className={tw(
            "relative flex flex-col sm:flex-row items-center justify-center",
            "group py-4 sm:py-8"
        )}>
            {/* The Dot on the timeline line */}
            <div className={tw(
                "absolute left-2 sm:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white z-10 bg-mint",
            )}></div>

            <div
                onClick={() => setIsOpen(!isOpen)}
                className={tw(
                    "w-full sm:flex-1 pl-7 pr-1 sm:px-0 z-20 flex justify-center",
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
                "w-full sm:flex-1 mt-4 sm:mt-0 pl-7 pr-1 sm:px-0 flex items-center z-20",
                isRight ? "sm:order-1 sm:pr-8 sm:justify-end" : "sm:order-2 sm:justify-start sm:pl-8"
            )}>
                <TimelineSkills skills={skills} label={label} />
            </div>

            {/* Floating Icon */}
            {icon && (
                <div className={tw(
                    "absolute top-1/4 -translate-y-1/2 items-center justify-center text-5xl text-white/40 transition-all duration-500 group-hover:text-white/70 group-hover:scale-110 pointer-events-none",
                    "sm:flex hidden z-0", // Still hide on small mobile screens to avoid overlap, but will rethink if requested
                    isRight ? "left-1/4 -translate-x-1/2" : "left-3/4 -translate-x-1/2"
                )}>
                    {icon}
                </div>
            )}

            {/* Mobile Icon */}
            {icon && (
                <div className="sm:hidden absolute top-6 right-6 opacity-40 pointer-events-none z-0">
                    <div className="text-4xl">{icon}</div>
                </div>
            )}
        </div>
    );
}

const TimelineSkills = ({ skills, label }) => {
    const uniqueSkills = [...new Set(skills)];
    const limit = 3;
    const extraCount = uniqueSkills.length - limit;

    if (uniqueSkills.length === 0) return null;

    return (
        <div className="flex flex-wrap items-center gap-2">
            {uniqueSkills.slice(0, limit).map(skill => (
                <span
                    key={skill}
                    className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-white/90 whitespace-nowrap"
                >
                    {skill}
                </span>
            ))}
            {extraCount > 0 && (
                <GlassPopover>
                    <GlassPopoverTrigger
                        className="portfolio-skill-trigger"
                        aria-label={`See all skills for ${label}`}
                    >
                        {`+${extraCount} more`}
                    </GlassPopoverTrigger>
                    <GlassPopoverContent over="edge" className="portfolio-glass-popup">
                        <GlassPopoverTitle>Skills</GlassPopoverTitle>
                        <ul className="flex flex-wrap gap-2">
                            {uniqueSkills.map(skill => (
                                <li key={skill} className="portfolio-skill-tag rounded-full px-3 py-1 text-sm">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                        <GlassPopoverClose className="portfolio-skill-close self-start">Done</GlassPopoverClose>
                    </GlassPopoverContent>
                </GlassPopover>
            )}
        </div>
    );
};
