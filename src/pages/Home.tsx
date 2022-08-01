import Hero from "components/hero/hero";
import DefaultLayout from "layouts/DefaultLayout";

type Props = {};

function Home({ }: Props) {
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
          text: "Hire me on Contra",
          url: "https://contra.com/rashidiqbal",
        }}

      />


    </DefaultLayout>
  );
}

export default Home;
