import { Link } from "react-router-dom";
import Mega from "../../components/layout-components/mega";
import { Button, InputText} from "../../components/ui";
export default function MyPostPage() {
  return (
    <Mega>
      <main className="main">
      <section className="main-section container">
          <ul className="main-chat_lists">
            <li className="main-chat_posts">
              <ul className="chat-posts between">
                <li className="chat-posts_head">
                  <p className="chat-posts_head_title">M</p>
                  <ul className="chat-posts_user">
                    <li className="chat-posts_user_info">
                      <p className="chat-posts_head_desc">
                        <Link className="chat-posts_head_link">sadsd</Link>
                      </p>
                      <p className="chat-posts_head_link chat-posts--time">
                        sdas
                      </p>
                    </li>
                  </ul>
                </li>
                <li className="chat-posts_head">
                  <Button type={`button`} className={`icon-plus`}></Button>
                </li>
              </ul>
              <Link className="chat_posts_title chat--post">asd</Link>
              <p className="chat_posts_desc chat--post">sad</p>
              <ul className="post_footer">
                <li className="post-footer_section">
                  <span className="post-count">23</span>
                  <InputText type={`checkbox`} name={`check`} className={`post-check`}/>
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
                        <Link className="chat-posts_head_link">sadsd</Link>
                      </p>
                      <p className="chat-posts_head_link chat-posts--time">
                        sdas
                      </p>
                    </li>
                  </ul>
                </li>
                <li className="chat-posts_head">
                  <Button type={`button`} className={`icon-plus`}></Button>
                </li>
              </ul>
              <Link className="chat_posts_title chat--post">asd</Link>
              <p className="chat_posts_desc chat--post">sad</p>
              <ul className="post_footer">
                <li className="post-footer_section">
                  <span className="post-count">23</span>
                  <InputText type={`checkbox`} name={`check`} className={`post-check`}/>
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
                        <Link className="chat-posts_head_link">sadsd</Link>
                      </p>
                      <p className="chat-posts_head_link chat-posts--time">
                        sdas
                      </p>
                    </li>
                  </ul>
                </li>
                <li className="chat-posts_head">
                  <Button type={`button`} className={`icon-plus`}></Button>
                </li>
              </ul>
              <Link className="chat_posts_title chat--post">asd</Link>
              <p className="chat_posts_desc chat--post">sad</p>
              <ul className="post_footer">
                <li className="post-footer_section">
                  <span className="post-count">23</span>
                  <InputText type={`checkbox`} name={`check`} className={`post-check`}/>
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </main>
    </Mega>
  );
}
