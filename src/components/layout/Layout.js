import { Fragment } from 'react';
import Hero from '../../pages/Hero';
import Projects from '../../pages/Projects';

import MainNavigation from './MainNavigation';

const Layout = () => {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <Hero />
        <Projects />
      </main>
    </Fragment>
  );
};

export default Layout;
