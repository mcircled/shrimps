import React from 'react'

type Props = {}

function Footer({ }: Props) {
 return (

  <footer className="footer">
   <div className="container">
    <div className="row">
     <div className="col col-12">


      <div className="social">
       <ul className="social__list list-reset">

        <li className="social__item">
         <a className="social__link" href="https://twitter.com" target="_blank" rel="noopener"
          aria-label="twitter icon"><i className="ion ion-logo-twitter"></i></a>
        </li>

        <li className="social__item">
         <a className="social__link" href="https://github.com" target="_blank" rel="noopener"
          aria-label="github icon"><i className="ion ion-logo-github"></i></a>
        </li>

        <li className="social__item">
         <a className="social__link" href="https://pinterest.com" target="_blank" rel="noopener"
          aria-label="pinterest icon"><i className="ion ion-logo-pinterest"></i></a>
        </li>

        <li className="social__item">
         <a className="social__link" href="https://youtube.com" target="_blank" rel="noopener"
          aria-label="youtube icon"><i className="ion ion-logo-youtube"></i></a>
        </li>

       </ul>
      </div>


      <ul className="footer_nav list-reset">

       <li className="footer_nav__item">
        <a href="/" className="footer_nav__link">Home</a>
       </li>

       <li className="footer_nav__item">
        <a href="/projects/" className="footer_nav__link">Projects</a>
       </li>

       <li className="footer_nav__item">
        <a href="/elements/" className="footer_nav__link">Elements</a>
       </li>

       <li className="footer_nav__item">
        <a href="/about/" className="footer_nav__link">About</a>
       </li>

       <li className="footer_nav__item">
        <a href="/blog/" className="footer_nav__link">Blog</a>
       </li>

      </ul>

      <div className="copyright">
       <p> 2021 © <a href="/">shrimps.dev</a>.</p>
      </div>

     </div>
    </div>
   </div>
  </footer>
 )
}

export default Footer
