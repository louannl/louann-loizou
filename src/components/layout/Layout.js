import { Fragment } from 'react';
import Hero from '../../pages/Hero';
import Projects from '../../pages/Projects';
import Skills from '../../pages/Skills';

import MainNavigation from './MainNavigation';
import Footer from './Footer';
import Career from "../../pages/Career";

const Layout = () => {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <Hero />
        <Career />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
