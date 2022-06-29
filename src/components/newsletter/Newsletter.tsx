type Props = {
  title: string;
  action: string;
  button: {
    text: string;
  };
};

function Newsletter({ title, action, button }: Props) {
  return (
    <section className="c-subscribe section">
      <div className="container">
        <div className="row">
          <div className="col col-12">
            <div className="c-subscribe__inner">
              <div className="c-subscribe__info">
                <h3 className="c-subscribe__title">{title}</h3>
                <div className="c-subscribe__subtitle">
                  <span id="ityped"></span>
                </div>
              </div>

              <form
                className="c-subscribe__form validate"
                action={`${action}`}
                method="POST"
                id="membedded-subscribe-form"
                name="membedded-subscribe-form"
                target="_blank"
                noValidate
              >
                <label className="screen-reader-text" htmlFor="mce-EMAIL">
                  Email address
                </label>
                <input
                  className="c-subscribe__form-email required email"
                  id="mce-EMAIL"
                  type="text"
                  name="EMAIL"
                  placeholder="Your email address"
                />
                <button
                  className="c-button c-button--primary c-button--large"
                  id="membedded-subscribe"
                  type="submit"
                  name="subscribe"
                >
                  {button.text}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
