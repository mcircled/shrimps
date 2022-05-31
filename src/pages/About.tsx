import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/header";
import Newsletter from "../components/newsletter/Newsletter";

type Props = {};

function About({}: Props) {
  return (
    <>
      <Header />
      <div className="c-page">
        <div className="container">
          <div className="c-page-heading">
            <h1 className="c-page-heading__title">About</h1>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col col-12">
              <div className="c-page-image animate">
                <img
                  loading="lazy"
                  src="/images/avatar.jpg"
                  alt="My best photo"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="page animate">
            <p>
              👋🏻 Hello lovely people! :), I’m Rashid Iqbal, and I code for
              money. I have a passion for learning programming
              concepts/tech/tools etc and explaining them to people in a concise
              manner. OK, that totally sounded like an anonymous code-aholic
              introduction, so let’s start over. I'm Rashid Iqbalfather, coder,
              designer, consultant, trainer, Linux user, and a child forever,
              from Pakistan. I code since mid-2014 and started my career as a
              front-end developer 🪪 by learning the necessary HTML, CSS, and JS.
              I'm passionate about web development, JavaScript and its
              surrounding ecosystem. Lately, I've been working on several
              WordPress projects, experimenting with other programming languages
              like PHP, Java and Kotlin and robotics and home automation using
              Arduino. I help my company ( MountPackt ) create excellent back
              end software so their business runs smooth and secure. For editing
              my code, I use VSCode. I have used it for 5 years now (before
              that, I was a heavy Sublime Text user), and I converted because of
              the awesome Development Environment and Community Support
              (seriously). I appreciate highly this opportunity to be here and
              help all of you.
            </p>
          </div>
        </div>

        <Newsletter
          title={"Join my mailing list"}
          action={
            "//frnla.us6.list-manage.com/subscribe/post?u=6314d69a3f315af7ce3fb00a0&amp;id=3038727cc3"
          }
          button={{
            text: "Subscribe",
          }}
        />
      </div>
      <Footer />
    </>
  );
}

export default About;
