const NavItem = (props) => {
  return (
    <a
      className="block px-2 py-1 text-white font-semibold rounded sm:ml-2 hover:text-yellow"
      href={props.link}
    >
      {props.children}
    </a>
  );
};

export default NavItem;
