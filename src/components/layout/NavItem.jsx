import { Link, useLocation } from 'react-router-dom';
import tw from '../../helpers/tailwind';

const NavItem = ({ href, children }) => {
  const { pathname, hash } = useLocation();
  const current = pathname === '/' && href === `/${hash || '#home'}`;

  return (
    <Link
      className={tw(
        'block',
        'cursor-pointer',
        'rounded-full px-4 py-2',
        'text-base font-semibold',
        'transition-colors',
        'hover:bg-white/10',
        current && 'portfolio-nav-active'
      )}
      to={href}
      aria-current={current ? 'location' : undefined}
    >
      {children}
    </Link>
  );
};

export default NavItem;
