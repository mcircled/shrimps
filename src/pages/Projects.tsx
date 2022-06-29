import Header from "components/header/header";
import ProjectSection from "components/projects-section/ProjectSection";
import Newsletter from "components/newsletter/Newsletter";
import ContactForm from "components/contact-form/ContactForm";
import Footer from "components/footer/Footer";
import TestimonialSection from "components/testimonials-section/TestimonialSection";
import BlogSection from "components/blog-section/BlogSection";
import Hero from "components/hero/hero";
import PostList from "components/projects-list/ProjectList";
import ProjectList from "components/projects-list/ProjectList";
import DefaultLayout from "layouts/DefaultLayout";
type Props = {};

function Projects({}: Props) {
  return (
    <DefaultLayout>
      <ProjectList />
      <Footer />
    </DefaultLayout>
  );
}

export default Projects;
