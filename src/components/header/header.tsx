import { Link } from "react-router-dom";

type Props = {};

function Header({}: Props) {
  return (
    <header className="c-header">
      <div className="container">
        <div className="row">
          <div className="c-header__inner">
            <div className="logo">
              <a className="logo__link" href="/">
                🦐
              </a>
            </div>

            <nav className="main-nav">
              <div className="main-nav__box">
                <div className="nav__icon-close">
                  <i className="ion ion-md-close"></i>
                </div>

                <div className="nav__title">Menu</div>

                <ul className="nav__list list-reset">
                  <li className="nav__item">
                    <Link to={"/"} className="nav__link">
                      Home
                    </Link>
                  </li>

                  <li className="nav__item">
                    <Link to={"/projects"} className="nav__link">
                      Projects
                    </Link>
                  </li>

                  <li className="nav__item">
                    <Link to={"/blog"} className="nav__link">
                      Blog
                    </Link>
                  </li>

                  <li className="nav__item">
                    <Link to={"/about"} className="nav__link">
                      About
                    </Link>
                  </li>

                  {/* <li className="nav__item dropdown">
                    <span className="nav__link dropdown-toggle">Pages <i className="ion ion-ios-arrow-down arrow-down"></i></span>
                    <div className="dropdown-menu">

                      <a href="/about/" className="nav__link">About</a>

                      <a href="/elements/" className="nav__link">Elements</a>

                    </div>
                  </li> */}
                </ul>
              </div>

              <div className="social">
                <ul className="social__list list-reset">
                  <li className="social__item">
                    <a
                      className="social__link"
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener"
                      aria-label="twitter icon"
                    >
                      <i className="ion ion-logo-twitter"></i>
                    </a>
                  </li>

                  <li className="social__item">
                    <a
                      className="social__link"
                      href="https://github.com"
                      target="_blank"
                      rel="noopener"
                      aria-label="github icon"
                    >
                      <i className="ion ion-logo-github"></i>
                    </a>
                  </li>

                  <li className="social__item">
                    <a
                      className="social__link"
                      href="https://pinterest.com"
                      target="_blank"
                      rel="noopener"
                      aria-label="pinterest icon"
                    >
                      <i className="ion ion-logo-pinterest"></i>
                    </a>
                  </li>

                  <li className="social__item">
                    <a
                      className="social__link"
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener"
                      aria-label="youtube icon"
                    >
                      <i className="ion ion-logo-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
