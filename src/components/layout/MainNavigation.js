import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import tw from '../../helpers/tailwind';
import { GlassCard } from '../liquid-glass/glass-card';
import NavItem from './NavItem';

const navigationGlass = { tintColor: '#23334a' };

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const iconStyle = 'text-2xl';

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-6">
      <GlassCard
        blur={9}
        tint={0.78}
        optics={navigationGlass}
        className={tw(
          'portfolio-glass portfolio-nav',
          'rounded-3xl',
          'max-w-screen-lg',
          'xl:max-w-screen-xl',
          'mx-auto',
          'sm:flex',
          'sm:justify-between',
          'sm:px-4',
          'sm:py-3',
          'sm:items-center',
          'text-xl'
        )}
      >
        <div className="flex items-center justify-between px-4 py-3 sm:p-0">
          <div className="font-Monoton text-base font-bold sm:text-lg">
            Louann Robbins
          </div>
          <div className="sm:hidden">
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full hover:bg-white/10"
              onClick={toggleMenu}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="main-navigation"
            >
              {isOpen ? (
                <AiOutlineClose className={iconStyle} aria-hidden="true" />
              ) : (
                <AiOutlineMenu className={iconStyle} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={`px-2 pt-2 pb-4 ${
            isOpen ? 'block' : 'hidden'
          } sm:flex sm:p-0`}
        >
          <NavItem link="home" onClick={() => setIsOpen(false)}>Home</NavItem>
          <NavItem link="career" onClick={() => setIsOpen(false)}>Career</NavItem>
        </nav>
      </GlassCard>
    </header>
  );
};

export default MainNavigation;
