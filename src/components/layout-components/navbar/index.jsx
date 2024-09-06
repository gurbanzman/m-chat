import { Link, NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import { InputText } from "../../ui/index";

export default function Navbar() {
  return (
    <nav className="navbar">
      <section className="navbar-section between container">
        <div className="navbar-section_logo section">
          <Link to={``} className={`navbar-logo_link ${styles[`logo`]}`}>
            M
          </Link>
          <span className={`${styles[`logo-text`]}`}> -Chat</span>
        </div>
        <div className="navbar-section_menu section">
          <form className="navbar-section_search">
            <InputText type={`text`} name={`user_name`} placeholder={`search user...`} className={`navbar-search_input`}/>
          </form>
          <ul className="navbar-section_lists">
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
        </div>
      </section>
    </nav>
  );
}
