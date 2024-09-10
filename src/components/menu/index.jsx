import { NavLink } from "react-router-dom";

const Menu = ({className}) => {
  return (
    <ul className={`navbar-section_lists ${className}`}>
      <li className="navbar-lists_option">
        <NavLink
          to={`/contact/qeqü`}
          className="navbar-option_link icon-call"
        ></NavLink>
      </li>
      <li className="navbar-lists_option">
        <NavLink
          to={`/notification/qeqü`}
          className="navbar-option_link icon-heart-o"
        ></NavLink>
      </li>
      <li className="navbar-lists_option">
        <NavLink
          to={`/chat/12`}
          className="navbar-option_link icon-send"
        ></NavLink>
      </li>
      <li className="navbar-lists_option">
        <NavLink
          to={`/account/12`}
          className="navbar-option_link icon-user"
        ></NavLink>
      </li>
    </ul>
  );
};

export default Menu;
