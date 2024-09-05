import { Link } from "react-router-dom";
import Mega from "../../components/layout-components/mega";

export default function MyPostPage() {
  return (
    <Mega>
      <main className="main">
        <section className="main-section container">
          <div className="main-section_head">
            <h1 className="main-head_text">Postlar</h1>
          </div>
          <ul className="main-chat_lists main--post">
            <li className="main-chat_posts">
              <ul className="chat-posts between">
                <li className="chat-posts_head">
                  <p className="chat-posts_head_title">asdas</p>
                  <ul className="chat-posts_user">
                    <li className="chat-posts_user_info">
                      <p className="chat-posts_head_desc">
                        <Link className="chat-posts_head_link">asd</Link>
                      </p>
                      <p className="chat-posts_head_link chat-posts--time">
                        23
                      </p>
                    </li>
                  </ul>
                </li>

                <li className="chat-posts_head">
                  <button type="button" className="icon-plus"></button>
                </li>
              </ul>
              <Link className="chat_posts_title chat--post">Title</Link>
              <p className="chat_posts_desc chat--post">Desc</p>
              <ul className="post_footer">
                <li className="post-footer_section">
                  <span className="post-count">23</span>

                  <input type="checkbox" name="check" className="post-check" />
                </li>
              </ul>
            </li>

            <p>Loading...</p>

            <p>You don't have any posts</p>
          </ul>

          <button className="create-btn">
            <Link to={``} className="create-btn_link">
              Öz Postunu Qur
            </Link>
          </button>
        </section>
      </main>
    </Mega>
  );
}
