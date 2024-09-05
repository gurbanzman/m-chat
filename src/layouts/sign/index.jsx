import { ToastContainer } from "react-toastify";
import {
  Associative,
  Button,
  InputText,
  LabelText,
  TitleHead,
} from "../../components/ui/index";

export default function SignPage() {
  return (
    <main className="sign-main">
      <section className="sign-main_section sign--main">
        <header className="sign-main_header">
          <TitleHead className={`sign-header_title`}>Sign Up</TitleHead>
        </header>
        <main className="sign-section_main">
          <form className="sign-section-main_form" method="POST">
            <div className="sign-form_section">
              <div className="sign-form-section_item">
                <LabelText
                  htmlFor={`email`}
                  className={`sign-form-item_head`}
                  text={`Email`}
                />
                <InputText
                  type={`email`}
                  name={`email`}
                  placeholder={`Please, write your email...`}
                  className={`sign-form-item_input`}
                />
              </div>
              <div className="sign-form-section_item">
                <LabelText
                  htmlFor={`password`}
                  className={`sign-form-item_head`}
                  text={`Password`}
                />
                <InputText
                  type={`password`}
                  name={`password`}
                  placeholder={`Please, write your password...`}
                  className={`sign-form-item_input`}
                />
              </div>
              <Associative to={`/register`}>You have not account?</Associative>
            </div>
            <div className="sign-form_btn">
              <Button type={`submit`} className={`btn btn-flex btn-size btn-submit`}>
                Submit
              </Button>
            </div>
          </form>
        </main>
      </section>
      <ToastContainer />
    </main>
  );
}
