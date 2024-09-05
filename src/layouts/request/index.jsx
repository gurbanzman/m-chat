import { Link } from "react-router-dom";
import Mega from "../../components/layout-components/mega";

export default function RequestPage() {
  return (
    <Mega>
      <main className="main">
        <section className="half half-section">
          <div className="half-container">
            <h1 className="main-head_text">İstəklər</h1>
            <ul className="half-lists">
              <li className="half-option">
                <ul className="half-option_lists between">
                  <li className="half-option_lists_head">
                    <ul className="half-option_users">
                      <li className="half-option-user_head">
                        <p className="half-option-user_desc">
                          <Link to={``}>sad</Link>
                          <span>sənə follov göndərdi</span>
                        </p>
                        <span className="half-date">sdxas</span>
                      </li>
                    </ul>
                  </li>
                  <li className="half-post">
                    <>
                      <button type="button" className="half-btn">
                        Qəbul et
                      </button>
                      <button type="button" className="half-btn">
                        Rədd et
                      </button>
                    </>

                    <button type="button" className="half-btn">
                      Uğurla qeyd edildi
                    </button>
                  </li>
                </ul>
              </li>

              <p className="notification">
                <span className="icon-hourglass-1"></span>Heç bir İstək yoxdur
              </p>
            </ul>
          </div>
        </section>
      </main>
    </Mega>
  );
}
