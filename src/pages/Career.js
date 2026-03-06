import { Content, Section } from '../components/UI/Section';
import AttributeHeader from '../components/UI/Headers/AttributeHeader';
import { SubHeader } from '../components/UI/Paragraphs/SubHeader';
import tw from '../helpers/tailwind';

import {Timeline, TimelineItem} from "../components/UI/Timeline/Timeline";

const timeline = [
    {
        label: "Rocket Science Group",
        date: "Sep 2024",
        title: "Senior Platform Engineer",
        text: "Pretium lectus quam id leo...",
        side: "right"
    },
    {
        label: "Meal Planner",
        date: "Mar 2021",
        title: "Personal Project",
        text: "Designed to help organise the weekly shop, it not only renders the meals you input, but also a handy shopping list.",
        side: "left"
    },
    {
        label: "Veygo UK",
        date: "Jan 2022",
        title: "Software Engineer",
        text: "Pretium lectus quam id leo...",
        side: "right"
    },
    {
        label: "Career transition",
        date: "Aug 2021",
        title: "Career transition during Covid...",
        text: "Pretium lectus quam id leo...",
        side: "right"
    },
    {
        label: "Uni Takeaway",
        date: "Jun 2021",
        title: "Personal Project",
        text: "A redesign of Uni Takeaway's site (keeping inline with the original), with better functionality and responsiveness.",
        side: "left"
    },
    {
        label: "Finance Controller, Auditor and so on...",
        date: "Apr 15",
        title: "Spreadsheets were my Database",
        text: "Pretium lectus quam id leo...",
        side: "right"
    }
];

/*
* Idea
* Make a double-sided timeline instead
* one side is my job roles
* the other side is types of projects I built (providing not NDA)
* also update tailwind and that
* also had linter etc.
* */

const Projects = () => {
    return (
        <Section className={tw('bg-mint', 'h-100')} name="career">
            <Content>
                <AttributeHeader className="text-white">My History...</AttributeHeader>
                <SubHeader className="text-white">
                </SubHeader>
                <div className="-my-6 py-12">
                    <Timeline>
                        {timeline.map((item, i) => (
                            <TimelineItem
                                key={i}
                                label={item.label}
                                date={item.date}
                                title={item.title}
                                side={item.side}
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

export default Projects;
