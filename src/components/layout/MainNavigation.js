import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import tw from '../../helpers/tailwind';
import NavItem from './NavItem';

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const iconStyle = 'text-3xl text-white';

  return (
    <header className={tw('fixed', 'bg-blue', 'top-0', 'inset-x-0', 'z-50')}>
      <div
        className={tw(
          'max-w-screen-lg',
          'xl:max-w-screen-xl',
          'mx-auto lg:mx-8 xl:mx-auto',
          'sm:flex',
          'sm:justify-between',
          'sm:px-4',
          'sm:py-3',
          'sm:items-center',
          'text-2xl'
        )}
      >
        <div className="flex items-center justify-between px-4 py-3 sm:p-0">
          <div className="h-8 text-white font-Monoton font-bold">
            Louann Loizou
          </div>
          <div className="sm:hidden">
            <button
              type="button"
              className="block text-white"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <AiOutlineClose className={iconStyle} />
              ) : (
                <AiOutlineMenu className={iconStyle} />
              )}
            </button>
          </div>
        </div>
        <div
          className={`px-2 pt-2 pb-4 ${
            isOpen ? 'block' : 'hidden'
          } sm:flex sm:p-0`}
        >
          <NavItem link="home">Home</NavItem>
          <NavItem link="projects">Projects</NavItem>
          <NavItem link="skills">Skills</NavItem>
          <NavItem link="contact-me">Contact Me!</NavItem>
          <NavItem link="cv">CV</NavItem>
        </div>
      </div>
    </header>
  );
};

export default MainNavigation;
