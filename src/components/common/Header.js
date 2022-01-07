import { NavLink } from 'react-router-dom';

function Header() {
  const active = { color: "#272343" };

  return (
    <header>
      <div className="top">
        <div className="inner">
          <ul className="sns">
            <li><a href="#"><i className="fab fa-github"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
          </ul>
          <ul className="util">
            <li><NavLink activeStyle={active} to="/join">JOIN</NavLink></li>
            <li><NavLink activeStyle={active} to="/login">LOGIN</NavLink></li>
          </ul>
        </div>
      </div>
      <div className="inner">
        <h1><NavLink activeStyle={active} exact to="/">PF</NavLink></h1>

        <nav className="menuWeb">
          <ul id="gnb">
            <li><NavLink activeStyle={active} to="/aboutUs">ABOUT</NavLink></li>
            <li><NavLink activeStyle={active} to="/project">PROJECT</NavLink></li>
            <li><NavLink activeStyle={active} to="/gallery">GALLERY</NavLink></li>
            <li><NavLink activeStyle={active} to="/youtube">YOUTUBE</NavLink></li>
            <li><NavLink activeStyle={active} to="/location">LOCATION</NavLink></li>
          </ul>
        </nav>

        {/* Mobile Menu */}
        <a href="#" className="btnCall">
          <span></span>
        </a>
        <nav className="menuMo">
          <h1>
            <a href="index.html">DESiGN</a>
            <span>Premium Interior Design</span>
          </h1>
          <div className="moMenuList">
            <div className="login">
              <a href="#"><i className="fas fa-robot"></i></a>
              <ul className="utilMo">
                <li><a href="#">Login</a></li>
                <li><a href="join.html">Join</a></li>
              </ul>

            </div>
            <ul id="gnbMo">
              <li><a href="about.html">ABOUT</a></li>
              <li><a href="youtube.html">YOUTUBE</a></li>
              <li><a href="community.html">COMMUNITY</a></li>
              <li><a href="gallery.html">GALLERY</a></li>
              <li><a href="Contact.html">Contact</a></li>
            </ul>
            <ul className="csMo">
              <li><a href="#"><i className="far fa-envelope"></i>Contact</a></li>
              <li><a href="#"><i className="fas fa-info"></i>Help</a></li>
              <li><a href="#"><i className="fas fa-map-marker-alt"></i>Sitemap</a></li>
            </ul>
          </div>
          <div className="follow">
            <h3>Follow Us</h3>
            <ul className="snsMo">
              <li>
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>

        </nav>

      </div>
    </header>
  )
}

export default Header;