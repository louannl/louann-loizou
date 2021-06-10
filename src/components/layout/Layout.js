import { Fragment } from 'react';
import Hero from '../../pages/Hero';
import Projects from '../../pages/Projects';

import MainNavigation from './MainNavigation';

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <Hero />
        <Projects />
      </main>
    </Fragment>
  );
};

export default Layout;
