import React from 'react'
import TestimonialCard from '../testimonial-card/TestimonialCard';

type Props = {}

function TestimonialSection({ }: Props) {
 return (
  <section className="section testimonials animate">
   <div className="container">
    <div className="row">
     <div className="col col-12">

      <div className="section__info">
       <div className="section__head">
        <h2 className="section__title">Happy Clients</h2>
        <ul className="controls list-reset" id="customize-controls" aria-label="Carousel Navigation" tabIndex={0}>
         <li className="prev" data-controls="prev" aria-controls="tns1" tabIndex={-1}>
          <i className="ion ion-ios-arrow-back"></i>
         </li>
         <li className="next" data-controls="next" aria-controls="tns1" tabIndex={-1}>
          <i className="ion ion-ios-arrow-forward"></i>
         </li>
        </ul>
       </div>
       <div className="section__description"></div>
      </div>


      <div className="tns-outer" id="tns1-ow">
       <div className="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span
        className="current">7 to 8</span> of 4</div>
       <div id="tns1-mw" className="tns-ovh">
        <div className="tns-inner" id="tns1-iw">
         <div
          className="testimonials__slider my-slider  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
          id="tns1" style={{ transitionDuration: "0s", transform: "translate3d(-37.5 %, 0px, 0px)" }}>

          <TestimonialCard title={'Justin Baptista'} image={{
           src: 'images/client-1.jpg',
           alt: 'Justin Baptista'
          }} job={'Copywriter'} review={'Quamquam id quidem, infinitum est in hac urbe, Ita   multo sanguine profuso in laetitia et in victoria est mortuus. Atqui pugnantibus et contrariis studiis semper.'} />

          <TestimonialCard title={'Justin Baptista'} image={{
           src: 'images/client-1.jpg',
           alt: 'Justin Baptista'
          }} job={'Copywriter'} review={'Quamquam id quidem, infinitum est in hac urbe, Ita   multo sanguine profuso in laetitia et in victoria est mortuus. Atqui pugnantibus et contrariis studiis semper.'} />

          <TestimonialCard title={'Justin Baptista'} image={{
           src: 'images/client-1.jpg',
           alt: 'Justin Baptista'
          }} job={'Copywriter'} review={'Quamquam id quidem, infinitum est in hac urbe, Ita   multo sanguine profuso in laetitia et in victoria est mortuus. Atqui pugnantibus et contrariis studiis semper.'} />


         </div>
        </div>
       </div>
      </div>


     </div>
    </div>
   </div>
  </section>

 )
}

export default TestimonialSection
