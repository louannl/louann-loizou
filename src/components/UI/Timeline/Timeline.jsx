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

const timelineGlass = { tintColor: "#13283e", borderColor: "#a5e7ff", borderAlpha: 0.32 };
const promotionGlass = { ...timelineGlass, borderColor: "#ffacb4", borderAlpha: 0.55 };

const TimelineCard = ({ isRight, label, logo, date, title, image, promotion, isOpen, children }) => {
    return (
        <GlassCard
            className="portfolio-glass portfolio-timeline-card rounded-2xl p-4 sm:p-6"
            data-promotion={promotion ? '' : undefined}
            tint={0.7}
            optics={promotion ? promotionGlass : timelineGlass}
        >
            <TimelineCardHeader isRight={isRight} label={label} logo={logo} />
            <TimelineCardSubHeader isRight={isRight} date={date} title={title} promotion={promotion} />

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
        <h3 className={tw(
            "min-w-0 font-scoreboard text-2xl leading-none font-bold tracking-wide text-white uppercase [overflow-wrap:anywhere] sm:text-3xl",
            !isRight && "sm:text-right"
        )}>
            {label}
        </h3>
    </div>
);

const TimelineCardSubHeader = ({ isRight, date, title, promotion }) => (
    <div className={tw(
        "flex flex-col items-start gap-2",
        !isRight && "sm:items-end sm:text-right"
    )}>
        <div className={tw("flex flex-wrap items-center gap-2", !isRight && "sm:flex-row-reverse")}>
            <time className="portfolio-timeline-date rounded-sm px-2 py-1 font-mono text-sm font-semibold tracking-wide uppercase">
                {date}
            </time>
            {promotion && <span className="portfolio-promotion-label text-sm font-semibold">Promotion</span>}
        </div>
        <div className="text-base font-semibold text-white sm:text-lg">
            {title}
        </div>
    </div>
);

const TimelineCardContent = ({ image, title, children }) => (
    <div className="mt-4 border-t border-ice/15 pt-4 text-themeLightGrey leading-relaxed">
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
            <div className="portfolio-rink-spine absolute inset-y-0 left-6 -translate-x-1/2 sm:left-1/2" aria-hidden="true" />
            <div className="space-y-5 sm:space-y-0">
                {children}
            </div>
        </div>
    );
}

export function TimelineItem({ label, date, title, side = 'right', logo, image, skills = [], icon, promotion = false, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const isRight = side === 'right';

    return (
        <div className={tw(
            "relative flex flex-col sm:flex-row items-center justify-center",
            "group py-4 sm:py-8"
        )}>
            <div
                className="portfolio-puck absolute left-2 top-10 z-10 -translate-x-1/2 -translate-y-1/2 sm:left-1/2 sm:top-1/2"
                data-promotion={promotion ? '' : undefined}
                aria-hidden="true"
            />

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
                        promotion={promotion}
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
                    "absolute top-1/4 -translate-y-1/2 items-center justify-center text-5xl text-ice/25 transition-colors duration-300 group-hover:text-ice/55 pointer-events-none",
                    "sm:flex hidden z-0",
                    isRight ? "left-1/4 -translate-x-1/2" : "left-3/4 -translate-x-1/2"
                )} aria-hidden="true">
                    {icon}
                </div>
            )}

            {/* Mobile Icon */}
            {icon && (
                <div className="sm:hidden absolute top-6 right-6 text-ice/20 pointer-events-none z-0" aria-hidden="true">
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
