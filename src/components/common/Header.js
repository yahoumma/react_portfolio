import { NavLink } from 'react-router-dom';

function Header(props) {
  const active = { color: "#272343" };

  return (
    <header className={props.type+'myScroll'}>
      <ul className="util">
        <li className='join'><NavLink activeStyle={active} to="/join">JOIN</NavLink></li>
        <li className='join'><NavLink activeStyle={active} to="/login">LOGIN</NavLink></li>
      </ul>
      <div className="inner">
        <nav className="menuWeb">
        <h1><NavLink activeStyle={active} exact to="/">PF</NavLink></h1>
          <ul id="gnb">
            <li><NavLink activeStyle={active} to="/aboutUs">ABOUT</NavLink></li>
            <li><NavLink activeStyle={active} to="/community">COMMUNITY</NavLink></li>
            <li><NavLink activeStyle={active} to="/gallery">GALLERY</NavLink></li>
            <li><NavLink activeStyle={active} to="/youtube">YOUTUBE</NavLink></li>
            <li><NavLink activeStyle={active} to="/location">LOCATION</NavLink></li>
          </ul>
          

        </nav>

        {/* Mobile Menu */}
        <h1 className="logoMo"><NavLink activeStyle={active} exact to="/">PF</NavLink></h1>
        <a href="#" className="btnCall">
          <span></span>
        </a>
      </div>
      <nav className="menuMo">
        <h1><NavLink activeStyle={active} exact to="/">PF</NavLink></h1>
        <div className="moMenuList">
          <a href="#"><i className="fas fa-robot"></i></a>
          <ul className="utilMo">
            <li><NavLink activeStyle={active} to="/join">JOIN</NavLink></li>
            <li><NavLink activeStyle={active} to="/login">LOGIN</NavLink></li>
          </ul>
          <ul id="gnbMo">
            <li><NavLink activeStyle={active} to="/aboutUs">ABOUT</NavLink></li>
            <li><NavLink activeStyle={active} to="/community">COMMUNITY</NavLink></li>
            <li><NavLink activeStyle={active} to="/gallery">GALLERY</NavLink></li>
            <li><NavLink activeStyle={active} to="/youtube">YOUTUBE</NavLink></li>
            <li><NavLink activeStyle={active} to="/location">LOCATION</NavLink></li>
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
    </header>
  )
}

export default Header;