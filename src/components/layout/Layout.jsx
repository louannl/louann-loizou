import { useLayoutEffect, useRef } from 'react';
import { Outlet, useLocation, useNavigationType } from 'react-router';
import MainNavigation from './MainNavigation';
import Footer from './Footer';
import BackToTop from "../UI/Buttons/BackToTop";
import CaseStudyDialog from '../../pages/CaseStudyDialog';

const Layout = () => {
  const location = useLocation();
  const previousLocation = useRef(location);
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    const { pathname, hash, search, state } = location;
    const previous = previousLocation.current;
    previousLocation.current = location;

    // Opening and closing a case study changes only the query string.
    if (previous.pathname === pathname && previous.hash === hash && previous.search !== search) return;

    if (navigationType === 'REPLACE' && typeof state?.scrollTop === 'number') {
      window.scrollTo(0, state.scrollTop);
      return;
    }

    const target = hash && document.getElementById(hash.slice(1));
    if (target) {
      target.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [location, navigationType]);

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <CaseStudyDialog />
    </>
  );
};

export default Layout;
