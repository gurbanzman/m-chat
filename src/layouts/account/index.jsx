import { Link } from "react-router-dom";
import logo from "../../assets/images/user-logo.png";
import Mega from "../../components/layout-components/mega";

export default function AccountPage() {
  return (
    <Mega>
      <main className="main account">
        <section className="half account-section">
          <div className="account-section_head">
            <div className="account-head_info">
              <div className="account-info_logo">
                <figure className="account-logo">
                  <img src={logo} alt="user-logo.png" />
                </figure>

                <Link className="account-edit">Profilini düzənlə</Link>
              </div>
              <ul className="account-info_text">
                <li className="account-info_head">Murad Gurbanzada</li>
                <li className="account-info_desc">gurbanzman</li>
              </ul>
            </div>
          </div>
          <ul className="account-user_section">
            <li className="account-user_option">
              <span className="account-user_count">0</span>
              <span className="account-user_desc">Followers</span>
            </li>
            <li className="account-user_option">
              <span className="account-user_count">0</span>
              <span className="account-user_desc">Following</span>
            </li>
            <li className="account-user_option">
              <span className="account-user_count">0</span>
              <span className="account-user_desc">Posts</span>
            </li>
          </ul>
          <div className="others_section">
            <ul className="others">
              <li className="others-lists">
                <button className="others-lists_btn">
                  <Link className="others-lists_link">Bəyənənlər</Link>
                </button>
              </li>
              <li className="others-lists">
                <button className="others-lists_btn">
                  <Link to={``} className="others-lists_link">
                    Postlar
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </Mega>
  );
}
