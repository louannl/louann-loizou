import { useState, useSyncExternalStore } from 'react';
import { Link } from 'react-router-dom';
import { GlassCard } from '@/components/liquid-glass/glass-card';
import { GlassLayer } from '@/components/liquid-glass/glass-layer';
import SocialLinks from '../components/UI/Links/SocialLinks';
import { Content, Section } from '@/components/UI/Section';
import { projects } from '../data/projects.mjs';

const heroGlass = {
  tintColor: '#122840',
  borderColor: '#a5e7ff',
  borderAlpha: 0.4,
  saturation: 1.25,
};

const specialties = ['Cloud infrastructure', 'CI/CD', 'Observability'];

const stackTags = [...new Set(projects.flatMap(project => project.skills))];
const rowCount = 4;
const stackRows = Array.from({ length: Math.min(rowCount, stackTags.length) }, (_, row) =>
  stackTags.filter((_, index) => index % rowCount === row),
);

const motionPreference = '(prefers-reduced-motion: reduce)';

function subscribeToMotionPreference(onChange) {
  const preference = window.matchMedia(motionPreference);
  preference.addEventListener('change', onChange);
  return () => preference.removeEventListener('change', onChange);
}

function StackBackdrop({ moving }) {
  return (
    <div className="portfolio-hero-backdrop" aria-hidden="true" data-paused={!moving}>
      {stackRows.map(row => (
        <div className="portfolio-stack-row" key={row[0]}>
          {[0, 1].map(copy => (
            <div className="portfolio-stack-group" key={copy}>
              {row.map(tool => <span className="portfolio-stack-chip" key={tool}>{tool}</span>)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

const Hero = () => {
  const [paused, setPaused] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    () => window.matchMedia(motionPreference).matches,
    () => true,
  );
  const moving = stackRows.length > 0 && !paused && !reducedMotion;

  return (
    <Section name="home">
      <Content className="portfolio-hero-content px-5 sm:px-8">
        <div className="portfolio-hero-stage">
          {stackRows.length > 0 && <StackBackdrop moving={moving} />}
          <GlassCard
            className="portfolio-glass portfolio-hero-card rounded-[2rem]"
            tint={0.48}
            blur={0.85}
            live={moving}
            optics={heroGlass}
          >
            <div className="portfolio-hero-copy min-w-0">
              <h1 className="portfolio-hero-name font-scoreboard font-extrabold uppercase">
                Louann Robbins
              </h1>
              <p className="mt-4 text-lg font-semibold text-ice sm:text-2xl">
                Senior Platform Engineer
              </p>
              <ul className="portfolio-specialties mt-5 flex flex-wrap items-center gap-x-4 gap-y-2" aria-label="Specialties">
                {specialties.map(specialty => <li key={specialty}>{specialty}</li>)}
              </ul>
              <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
                <Link to="/#projects" data-glass-host="" className="portfolio-glass-button portfolio-hero-action inline-flex items-center rounded-full px-6 py-3 font-semibold">
                  <GlassLayer material="tinted" />
                  Explore projects
                </Link>
                <SocialLinks grouped />
              </div>
            </div>
            <div className="portfolio-hero-graphic">
              <div className="portfolio-rink" aria-hidden="true">
                <div className="portfolio-rink-center" />
              </div>
              {stackRows.length > 0 && !reducedMotion && (
                <button
                  type="button"
                  className="portfolio-stack-motion"
                  onClick={() => setPaused(value => !value)}
                >
                  {paused ? 'Resume motion' : 'Pause motion'}
                </button>
              )}
            </div>
          </GlassCard>
        </div>
      </Content>
    </Section>
  );
};

export default Hero;
