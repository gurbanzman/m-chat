import { Link, NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import { InputText } from "../../ui/index";
import Menu from "../../menu";
import CheckBox from "../../ui/checkbox";

export default function Navbar() {
  return (
    <nav className="navbar">
      <section className="navbar-section between container">
        <div className="navbar-section_logo section">
          <Link
            to={`/m/murad`}
            className={`navbar-logo_link ${styles[`logo`]}`}
          >
            M
          </Link>
          <span className={`${styles[`logo-text`]}`}> -Chat</span>
        </div>
        <div className="navbar-section_menu section">
          <form className="navbar-section_search">
            <InputText
              type={`text`}
              name={`user_name`}
              placeholder={`search user...`}
              className={`navbar-search_input`}
            />
          </form>
          <Menu className={`desktop-menu`} />
        </div>
        <div className="responsive-section">
          <CheckBox className={`bar`} />
          <Menu className={`responsive-menu`} />
        </div>
      </section>
    </nav>
  );
}
