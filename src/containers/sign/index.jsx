import { ToastContainer } from "react-toastify";
import {
  Associative,
  Button,
  LabelText,
  TitleHead,
} from "../../components/ui/index";
import { CustomInput } from "../../components/ui/InputText";

export default function SignPage() {
  return (
    <main className="sign-main">
      <section className="sign-main_section sign--main">
        <header className="sign-main_header">
          <TitleHead className={`sign-header_title`}>Sign Up</TitleHead>
        </header>
        <div className="sign-section_main">
          <form className="sign-section-main_form" method="POST">
            <div className="sign-form_section">
              <div className="sign-form-section_item">
                <LabelText
                  htmlFor={`email`}
                  className={`sign-form-item_head`}
                  text={`Email`}
                />
                <CustomInput
                  type={`email`}
                  name={`email`}
                  placeholder={`emailinizi`}
                  className={`sign-form-item_input`}
                />
              </div>
              <div className="sign-form-section_item">
                <LabelText
                  htmlFor={`password`}
                  className={`sign-form-item_head`}
                  text={`Parola`}
                />
                <CustomInput
                  type={`password`}
                  name={`password`}
                  placeholder={`parolanızı`}
                  className={`sign-form-item_input`}
                />
              </div>
              <Associative to={`/register`}>Hesabınız yoxdur?</Associative>
            </div>
            <div className="sign-form_btn">
              <Button type={`submit`} className={`btn btn-flex btn-size btn-submit`}>
                Keç
              </Button>
            </div>
          </form>
        </div>
      </section>
      <ToastContainer />
    </main>
  );
}
