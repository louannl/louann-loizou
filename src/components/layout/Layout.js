import { Fragment } from 'react';
import Hero from '../../pages/Hero';
import Projects from '../../pages/Projects';
import Skills from '../../pages/Skills';

import MainNavigation from './MainNavigation';

const Layout = () => {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <Hero />
        <Projects />
        <Skills />
      </main>
    </Fragment>
  );
};

export default Layout;
