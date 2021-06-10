import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
  return (
    <NavLink
      className="block px-2 py-1 text-white font-semibold rounded sm:ml-2"
      to={props.link}
    >
      {props.children}
    </NavLink>
  );
};

export default NavItem;
