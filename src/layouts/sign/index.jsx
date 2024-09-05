import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function SignPage() {
  return (
    <main className="sign-main">
      <section className="sign-main_section">
        <header className="sign-main_header">
          <h1 className="sign-header_title">Sign Up</h1>
        </header>
        <main className="sign-section_main">
          <form
            className="sign-section-main_form"
            method="POST"
          >
            <div className="sign-form_section">
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
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Please, write your password..."
                  className="sign-form-item_input"

                  required
                />
              </div>
              <Link to={"/register"} className="sign-form-section_others">
                {" "}
                You have not account?
              </Link>
            </div>
            <div className="sign-form_btn">
              <button
                type="submit"
                className="btn btn-flex btn-size"
              >
                Submit
              </button>
            </div>
          </form>
        </main>
      </section>
      <ToastContainer />
    </main>
  );
}
