import ProjectCard from "components/project-card/ProjectCard";

type Props = {
  title: string;
  url: string;
  description: string | JSX.Element;
};

function ProjectSection({ title, url, description }: Props) {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="row">
          <div className="col col-12">
            <div className="contaniner__inner animate">
              <div className="section__info">
                <div className="section__head">
                  <h2 className="section__title">{title}</h2>
                  <a className="section__link" href={url}>
                    View all <i className="ion ion-md-arrow-forward"></i>
                  </a>
                </div>
                <div className="section__description">{description}</div>
              </div>

              <div className="row">
                {[
                  {
                    title: "Green Plant",
                    subtitle: "Photography",
                    image: {
                      src: "/images/project-9.jpg",
                      alt: "Green Plant",
                    },
                    url: "/project/green-plant",
                  },
                  {
                    title: "Green Plant",
                    subtitle: "Photography",
                    image: {
                      src: "/images/project-9.jpg",
                      alt: "Green Plant",
                    },
                    url: "/project/green-plant",
                  },
                ].map(({ title, url, image, subtitle }, index) => (
                  <ProjectCard
                    key={index}
                    title={title}
                    url={url}
                    image={{
                      src: image.src,
                      alt: image.alt,
                    }}
                    subtitle={subtitle}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
