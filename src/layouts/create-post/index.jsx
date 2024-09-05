import Mega from "../../components/layout-components/mega";

export default function CreatePostPage() {
  return (
    <Mega>
      <main className="main post-main">
        <section className="post-section">
          <form className="sign-section-main_form content">
            <div className="sign-form_section">
              <div className="sign-form-section_item">
                <label htmlFor="email" className="sign-form-item_head">
                  Post Title
                </label>
                <input
                  type="text"
                  name="postTitle"
                  placeholder="Please, write title..."
                  className="sign-form-item_input"
                  required
                />
              </div>
              <div className="sign-form-section_item post-message">
                <label htmlFor="posts" className="sign-form-item_head">
                  Posts
                </label>
                <pre>
                  <textarea
                    type="textarea"
                    name="postDesc"
                    placeholder="Please, write your posts..."
                    className="sign-form-item_input form--message"
                    required
                  ></textarea>
                </pre>
              </div>
            </div>
            <div className="sign-form_btn">
              <button type="submit" className="btn btn-flex btn-size">
                Post
              </button>
            </div>
          </form>
        </section>
      </main>
    </Mega>
  );
}
