import { GlassCard } from '../components/liquid-glass/glass-card';
import { GlassLayer } from '../components/liquid-glass/glass-layer';
import SocialLinks from '../components/UI/Links/SocialLinks';
import { Content, Section } from '../components/UI/Section';

const heroGlass = {
  tintColor: '#122840',
  borderColor: '#a5e7ff',
  borderAlpha: 0.4,
  saturation: 1.25,
};

const specialties = ['Cloud infrastructure', 'CI/CD', 'Observability'];

const Hero = () => {
  return (
    <Section name="home">
      <Content className="portfolio-hero-content px-5 sm:px-8">
        <GlassCard
          className="portfolio-glass portfolio-hero-card rounded-[2rem]"
          tint={0.66}
          blur={8}
          optics={heroGlass}
        >
          <div className="min-w-0">
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
              <a href="#career" data-glass-host="" className="portfolio-glass-button portfolio-hero-action inline-flex items-center rounded-full px-6 py-3 font-semibold">
                <GlassLayer material="tinted" />
                Career
              </a>
              <SocialLinks grouped />
            </div>
          </div>
          <div className="portfolio-hero-graphic" aria-hidden="true">
            <div className="portfolio-rink">
              <div className="portfolio-rink-center" />
            </div>
          </div>
        </GlassCard>
      </Content>
    </Section>
  );
};

export default Hero;
