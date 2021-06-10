import { NavLink } from 'react-router-dom';
import NavItem from './NavItem';

const MainNavigation = () => {
  return (
    <header className="bg-blue">
      <nav className="flex mb-4 p-6">
        <div className="w-1/4 text-white text-2xl">Louann Loizou</div>
        <ul className="w-3/4 flex justify-evenly content-end list-none">
          <NavItem>
            <NavLink to="/projects">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/skills">Skills</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact-me">Contact Me!</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/cv">CV</NavLink>
          </NavItem>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
