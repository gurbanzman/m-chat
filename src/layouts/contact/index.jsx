// import Mega from "../../components/mega";
import admin from "../../assets/images/muro.png";
import Mega from "../../components/layout-components/mega";

export default function ContactPage() {
  
  return (
    <Mega>
      <main className="main">
        <section className="content main-contact between">
          <div className="main-contact_section">
            <h1 className="main-contact_head">
              You are welcome my contact page!
            </h1>
            <p className="main-contact_desc">
              I will see your written messages and I will try back to you.
            </p>
            <a href={"#contact"} className="main-contact_link">
              Let's go!
            </a>
          </div>
          <figure className="main-contact_admin">
            <img src={admin} alt="admin.png" />
          </figure>
        </section>
        <section id="contact" className="main-contact-form_section">
          <form className="sign-section-main_form content">
            <div className="sign-form_section">
              <div className="sign-form-section_item">
                <label htmlFor="email" className="sign-form-item_head">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fname"
                  placeholder="Please, write your full name..."
                  className="sign-form-item_input"
                  required
                />
              </div>
              <div className="sign-form-section_item">
                <label htmlFor="email" className="sign-form-item_head">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Please, write your email..."
                  className="sign-form-item_input"
                  required
                />
              </div>
              <div className="sign-form-section_item">
                <label htmlFor="password" className="sign-form-item_head">
                  Message
                </label>
                <textarea
                  type="textarea"
                  name="textarea"
                  placeholder="Please, write your messages..."
                  className="sign-form-item_input form--message"
                  required
                ></textarea>
              </div>
            </div>
            <div className="sign-form_btn">
              <button type="submit" className="btn btn-flex btn-size">
                Send
              </button>
            </div>
          </form>
        </section>
      </main>
    </Mega>
  );
}
