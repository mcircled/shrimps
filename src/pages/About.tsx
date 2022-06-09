import Content from "components/content/Content";
import PageHeading from "components/page-heading/PageHeading";
import PageImage from "components/page-image/PageImage";
import DefaultLayout from "layouts/DefaultLayout";
import Newsletter from "components/newsletter/Newsletter";

type Props = {};

function About({}: Props) {
  return (
    <DefaultLayout>
      <PageHeading title="About" description={""} />
      <PageImage src="/images/avatar.jpg" alt="My best photo" />
      <Content>
        <p>
          👋🏻 Hello lovely people! :), I’m Rashid Iqbal, and I code for money. I
          have a passion for learning programming concepts/tech/tools etc and
          explaining them to people in a concise manner. OK, that totally
          sounded like an anonymous code-aholic introduction, so let’s start
          over. I'm Rashid Iqbalfather, coder, designer, consultant, trainer,
          Linux user, and a child forever, from Pakistan. I code since mid-2014
          and started my career as a front-end developer 🪪 by learning the
          necessary HTML, CSS, and JS. I'm passionate about web development,
          JavaScript and its surrounding ecosystem. Lately, I've been working on
          several WordPress projects, experimenting with other programming
          languages like PHP, Java and Kotlin and robotics and home automation
          using Arduino. I help my company ( MountPackt ) create excellent back
          end software so their business runs smooth and secure. For editing my
          code, I use VSCode. I have used it for 5 years now (before that, I was
          a heavy Sublime Text user), and I converted because of the awesome
          Development Environment and Community Support (seriously). I
          appreciate highly this opportunity to be here and help all of you.
        </p>
      </Content>

      <Newsletter
        title={"Join my mailing list"}
        action={
          "//frnla.us6.list-manage.com/subscribe/post?u=6314d69a3f315af7ce3fb00a0&amp;id=3038727cc3"
        }
        button={{
          text: "Subscribe",
        }}
      />
    </DefaultLayout>
  );
}

export default About;
