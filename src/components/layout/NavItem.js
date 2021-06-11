import tw from '../../helpers/tailwind';

const NavItem = (props) => {
  return (
    <a
      className={tw(
        'block',
        'text-white',
        'font-semibold',
        'px-2 py-1',
        'rounded',
        'sm:ml-2',
        'border-b-2',
        'border-transparent',
        'hover:text-yellow',
        'hover:border-yellow'
      )}
      href={props.link}
    >
      {props.children}
    </a>
  );
};

export default NavItem;
