import { Link, NavLink} from "react-router-dom";
import Mega from "../../components/layout-components/mega";

export default function ChattingPage() {
  return (
    <Mega>
      <main className="main chat">
        <section className="content chat-section">
          <ul className="chat-users_lists">
            <li className="chat-user_container chat--option">
              <ul className="chat-user">
                <li className="chat-user_option">
                  <NavLink className={`chat-user_head`}>
                    <div className="user-option">
                      <span className="user-option_head"> sad</span>
                      <span className="chat-user_latest_mes">
                        {" "}
                        One more time{" "}
                      </span>
                      <span className="chat-user_latest_date">Jan 05</span>
                    </div>
                  </NavLink>
                </li>

                <p>Sizin chat bölümü boşdur</p>
              </ul>
              <form className="chat-user_search_form">
                <input
                  type="text"
                  name="user"
                  placeholder="New chat..."
                  className="chat-search_input"
                />
                <button type="submit" className="icon-plus"></button>
              </form>

              <ul className="chat-search_user">
                <li className="search-user_option">
                  <Link className="search-user_head">asd</Link>
                  <button type="button" className="icon-clear-close"></button>
                </li>
              </ul>
            </li>
            <li className="chat-message_container chat--option">
              <ul className="chat-message_title">
                <li className="chat-message_list">
                  <Link className="chat-message_head">Example chat</Link>
                </li>
                <li className="chat-message_date">
                  {new Date().toISOString()}
                </li>
              </ul>
              <ul className="chat-message_body">
                <li className="chat-message_body_section">
                  <ul className="chat-message_body_user">
                    <li className={`chat-body_user right`}>
                      <ul className="chat-body_user_block">
                        <li className="chat-body_user_head">
                          <Link className="chat-body_user_link">M</Link>
                        </li>
                        <li className="chat-body_message_section">
                          <span className="chat-body-message_head">sad</span>
                          <p className="chat-body-message_desc">asd</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="chat-send_message_form">
                <input
                  type="text"
                  name="text"
                  className="chat-send_message_input"
                  placeholder="write something..."
                />
                <button type="submit" className="icon-chevron-thin-up"></button>
              </form>
            </li>
          </ul>
        </section>
      </main>
    </Mega>
  );
}
