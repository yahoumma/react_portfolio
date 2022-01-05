import {NavLink} from 'react-router-dom';

function Header(){
  const active = {color: "#e88484"};

  return (
    <header>
      <div className="top">
        <ul className="sns">
          <li><a href="#"><i className="fab fa-github"></i></a></li>
          <li><a href="#"><i class="fab fa-instagram"></i></a></li>
          <li><a href="#"><i class="fab fa-facebook"></i></a></li>
        </ul>
        <ul className="util">
          <li><NavLink activeStyle={active} to="/join">JOIN</NavLink></li>
          <li><NavLink activeStyle={active} to="/login">LOGIN</NavLink></li>
        </ul>
      </div>
      <div className="navi">
        <h1><NavLink activeStyle={active} exact to="/">PORTFOLIO</NavLink></h1>

        <ul id="gnb">
          <li><NavLink activeStyle={active} to="/department">DEPARTMENT</NavLink></li>
          <li><NavLink activeStyle={active} to="/project">PROJECT</NavLink></li>
          <li><NavLink activeStyle={active} to="/gallery">GALLERY</NavLink></li>
          <li><NavLink activeStyle={active} to="/youtube">YOUTUBE</NavLink></li>
          <li><NavLink activeStyle={active} to="/location">LOCATION</NavLink></li>
        </ul>
      </div>
      {/* Mobile Menu */}
      <div className="gnbMo">

      </div>
    </header>
  )
}

export default Header;