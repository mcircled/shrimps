// import "./hero.scss"

type Props = {
 title: string,
 image: {
  src: string,
  alt: string,
 },
 description: string | JSX.Element,
 cta_button: {
  text: string,
  url: string,
 },
 work_button: {
  text: string,
  url: string,
 }
}

function Hero({ title, description, cta_button, work_button, image }: Props) {
 return (
  <section className="c-hero animate">
   <div className="container">
    <div className="row">
     <div className="col col-12">
      <div className="c-hero__inner">

       <div className="c-hero__left">
        <h1 className="c-hero__title">{title}</h1>
        <div className="c-hero__description">{description}</div>
        <div className="c-hero__btn">
         <a href={cta_button.url} className="cta-button c-button c-button--primary c-button--small">{cta_button.text}</a>
         <a className="works-button c-button c-button--secondary c-button--small" href={work_button.url} >
          <span className="circle-bg"><i className="ion ion-md-arrow-down button-arrow"></i></span> {work_button.text}
         </a>
        </div>
       </div>

       <div className="c-hero__right">
        <div className="c-hero__image">
         <img loading="lazy" src={image.src} alt={image.alt} />
        </div>
       </div>

      </div>
     </div>
    </div>
   </div>
  </section>
 )
}

export default Hero
