import { Fragment } from 'react';
import Hero from '../../pages/Hero';
import Projects from '../../pages/Projects';
import Skills from '../../pages/Skills';
import ContactMe from '../../pages/ContactMe';
import Cv from '../../pages/Cv';

import MainNavigation from './MainNavigation';

const Layout = () => {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <ContactMe />
        <Cv />
      </main>
    </Fragment>
  );
};

export default Layout;
