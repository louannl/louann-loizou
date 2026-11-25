import { AiOutlineMenu } from 'react-icons/ai';

import tw from '../../helpers/tailwind';
import { GlassCard } from '../liquid-glass/glass-card';
import {
  GlassDropdownMenu,
  GlassDropdownMenuContent,
  GlassDropdownMenuItem,
  GlassDropdownMenuTrigger,
} from '../liquid-glass/glass-dropdown-menu';
import NavItem from './NavItem';

const navigationGlass = { tintColor: '#182d46', borderColor: '#a5e7ff' };
const sections = [
  { id: 'home', label: 'Home' },
  { id: 'career', label: 'Career' },
];

const scrollToSection = (id) => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.getElementById(id)?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
};

const MainNavigation = () => {
  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-6">
      <GlassCard
        blur={9}
        tint={0.78}
        optics={navigationGlass}
        className={tw(
          'portfolio-glass portfolio-nav',
          'rounded-3xl',
          'max-w-(--breakpoint-lg)',
          'xl:max-w-(--breakpoint-xl)',
          'mx-auto',
          'sm:flex',
          'sm:justify-between',
          'sm:px-4',
          'sm:py-3',
          'sm:items-center',
          'text-xl'
        )}
      >
        <div className="flex items-center justify-between px-4 py-3 sm:p-0">
          <div className="font-scoreboard text-xl font-bold tracking-[0.08em] uppercase sm:text-2xl">
            Louann Robbins
          </div>
          <div className="sm:hidden">
            <GlassDropdownMenu>
              <GlassDropdownMenuTrigger aria-label="Main navigation" className="portfolio-mobile-menu-trigger">
                <AiOutlineMenu aria-hidden="true" />
              </GlassDropdownMenuTrigger>
              <GlassDropdownMenuContent align="end" className="portfolio-glass-popup portfolio-mobile-menu">
                {sections.map(({ id, label }) => (
                  <GlassDropdownMenuItem key={id} className="portfolio-mobile-menu-item" onSelect={() => scrollToSection(id)}>
                    {label}
                  </GlassDropdownMenuItem>
                ))}
              </GlassDropdownMenuContent>
            </GlassDropdownMenu>
          </div>
        </div>
        <nav
          aria-label="Main navigation"
          className="hidden sm:flex"
        >
          {sections.map(({ id, label }) => <NavItem key={id} link={id}>{label}</NavItem>)}
        </nav>
      </GlassCard>
    </header>
  );
};

export default MainNavigation;
