import ProjectSection from "components/projects-section/ProjectSection";
import Header from "components/header/header";
import Newsletter from "components/newsletter/Newsletter";
import ContactForm from "components/contact-form/ContactForm";
import Footer from "components/footer/Footer";
import TestimonialSection from "components/testimonials-section/TestimonialSection";
import BlogSection from "components/blog-section/BlogSection";
import Hero from "components/hero/hero";
import Content from "components/content/Content";
import DefaultLayout from "layouts/DefaultLayout";

type Props = {};

function Home({}: Props) {
  return (
    <DefaultLayout>
      <Hero
        title={"Hi there, I am Rashid Iqbal"}
        image={{
          src: "/images/01.jpg",
          alt: "Rashid Iqbal",
        }}
        description={
          <p>
            <strong>a CTO </strong> and <strong>an IT Consultant</strong> from
            Pakistan. I work as a consultant, and app development team lead,
            creating apps for a diverse range of requests, from all around the
            world.
          </p>
        }
        cta_button={{
          text: "Get in touch",
          url: "#contact",
        }}
        work_button={{
          text: "See my works",
          url: "projects",
        }}
      />
      <ProjectSection
        title={"Latest Works"}
        url={"/projects"}
        description={
          "I show only my best works built completely with passion, simplicity, and creativity!"
        }
      />
      <TestimonialSection />
      <BlogSection />
      <Newsletter
        title={"Join my mailing list"}
        action={
          "//frnla.us6.list-manage.com/subscribe/post?u=6314d69a3f315af7ce3fb00a0&amp;id=3038727cc3"
        }
        button={{
          text: "Subscribe",
        }}
      />

      <ContactForm
        title={"Get in touch"}
        description={"Vonge comes with a built-in contact form."}
        submission={{
          email: "dev@shrimps.dev",
        }}
        button={{
          text: "Send Now",
        }}
      />
    </DefaultLayout>
  );
}

export default Home;
