import './css/style.css';
import { Route, Switch } from 'react-router-dom';

//import common component
import Header from './components/common/Header.js';
import Footer from './components/common/Footer.js';

//import main component
import Main from './components/main/Main.js';

//import sub component
import AboutUs from './components/sub/AboutUs.js';
import Community from './components/sub/Community.js';
import Gallery from './components/sub/Gallery.js';
import Youtube from './components/sub/Youtube.js';
import Location from './components/sub/Location.js';
import Join from './components/sub/Join.js';
import Login from './components/sub/Login.js';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route path='/'>
          <Header type={'sub'} />
        </Route>
      </Switch>

      <Route path="/aboutUs" component={AboutUs}></Route>
      <Route path="/community" component={Community}></Route>
      <Route path="/gallery" component={Gallery}></Route>
      <Route path="/youtube" component={Youtube}></Route>
      <Route path="/location" component={Location}></Route>
      <Route path="/join" component={Join}></Route>
      <Route path="/Login" component={Login}></Route>

      <Footer />
    </div>
  );
}

export default App;