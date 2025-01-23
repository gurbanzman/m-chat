import {
  Associative,
  Button,
  LabelText,
  TitleHead,
} from "../../components/ui/index";
import { ToastContainer } from "react-toastify";
import { CustomInput } from "../../components/ui/InputText";

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
                  text={`Ad`}
                />
                <CustomInput
                  text="text"
                  name={`user_name`}
                  placeholder={`adınızı`}
                />
              </div>
              <div className="sign-form-section_item">
                <LabelText
                  htmlFor={`user_surname`}
                  className={`sign-form-item_head`}
                  text={`Soyad`}
                />
                <CustomInput
                  text="text"
                  name={`user_surname`}
                  placeholder={`soyadınızı`}
                />
                <TitleHead className={'error-msg'}>error</TitleHead>
              </div>
              <div className="sign-form-section_item">
                <LabelText
                  htmlFor={`user_username`}
                  className={`sign-form-item_head`}
                  text={`Ləqəb`}
                />
                <CustomInput
                  text="text"
                  name={`user_username`}
                  placeholder={`ləqəbinizi`}
                />
              </div>
              <div className="sign-form-section_item">
                <LabelText
                  htmlFor={`user_mail`}
                  className={`sign-form-item_head`}
                  text={`Email`}
                />
                <CustomInput
                  text="mail"
                  name={`user_mail`}
                  placeholder={`emailinizi`}
                />
              </div>
              <div className="sign-form-section_item">
                <LabelText
                  htmlFor={`user_password`}
                  className={`sign-form-item_head`}
                  text={`Parola`}
                />
                <CustomInput
                  text="pass"
                  name={`user_password`}
                  placeholder={`parolanızı`}
                />
              </div>
              <div className="sign-form-section_item">
                <LabelText
                  htmlFor={`repeat_password`}
                  className={`sign-form-item_head`}
                  text={`Təkrardan Parola`}
                />
                <CustomInput
                  text="pass"
                  name={`user_repeat_password`}
                  placeholder={`təkrardan parolanızı`}
                />
              </div>
              <div className="sign-form-section_item">
                <LabelText
                  htmlFor={`isPrivate`}
                  className={`sign-form-item_head`}
                  text={`Hesabın Statusu`}
                />
                <select name="isPrivate" className="sign-form-item_input">
                  <option value="">Gizli</option>
                  <option value="">Açıq</option>
                </select>
              </div>
              <Associative to={"/"}>Hesabınız hal-hazırda var?</Associative>
            </div>
            <div className="sign-form_btn">
              <Button
                type={`submit`}
                className={`btn btn-flex btn-size btn-submit`}
              >
                Qur
              </Button>
              <div className="react-clerk"></div>
            </div>
          </form>
        </main>
      </section>
      <ToastContainer />
    </main>
  );
}
