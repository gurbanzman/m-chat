import { Link } from "react-router-dom";
import Mega from "../../components/layout-components/mega";

export default function NotificationPage() {
  return (
    <Mega>
      <main className="main">
        <section className="half half-section">
          <div className="half-container">
            <h1 className="main-head_text">Bildirişlər</h1>

            <Link to={``} className="half-request">
              <p className="request-back"></p>
              <ul className="request-container">
                <li className="request-head">İstəklər</li>
                <li className="request-desc">
                  <ul className="request-users_list">
                    <li className="request-users">asd</li>
                  </ul>
                </li>
              </ul>
            </Link>

            <ul className="half-lists">
              <li className="half-option">
                <ul className="half-option_lists between">
                  <li className="half-option_lists_head">
                    <ul className="half-option_users">
                      <li className="half-option-user_head">
                        <p className="half-option-user_desc">
                          <Link to={``}>ddasd</Link>
                          <span>liked your post</span>
                        </p>
                        <span className="half-date">sad</span>
                      </li>
                    </ul>
                  </li>
                  <li className="half-post">
                    <Link to={``} className="icon-link"></Link>
                  </li>
                </ul>
              </li>

              <p className="notification">
                <span className="icon-hourglass-1"></span>Heç bir bildiriş
                yoxdur
              </p>
            </ul>
          </div>
        </section>
      </main>
    </Mega>
  );
}
