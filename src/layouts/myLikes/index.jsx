import { Link } from "react-router-dom";
import Mega from "../../components/layout-components/mega";

export default function MyLikePage() {
  return (
    <Mega >
      <main className="main">
        <section className="main-section container">
          <div className="main-section_head">
            <h1 className="main-head_text">Bəyəndiklərim</h1>
          </div>
          <ul className="main-chat_lists main--post">
            <li className="main-chat_posts">
              <ul className="chat-posts between">
                <li className="chat-posts_head">
                  <p className="chat-posts_head_title">M</p>
                  <ul className="chat-posts_user">
                    <li className="chat-posts_user_info">
                      <p className="chat-posts_head_desc">
                        <Link className="chat-posts_head_link">gurbanzman</Link>
                      </p>
                      <p className="chat-posts_head_link chat-posts--time">
                        {new Date().getFullYear()}
                      </p>
                    </li>
                  </ul>
                </li>
                <li className="chat-posts_head">
                  <button type="button" className="icon-plus"></button>
                </li>
              </ul>
              <Link className="chat_posts_title chat--post">Your Title</Link>
              <p className="chat_posts_desc chat--post">Your Posts</p>
              <ul className="post_footer">
                <li className="post-footer_section">
                  <span className="post-count">23</span>
                  <input type="checkbox" name="check" className="post-check" />
                </li>
              </ul>
            </li>
            <li className="main-chat_posts">
              <ul className="chat-posts between">
                <li className="chat-posts_head">
                  <p className="chat-posts_head_title">M</p>
                  <ul className="chat-posts_user">
                    <li className="chat-posts_user_info">
                      <p className="chat-posts_head_desc">
                        <Link className="chat-posts_head_link">gurbanzman</Link>
                      </p>
                      <p className="chat-posts_head_link chat-posts--time">
                        {new Date().getFullYear()}
                      </p>
                    </li>
                  </ul>
                </li>
                <li className="chat-posts_head">
                  <button type="button" className="icon-plus"></button>
                </li>
              </ul>
              <Link className="chat_posts_title chat--post">Your Title</Link>
              <p className="chat_posts_desc chat--post">Your Posts</p>
              <ul className="post_footer">
                <li className="post-footer_section">
                  <span className="post-count">23</span>
                  <input type="checkbox" name="check" className="post-check" />
                </li>
              </ul>
            </li>
            <li className="main-chat_posts">
              <ul className="chat-posts between">
                <li className="chat-posts_head">
                  <p className="chat-posts_head_title">M</p>
                  <ul className="chat-posts_user">
                    <li className="chat-posts_user_info">
                      <p className="chat-posts_head_desc">
                        <Link className="chat-posts_head_link">gurbanzman</Link>
                      </p>
                      <p className="chat-posts_head_link chat-posts--time">
                        {new Date().getFullYear()}
                      </p>
                    </li>
                  </ul>
                </li>
                <li className="chat-posts_head">
                  <button type="button" className="icon-plus"></button>
                </li>
              </ul>
              <Link className="chat_posts_title chat--post">Your Title</Link>
              <p className="chat_posts_desc chat--post">Your Posts</p>
              <ul className="post_footer">
                <li className="post-footer_section">
                  <span className="post-count">23</span>
                  <input type="checkbox" name="check" className="post-check" />
                </li>
              </ul>
            </li>
            <li className="main-chat_posts">
              <ul className="chat-posts between">
                <li className="chat-posts_head">
                  <p className="chat-posts_head_title">M</p>
                  <ul className="chat-posts_user">
                    <li className="chat-posts_user_info">
                      <p className="chat-posts_head_desc">
                        <Link className="chat-posts_head_link">gurbanzman</Link>
                      </p>
                      <p className="chat-posts_head_link chat-posts--time">
                        {new Date().getFullYear()}
                      </p>
                    </li>
                  </ul>
                </li>
                <li className="chat-posts_head">
                  <button type="button" className="icon-plus"></button>
                </li>
              </ul>
              <Link className="chat_posts_title chat--post">Your Title</Link>
              <p className="chat_posts_desc chat--post">Your Posts</p>
              <ul className="post_footer">
                <li className="post-footer_section">
                  <span className="post-count">23</span>
                  <input type="checkbox" name="check" className="post-check" />
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </main>
    </Mega>
  );
}
