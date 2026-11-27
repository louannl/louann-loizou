import { lazy, Suspense } from 'react';
import { useLocation, useNavigate } from 'react-router';
import AttributeHeader from '../components/UI/Headers/AttributeHeader';
import { Content, Section } from '../components/UI/Section';
import { GlassTabs } from '../components/liquid-glass/glass-tabs';
import Career from './Career';

const Projects = lazy(() => import('./Projects'));

const views = [
  { value: 'projects', label: 'Projects' },
  { value: 'career', label: 'Career' },
];

export default function Portfolio() {
  const { hash } = useLocation();
  const navigate = useNavigate();
  const view = hash === '#projects' ? 'projects' : 'career';

  return (
    <Section name="portfolio">
      <Content className="px-5 sm:px-8">
        <div id={view} className="portfolio-view">
          <div className="portfolio-view-header">
            <AttributeHeader className="text-white">{view === 'career' ? 'Season History' : 'Projects'}</AttributeHeader>
            <GlassTabs
              aria-label="Portfolio view"
              options={views}
              value={view}
              onValueChange={next => navigate({ hash: `#${next}` }, { replace: true, state: { scrollTop: window.scrollY } })}
              className="portfolio-career-tabs"
              highlightClassName="bg-ice"
              size="lg"
            />
          </div>
          {view === 'career' ? <Career /> : (
            <Suspense fallback={<p className="py-5 text-themeLightGrey" role="status">Loading projects…</p>}>
              <Projects />
            </Suspense>
          )}
        </div>
      </Content>
    </Section>
  );
}
