import { Link } from 'react-scroll';
import tw from '../../helpers/tailwind';

const NavItem = (props) => {
  return (
    <Link
      className={tw(
        'block',
        'cursor-pointer',
        'px-2 py-1',
        'sm:ml-2',
        'border-b-2',
        'border-transparent',
        'text-white',
        'transform duration-500',
        'hover:text-themeDarkGrey',
        'hover:border-themeDarkGrey'
      )}
      activeClass="text-themeDarkGrey, border-themeDarkGrey"
      spy={true}
      to={props.link}
      smooth={true}
    >
      {props.children}
    </Link>
  );
};

export default NavItem;
