import { useState } from 'react';
import {Content, Section} from '../components/UI/Section';
import AttributeHeader from '../components/UI/Headers/AttributeHeader';
import { GlassTabs } from '../components/liquid-glass/glass-tabs';

import {Timeline, TimelineItem} from "../components/UI/Timeline/Timeline";

import mealPlanner from '../assets/images/mealplanner.png';
import unitakeaway from '../assets/images/uni-takeaway.png';
import rocketScienceLogo from '../assets/images/rslogo.svg';
import veygologo from '../assets/images/veygologo.svg';

import {GiEngagementRing, GiHockey, GiNotebook, GiNuclearBomb} from 'react-icons/gi';
const careerFilters = [
    { value: "all", label: "All" },
    { value: "roles", label: "Roles" },
    { value: "highlights", label: "Highlights" },
    { value: "projects", label: "Projects" },
];

const timeline = [
    {
        category: "highlights",
        label: "Monitoring Platforms...",
        date: "2026",
        title: "Highlight",
        text: "Setup Prometheus and Grafana with open-telemetry in order to monitor game systems",
        side: "left",
        logo: rocketScienceLogo,
        skills: ["Prometheus", "OpenTelemetry", "Grafana", "Prometheus", "Terraform"]
    },
    {
        category: "highlights",
        label: "Bigggggg Pipelines...",
        date: "2025",
        title: "Highlight",
        text: "Setup CI/CD pipeline additions for a very complex game backend platform, with a complex test suite tailored to the clients wants",
        side: "left",
        logo: rocketScienceLogo,
        icon: <GiEngagementRing/>,
        skills: ["CI/CD", "AWS", "Redis Cluster", "AWS CDK", "CodePipeline", "CodeDeploy", "DevOps"]
    },
    {
        category: "roles",
        label: "Rocket Science Group",
        date: "Jun 2025",
        title: "Senior Platform Engineer",
        text: "Promoted!",
        side: "right",
        logo: rocketScienceLogo,
        skills: ["Leadership", "Architecture", "Strategy", "Mentoring", "Golang"]
    },
    {
        category: "highlights",
        label: "Extensive Load testing suite...",
        date: "2024",
        title: "Highlight",
        text: "Using locust, I set up an extensive load testing suite covering the entire existing backend service\n" +
        "And then I had to fix all the issues I found while doing that :')",
        side: "left",
        logo: rocketScienceLogo,
        skills: ["Locust", "Python", "Redis", "C++", "Bug Triaging", "Redis", "Docker"]
    },
    {
        category: "roles",
        label: "Rocket Science Group",
        date: "Sep 2024",
        title: "Platform Engineer",
        text: "Co-development company for Games. Working with Clients to build and maintain the platform behind their games.",
        side: "right",
        logo: rocketScienceLogo,
        skills: ["AWS", "Python", "IaC", "Golang", "C++"]
    },
    {
        category: "highlights",
        label: "Fraud Engine...",
        date: "2024",
        title: "Highlight",
        text: "Small, focused team on introducing a dedicated fraud analytics service to the platform, to help block bad-actors by utilising data from multiple microservices, centralising it then processing it.",
        side: "left",
        logo: veygologo,
        skills: ["Data Analytics", "Microservices", "Security", "Golang", "Object Storage/S3"]
    },
    {
        category: "highlights",
        label: "Mentoring and P1 incident management...",
        date: "2023",
        title: "Highlight",
        text: "Mentored new engineers on the team, helping them understand the platform and how to contribute effectively.\n" +
        "First responded, managed and resolved P0 incidents throughout the year",
        side: "left",
        logo: veygologo,
        skills: ["Mentorship", "Incident Response", "Problem Solving", "Communication"]
    },
    {
        category: "roles",
        label: "Veygo UK",
        date: "Jul 2023",
        title: "Software Engineer",
        text: "Promoted! Vroom vroom!",
        side: "right",
        logo: veygologo,
        icon: <GiHockey/>,
        skills: ["TypeScript", "Node.js", "Django", "Serverless", "RDS"]
    },
    {
        category: "highlights",
        label: "Introducing Dependency Kaizen..",
        date: "2022",
        title: "Highlight",
        text: "As a junior, started off a weekly meeting that worked towards getting Dependencies down\n" +
        "Started at the beginning of the year with 400+ vulnerabilities, and ended with just shy of 70.",
        side: "left",
        skills: ["Security Compliance", "Maintenance"]
    },
    {
        category: "roles",
        label: "Veygo UK",
        date: "Jan 2022",
        title: "Junior Software Engineer",
        text: "Temporary Car insurance... Brooom broom",
        side: "right",
        logo: veygologo,
        skills: ["JavaScript", "Python", "PostgreSQL", "NewRelic"]
    },
    {
        label: "CodeFirstGirls",
        date: "Nov 2021",
        title: "NanoDegree",
        text: "As part of CodeFirstGirls' NanoDegree program, I completed a in software development, covering topics such as programming fundamentals, data structures, algorithms, and web development; as a prerequisite for joining Veygo.",
        side: "left",
        skills: ["Algorithms", "Data Structures", "Web Development"]
    },
    {
        label: "Career transition",
        date: "Aug 2021",
        title: "Career transition during Covid...",
        text: "New skills loading...",
        side: "right",
        icon: <GiNuclearBomb/>
    },
    {
        category: "projects",
        label: "Uni Takeaway",
        date: "Jun 2021",
        title: "Personal Project",
        text: "A redesign of Uni Takeaway's site (keeping inline with the original), with better functionality and responsiveness.",
        side: "left",
        image: unitakeaway,
        skills: ["React", "Tailwind CSS", "Responsive Design"]
    },
    {
        category: "projects",
        label: "Meal Planner + API",
        date: "Mar 2021",
        title: "Personal Project",
        text: "Designed to help organise the weekly shop, it not only renders the meals you input, but also a handy shopping list - using the Meal Planner API, An API created to be used with the Meal Planner site, the original version didn't use an ORM, this has now been refactored to use one check - out the readme on GitHub for more info on why.",
        side: "left",
        image: mealPlanner,
        skills: ["React", "Node.js", "PostgreSQL", "Sequelize", "EC2"]
    },
    {
        category: "roles",
        label: "Finance Controller, Auditor and so on...",
        date: "Apr 15",
        title: "Spreadsheets were my Database",
        text: "Before I was an engineer, I was in Finance, I'm still a qualified Chartered Accountant (ACCA) to this day.",
        side: "right",
        skills: ["Stakeholder Management", "Board Meetings", "Financial Reporting", "Analysis"],
        icon: <GiNotebook/>
    }
];

const Career = () => {
    const [filter, setFilter] = useState("all");
    const visibleTimeline = filter === "all" ? timeline : timeline.filter(item => item.category === filter);

    return (
        <Section name="career">
            <Content>
                <AttributeHeader className="px-4 text-white sm:px-8">My Path in Tech</AttributeHeader>
                <div className="portfolio-career-filter-row mt-5 flex justify-center px-4 sm:px-8 lg:justify-start">
                    <GlassTabs
                        aria-label="Filter career timeline"
                        options={careerFilters}
                        value={filter}
                        onValueChange={setFilter}
                        className="portfolio-career-tabs"
                        highlightClassName="bg-[#dce9ff]"
                        size="lg"
                    />
                </div>
                <div className="pt-6">
                    <Timeline>
                        {visibleTimeline.map(item => (
                            <TimelineItem
                                key={`${item.date}-${item.label}`}
                                label={item.label}
                                date={item.date}
                                title={item.title}
                                side={item.side}
                                logo={item.logo}
                                image={item.image}
                                skills={item.skills}
                                icon={item.icon}
                            >
                                {item.text}
                            </TimelineItem>
                        ))}
                    </Timeline>
                </div>
            </Content>
        </Section>
    );
};

export default Career;
