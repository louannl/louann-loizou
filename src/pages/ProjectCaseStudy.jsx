import { useId, useLayoutEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import PortfolioCard from '../components/UI/Cards/PortfolioCard';
import SkillList from '../components/UI/SkillList';
import { Content } from '../components/UI/Section';
import mealPlanner from '../assets/images/mealplanner.png';
import uniTakeaway from '../assets/images/uni-takeaway.png';
import { projects } from '../data/projects.mjs';

const rinkZones = ['Defensive zone', 'Neutral zone', 'Offensive zone'];

const images = {
  'meal-planner': mealPlanner,
  'uni-takeaway': uniTakeaway,
};

export function CaseStudyLink({ slug, ...props }) {
  const { search, hash } = useLocation();
  const params = new URLSearchParams(search);
  params.set('project', slug);

  return (
    <Link
      to={{ search: params.toString(), hash }}
      state={{ openedCaseStudy: true }}
      aria-haspopup="dialog"
      onClick={event => event.currentTarget.focus({ preventScroll: true })}
      {...props}
    />
  );
}

export function ProjectNotFound() {
  return (
    <Content className="portfolio-hero-content px-5 text-white sm:px-8">
      <h1 className="font-scoreboard text-5xl font-bold">Page not found</h1>
      <Link className="portfolio-case-link mt-5 inline-block" to="/#projects">Back to projects</Link>
    </Content>
  );
}

function CaseStudy({ project, dismiss }) {
  const dialog = useRef(null);
  const titleId = useId();

  useLayoutEffect(() => {
    const element = dialog.current;
    const opener = document.activeElement;
    element.showModal();
    return () => {
      element.close();
      if (opener instanceof HTMLElement && opener.isConnected) {
        opener.focus({ preventScroll: true });
      }
    };
  }, []);

  return (
    <dialog
      ref={dialog}
      className="portfolio-case-dialog"
      aria-labelledby={titleId}
      onCancel={event => {
        event.preventDefault();
        dismiss();
      }}
      onClick={event => {
        if (event.target === event.currentTarget) dismiss();
      }}
    >
      <div className="portfolio-case-dialog-top sticky top-0 z-10 flex justify-end">
        <button type="button" className="portfolio-case-link" aria-label="Close case study" onClick={dismiss}>
          Close
        </button>
      </div>
      <article className="portfolio-case-dialog-content">
        <PortfolioCard className="portfolio-project-card p-5 sm:p-8">
          <header>
            <p className="portfolio-project-meta text-sm">{project.context}</p>
            <h2 id={titleId} className="mt-2 font-scoreboard text-4xl leading-none font-extrabold text-white uppercase sm:text-6xl">
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
        {project.image && (
          <figure className="mt-7 overflow-hidden rounded-2xl border border-ice/25 bg-[#13283e]">
            <img src={images[project.image]} alt={project.imageAlt} className="mx-auto max-h-[34rem] w-full object-contain" />
          </figure>
        )}
        <div className="portfolio-case-rink">
          {project.sections.map((section, index) => (
            <section className="portfolio-case-zone" key={section.title}>
              <p className="portfolio-case-zone-label">{rinkZones[index]}</p>
              <h3 className="mt-2 font-scoreboard text-3xl leading-none font-bold uppercase">{section.title}</h3>
              {section.paragraphs.map(paragraph => <p className="mt-3 leading-relaxed" key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
        </div>
      </article>
    </dialog>
  );
}

export default function CaseStudyDialog() {
  const { pathname, hash, search, state } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const project = projects.find(item => item.slug === params.get('project'));

  if (pathname !== '/' || !project) return null;

  const dismiss = () => {
    if (state?.openedCaseStudy) {
      navigate(-1);
      return;
    }

    params.delete('project');
    navigate({ hash, search: params.toString() }, { replace: true });
  };

  return <CaseStudy key={project.slug} project={project} dismiss={dismiss} />;
}
