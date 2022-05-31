
type Props = {
 title: string,
 url: string,
 image: {
  src: string,
  alt: string,
 }
 subtitle: string | JSX.Element
}

function ProjectCard({ title, url, image, subtitle }: Props) {
 return (
  <article className="c-project-card col col-4 col-d-6 col-t-12">
   <div className="c-project-card__content">
    <a href={url} className="c-project-card__image">
     <img loading="lazy" src={image.src} alt={image.alt} />
    </a>
    <div className="c-project-card__info">
     <div className="c-project-card__info-wrap">
      <h3 className="c-project-card__title">{title}</h3>
     </div>
     <div className="c-project-card__info-wrap">

      <div className="c-project-card__subtitle">{subtitle}</div>

     </div>
    </div>
   </div>
  </article>
 )
}

export default ProjectCard
