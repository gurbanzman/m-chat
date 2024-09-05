import {
  Associative,
  Button,
  InputText,
  LabelText,
  TitleHead,
} from "../../components/ui/index";
import { ToastContainer } from "react-toastify";

export default function RegisterPage() {
  return (
    <main className="sign-main">
      <section className="sign-main_section">
        <header className="sign-main_header">
          <TitleHead className={`sign-header_title`}>Register</TitleHead>
        </header>
        <main className="sign-section_main">
          <form className="sign-section-main_form">
            <div className="sign-form_section">
              <div className="sign-form-section_item">
                <LabelText
                  htmlFor={`user_name`}
                  className={`sign-form-item_head`}
                  text={`Name`}
                />
                <InputText
                  type={`text`}
                  name={`user_name`}
                  placeholder={`Please, write your name...`}
                  className={`sign-form-item_input`}
                />
              </div>
              <div className="sign-form-section_item">
                <LabelText
                  htmlFor={`user_surname`}
                  className={`sign-form-item_head`}
                  text={`Surname`}
                />
                <InputText
                  type={`text`}
                  name={`user_surname`}
                  placeholder={`Please, write your surname...`}
                  className={`sign-form-item_input`}
                />
              </div>
              <div className="sign-form-section_item">
                <LabelText
                  htmlFor={`user_username`}
                  className={`sign-form-item_head`}
                  text={`Username`}
                />
                <input
                  type="text"
                  name="user_username"
                  placeholder="Please, write your username..."
                  className="sign-form-item_input"
                  required
                />
              </div>
              <div className="sign-form-section_item">
                <LabelText
                  htmlFor={`user_mail`}
                  className={`sign-form-item_head`}
                  text={`Email`}
                />
                <InputText
                  type={`email`}
                  name={`user_mail`}
                  placeholder={`Please, write your email...`}
                  className={`sign-form-item_input`}
                />
              </div>
              <div className="sign-form-section_item">
                <LabelText
                  htmlFor={`user_password`}
                  className={`sign-form-item_head`}
                  text={`Password`}
                />
                <InputText
                  type={`password`}
                  name={`user_password`}
                  placeholder={`Please, write your password...`}
                  className={`sign-form-item_input`}
                />
              </div>
              <div className="sign-form-section_item">
                <LabelText
                  htmlFor={`repeat_password`}
                  className={`sign-form-item_head`}
                  text={`Repeat Password`}
                />
                <InputText
                  type={`password`}
                  name={`repeat_password`}
                  placeholder={`Please, write your repeat password...`}
                  className={`sign-form-item_input`}
                />
              </div>
              <Associative to={"/"}>You have already account?</Associative>
            </div>
            <div className="sign-form_btn">
              <Button type={`submit`} className={`btn btn-flex btn-size btn-submit`}>
                Submit
              </Button>
              <Button type={`button`} className={`btn btn-flex btn-size btn-github`}>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  data-view-component="true"
                  className="octicon octicon-mark-github v-align-middle color-fg-default"
                >
                  <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                </svg>
                <span className="btn-git">Github</span>
              </Button>
            </div>
          </form>
        </main>
      </section>
      <ToastContainer />
    </main>
  );
}
