import { Fragment, useEffect } from 'react';
import Hero from '../../pages/Hero';
import MainNavigation from './MainNavigation';
import Footer from './Footer';
import Career from "../../pages/Career";
import BackToTop from "../UI/Buttons/BackToTop";

const Layout = () => {
  useEffect(() => {
    // React renders the section after the browser's first attempt at fragment navigation.
    if (window.location.hash === '#career') {
      document.getElementById('career')?.scrollIntoView();
    }
  }, []);

  return (
    <Fragment>
      <MainNavigation />
      <main>
        <Hero />
        <Career />
      </main>
      <Footer />
      <BackToTop />
    </Fragment>
  );
};

export default Layout;
