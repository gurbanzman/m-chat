import admin from "../../assets/images/muro.png";
import {Mega} from "../../components/layout-components/index";
import {Button, InputText, LabelText, TitleHead} from "../../components/ui/index";

export default function ContactPage() {
  
  return (
    <Mega>
      <main className="main">
        <section className="content main-contact between">
          <div className="main-contact_section">
            <TitleHead className={`main-contact_head`}>You are welcome my contact page!</TitleHead>
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
                <LabelText htmlFor={`fullName`} text={`Tam Adınız`} className={`sign-form-item_head`}/>
                <InputText type={`text`} name={`fname`} placeholder={`Zəhmət olmasa, tam adınızı yazın...`} className={`sign-form-item_input`}/>
              </div>
              <div className="sign-form-section_item">
                <LabelText htmlFor={`email`} className={`sign-form-item_head`} text={`Email`}/>
                <InputText type={`email`} name={`email`} placeholder={`Zəhmət olmasa, email addresinizi yazın...`} className={`sign-form-item_input`}/>
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
              <Button type={`submit`} className={`btn btn-flex btn-size`}>Send</Button>
            </div>
          </form>
        </section>
      </main>
    </Mega>
  );
}
