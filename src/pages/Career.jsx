import PortfolioCard from '../components/UI/Cards/PortfolioCard';
import { seasons } from '../data/career';
import { projects } from '../data/projects.mjs';
import { CaseStudyLink } from './CaseStudyDialog';

const projectsBySlug = new Map(projects.map(project => [project.slug, project]));

export default function Career() {
  return (
    <div className="grid gap-4 sm:gap-5">
      {seasons.map(season => (
        <section key={season.name} aria-label={season.name}>
          <PortfolioCard className="portfolio-season-card">
            <header className="portfolio-season-header flex flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
              <div className="flex items-center gap-3">
                {season.logo && <img src={season.logo} alt="" className="size-9 rounded-md bg-white object-contain p-1.5" />}
                <h3 className="font-scoreboard text-2xl leading-none font-bold uppercase sm:text-3xl">{season.name}</h3>
              </div>
              <span className="portfolio-game-date">{season.period}</span>
            </header>
            <ol className="portfolio-season-line mx-4 sm:mx-6">
              {season.entries.map(entry => (
                <li key={entry.title} className="portfolio-season-row relative grid gap-x-4 gap-y-2 py-4 pl-6 sm:grid-cols-[8.5rem_1fr]">
                  <span
                    className="portfolio-puck absolute top-5 left-0 -translate-x-1/2"
                    data-promotion={entry.promotion ? '' : undefined}
                    aria-hidden="true"
                  />
                  <div className="flex flex-wrap items-start gap-x-3 gap-y-1 sm:flex-col">
                    <span className="portfolio-game-date">{entry.date}</span>
                    {entry.promotion && <span className="portfolio-promotion-label text-sm font-semibold">Promotion</span>}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-base font-semibold sm:text-lg">{entry.title}</h4>
                    <p className="mt-1 leading-relaxed text-themeLightGrey">{entry.summary}</p>
                    {entry.projects && (
                      <ul className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1" aria-label="Related case studies">
                        {entry.projects.map(slug => {
                          const project = projectsBySlug.get(slug);
                          return <li key={slug}><CaseStudyLink className="portfolio-inline-link" slug={slug}>{project.title}</CaseStudyLink></li>;
                        })}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </PortfolioCard>
        </section>
      ))}
    </div>
  );
}
