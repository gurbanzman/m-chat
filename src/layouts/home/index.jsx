import { Link } from "react-router-dom";
import {Mega,Header} from "../../components/layout-components/index";
import { Button, InputText, TitleHead } from "../../components/ui/index";

export default function HomePage() {
  return (
    <Mega>
      <Header head={`Murat`} />
      <main className="main">
        <section className="main-section container">
          <div className="main-section_head">
            <TitleHead className={`main-head_text`}>Postlar</TitleHead>
          </div>
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

        <section className="main-section container">
          <div className="main-section_head">
            <TitleHead className={`main-head_text`}>Sizlər edə bilərsiniz ...</TitleHead>
          </div>
          <ul className="main-section_about">
            <li className="main-section-about_list">
              <p className="main-section-about_head">Like</p>
              <p className="main-section-about_desc">
                Dost-tanışlarınızın, ya da hərhansısa nəfərlərin postlarını
                bəyənə və həmin postu oradaca müzakirə.
              </p>
            </li>
            <li className="main-section-about_list">
              <p className="main-section-about_head">Follow</p>
              <p className="main-section-about_desc">
                Dost-tanışlarınızı, ya da hərhansısa nəfərləri izləmək ya da
                istək göndərmək.
              </p>
            </li>
            <li className="main-section-about_list">
              <p className="main-section-about_head">Contact</p>
              <p className="main-section-about_desc">
                Bizimlə çox rahat əlaqə saxlamaq.
              </p>
            </li>
            <li className="main-section-about_list">
              <p className="main-section-about_head">Account</p>
              <p className="main-section-about_desc">
                Hesabınızda məlumatları əldə etmək, dəyişiklər etmək.
              </p>
            </li>
            <li className="main-section-about_list">
              <p className="main-section-about_head">Post</p>
              <p className="main-section-about_desc">
                Ürəyinizdən keçən mesajları ya da hərhansısa mövzunu post kimi
                paylaşaraq müzakirə etmək.
              </p>
            </li>
            <li className="main-section-about_list">
              <p className="main-section-about_head">Chat</p>
              <p className="main-section-about_desc">
                Dostlarınızla ya da hərhansı insanlarla doyunca söhbət.
              </p>
            </li>
          </ul>
        </section>
      </main>
    </Mega>
  );
}
