import {NavLink} from 'react-router-dom';

function Header(){
  const active = {color: "pink"};

  return (
    <header>
      <div className="top">
        <ul className="util">
          <li><NavLink activeStyle={active} to="/join">Join</NavLink></li>
          <li><NavLink activeStyle={active} to="/login">Login</NavLink></li>
        </ul>
      </div>
      <div className="navi">
        <h1><NavLink activeStyle={active} exact to="/">logo</NavLink></h1>

        <ul id="gnb">
          <li><NavLink activeStyle={active} to="/department">Department</NavLink></li>
          <li><NavLink activeStyle={active} to="/community">Community</NavLink></li>
          <li><NavLink activeStyle={active} to="/gallery">Gallery</NavLink></li>
          <li><NavLink activeStyle={active} to="/youtube">Youtube</NavLink></li>
          <li><NavLink activeStyle={active} to="/location">Location</NavLink></li>
        </ul>
      </div>
    </header>
  )
}

export default Header;