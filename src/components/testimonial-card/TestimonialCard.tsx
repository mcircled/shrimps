
type Props = {
 title: string,
 image: {
  src: string,
  alt: string,
 },
 job: string,
 review: string | JSX.Element
}

function TestimonialCard({ title, image, job, review }: Props) {
 return (
  <div className="c-testimonial-card">
   <div className="c-testimonial-card__content">
    <div className="c-testimonial-card__client-meta">
     <div className="c-testimonial-card__image-container">
      <img className="c-testimonial-card__client-avatar" src={image.src} alt={image.alt} />
     </div>
     <div className="c-testimonial-card__client-info">
      <h3 className="c-testimonial-card__client-name">{title}</h3>
      <p className="c-testimonial-card__client-position">{job}</p>
     </div>
    </div>
    <p className="c-testimonial-card__client-text">{review}</p>
   </div>
  </div>
 )
}

export default TestimonialCard
