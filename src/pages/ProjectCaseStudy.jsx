import PortfolioCard from '../components/UI/Cards/PortfolioCard';
import SkillList from '../components/UI/SkillList';
import mealPlanner from '../assets/images/mealplanner.png';
import uniTakeaway from '../assets/images/uni-takeaway.png';
import { caseStudies } from '../data/caseStudies.mjs';

const rinkZones = ['Defensive zone', 'Neutral zone', 'Offensive zone'];

const images = {
  'meal-planner': mealPlanner,
  'uni-takeaway': uniTakeaway,
};

export default function ProjectCaseStudy({ project }) {
  const study = caseStudies[project.slug];

  return (
    <article className="portfolio-case-dialog-content">
      <PortfolioCard className="portfolio-project-card p-5 sm:p-8">
        <header>
          <p className="portfolio-project-meta text-sm">{project.context}</p>
          <h2 className="mt-2 font-scoreboard text-4xl leading-none font-extrabold text-white uppercase sm:text-6xl">
            {project.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-themeLightGrey sm:text-lg">{project.summary}</p>
        </header>
        <dl className="portfolio-case-scoreboard mt-6 grid gap-4 pt-5 sm:grid-cols-[1fr_auto_2fr]">
          <div>
            <dt className="portfolio-game-date">Role</dt>
            <dd className="mt-1 font-semibold">{project.role}</dd>
          </div>
          <div>
            <dt className="portfolio-game-date">Year</dt>
            <dd className="mt-1 font-semibold">{project.year}</dd>
          </div>
          <div>
            <dt className="portfolio-game-date">Stack</dt>
            <dd className="mt-1"><SkillList skills={project.skills} label={project.title} /></dd>
          </div>
        </dl>
      </PortfolioCard>
      {study.image && (
        <figure className="mt-7 overflow-hidden rounded-2xl border border-ice/25 bg-[#13283e]">
          <img src={images[study.image]} alt={study.imageAlt} className="mx-auto max-h-[34rem] w-full object-contain" />
        </figure>
      )}
      <div className="portfolio-case-rink">
        {study.sections.map((section, index) => (
          <section className="portfolio-case-zone" key={section.title}>
            <p className="portfolio-case-zone-label">{rinkZones[index]}</p>
            <h3 className="mt-2 font-scoreboard text-3xl leading-none font-bold uppercase">{section.title}</h3>
            {section.paragraphs.map(paragraph => <p className="mt-3 leading-relaxed" key={paragraph}>{paragraph}</p>)}
          </section>
        ))}
      </div>
    </article>
  );
}
