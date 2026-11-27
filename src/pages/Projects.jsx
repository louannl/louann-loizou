import PortfolioCard from '../components/UI/Cards/PortfolioCard';
import SkillList from '../components/UI/SkillList';
import { projects } from '../data/projects.mjs';
import { CaseStudyLink } from './CaseStudyDialog';

export default function Projects() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {projects.map(project => (
        <article key={project.slug} className="min-w-0">
          <PortfolioCard className="portfolio-project-card portfolio-clickable-project flex h-full flex-col gap-4 p-5 sm:p-6">
            <div className="portfolio-project-meta flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
              <time className="portfolio-game-date" dateTime={project.year}>{project.year}</time>
              <span>{project.context}</span>
            </div>
            <div className="flex-1">
              <h3 className="font-scoreboard text-3xl leading-none font-bold text-white">{project.title}</h3>
              <p className="mt-2 leading-relaxed text-themeLightGrey">{project.summary}</p>
            </div>
            <SkillList skills={project.skills} label={project.title} limit={3} />
            <CaseStudyLink className="portfolio-case-link portfolio-project-trigger self-start" slug={project.slug} aria-label={`Read case study: ${project.title}`}>
              Read case study
            </CaseStudyLink>
          </PortfolioCard>
        </article>
      ))}
    </div>
  );
}
