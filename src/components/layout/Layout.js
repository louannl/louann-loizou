import { Fragment } from 'react';
import Hero from '../../pages/Hero';
import Projects from '../../pages/Projects';
import Skills from '../../pages/Skills';

import MainNavigation from './MainNavigation';
import Footer from './Footer';

const Layout = () => {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <Hero />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
