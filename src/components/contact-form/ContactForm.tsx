import Button from "components/button/Button";

type Props = {
  title: string;
  description: string | JSX.Element;
  submission: {
    email: string;
  };
  button: {
    text: string;
  };
};

function ContactForm({ title, description, submission, button }: Props) {
  return (
    <div className="c-contact-form" id="contact">
      <div className="container">
        <div className="row">
          <div className="col col-12">
            <div className="c-contact-form__form-box">
              <div className="c-contact-form__contact-head">
                <h2 className="c-contact-form__contact-title">{title}</h2>
                <p className="c-contact-form__contact-description">
                  {description}
                </p>
              </div>
              <form
                className="c-contact-form__form"
                action="{success_page}"
                method="POST"
              >
                <input type="hidden" name="_to" value={submission.email} />
                <div className="c-contact-form__form-group">
                  <label
                    className="c-contact-form__form-label screen-reader-text"
                    htmlFor="form-name"
                  >
                    Your Name
                  </label>
                  <input
                    className="c-contact-form__form-input"
                    id="form-name"
                    type="text"
                    name="name"
                    placeholder="Your name..."
                    required
                  />
                </div>
                <div className="c-contact-form__form-group">
                  <label
                    className="c-contact-form__form-label screen-reader-text"
                    htmlFor="form-email"
                  >
                    Your Email
                  </label>
                  <input
                    className="c-contact-form__form-input"
                    id="form-email"
                    type="email"
                    name="_replyto"
                    placeholder="Your email..."
                    required
                  />
                </div>
                <div className="c-contact-form__form-group">
                  <label
                    className="c-contact-form__form-label screen-reader-text"
                    htmlFor="form-text"
                  >
                    Your Message
                  </label>
                  <textarea
                    className="c-contact-form__form-input"
                    id="form-text"
                    name="text"
                    rows={9}
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
                <div className="c-contact-form__form-group c-contact-form__form-group--button">
                  <Button onClick={(e: any) => {}}>{button.text}</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
