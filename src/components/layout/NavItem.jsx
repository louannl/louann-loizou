import { Link } from 'react-scroll';
import tw from '../../helpers/tailwind';

const NavItem = (props) => {
  return (
    <Link
      className={tw(
        'block',
        'cursor-pointer',
        'rounded-full px-4 py-2',
        'text-base font-semibold',
        'transition-colors',
        'hover:bg-white/10'
      )}
      activeClass="portfolio-nav-active"
      href={`#${props.link}`}
      spy={true}
      to={props.link}
      offset={props.link === 'career' ? -96 : 0}
      smooth={true}
    >
      {props.children}
    </Link>
  );
};

export default NavItem;
