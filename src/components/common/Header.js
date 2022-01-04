import {NavLink} from 'react-router-dom';

function Header(){
  const active = {color: "pink"};

  return (
    <header>
      <div className="inner">
        <h1><NavLink activeStyle={active} exact to="/">footer logo</NavLink></h1>

        <ul id="gnb">
          <li><NavLink activeStyle={active} exact to="/department">Department</NavLink></li>
          <li><NavLink activeStyle={active} exact to="/community">Community</NavLink></li>
          <li><NavLink activeStyle={active} exact to="/gallery">Gallery</NavLink></li>
          <li><NavLink activeStyle={active} exact to="/youtube">Youtube</NavLink></li>
          <li><NavLink activeStyle={active} exact to="/location">Location</NavLink></li>
          <li><NavLink activeStyle={active} exact to="/join">Join</NavLink></li>
        </ul>
      </div>
    </header>
  )
}

export default Header;