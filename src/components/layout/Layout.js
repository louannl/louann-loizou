import { Fragment } from 'react';
import Hero from '../../pages/Hero';
import MainNavigation from './MainNavigation';
import Footer from './Footer';
import Career from "../../pages/Career";
import BackToTop from "../UI/Buttons/BackToTop";

const Layout = () => {
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
