import { useState } from 'react';
import { MenuOutline, CloseOutline } from 'react-ionicons';

import NavItem from './NavItem';

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header className="bg-blue sm:flex sm:justify-between fixed top-0 inset-x-0 z-100 sm:px-4 sm:py-3 sm:items-center">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div className="h-8 text-white text-2xl font-Monoton font-thin">
          Louann Loizou
        </div>
        <div className="sm:hidden">
          <button
            type="button"
            className="block text-white"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <CloseOutline color="white" height="1.5rem" width="1.5rem" />
            ) : (
              <MenuOutline color="white" height="1.5rem" width="1.5rem" />
            )}
          </button>
        </div>
      </div>
      <div
        className={`px-2 pt-2 pb-4 ${
          isOpen ? 'block' : 'hidden'
        } sm:flex sm:p-0`}
      >
        <NavItem link="#projects">Projects</NavItem>
        <NavItem link="#skills">Skills</NavItem>
        <NavItem link="#contact-me">Contact me!</NavItem>
        <NavItem link="#cv">CV</NavItem>
      </div>
    </header>
  );
};

export default MainNavigation;
