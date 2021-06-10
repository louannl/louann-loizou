const NavItem = (props) => {
  return (
    <li className="text-xl text-white hover:text-yellow">{props.children}</li>
  );
};

export default NavItem;
