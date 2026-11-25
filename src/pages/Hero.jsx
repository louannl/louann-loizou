import { GlassCard } from '../components/liquid-glass/glass-card';
import { GlassLayer } from '../components/liquid-glass/glass-layer';
import SocialLinks from '../components/UI/Links/SocialLinks';
import { Content, Section } from '../components/UI/Section';

const Hero = () => {
  return (
    <Section name="home">
      <Content className="portfolio-hero-content px-5 sm:px-8">
        <GlassCard className="portfolio-glass portfolio-hero-card rounded-[2rem]">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Louann Robbins
          </h1>
          <p className="mt-3 text-xl font-medium opacity-80 sm:text-3xl">
            Senior Platform Engineer
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5 lg:justify-start">
            <a href="#career" data-glass-host="" className="portfolio-glass-button inline-flex items-center rounded-full px-6 py-3 font-semibold">
              <GlassLayer material="tinted" />
              Career
            </a>
            <SocialLinks grouped />
          </div>
        </GlassCard>
      </Content>
    </Section>
  );
};

export default Hero;
