import { Link, NavLink } from "react-router-dom";
import styles from "./styles.module.css";

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
            <label htmlFor="search" className="navbar-search_head">
              <input
                type="text"
                name="user_name"
                placeholder="search user..."
                className="navbar-search_input"
                required
              />
            </label>
          </form>

          <ul className="navbar-search_lists">
            <li className="navbar-search_lists_head">
              <Link to={``} className="navbar-search_user_link">
                <p className="navbar-search_user_head">wasd</p>
                <p className="navbar-search_user_info">
                  <span className="navbar-search_user_name user--fullname">
                    Murad Gurbanzada
                  </span>
                  <span className="navbar-search_user_name user--username">
                    sadad
                  </span>
                </p>
              </Link>
            </li>
          </ul>

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
