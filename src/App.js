import './css/style.css';
import { NavLink, Link, Route } from 'react-router-dom';

//import common component
import Header from './components/common/Header.js';
import Footer from './components/common/Footer.js';

//import main component
import Visual from './components/main/Visual.js';
import Our from './components/main/Our.js';
import About from './components/main/About.js';
import Count from './components/main/Count.js';
import Contact from './components/main/Contact.js';

//import sub component
import AboutUs from './components/sub/AboutUs.js';
import Project from './components/sub/Project.js';
import Gallery from './components/sub/Gallery.js';
import Youtube from './components/sub/Youtube.js';
import Location from './components/sub/Location.js';
import Join from './components/sub/Join.js';
import Login from './components/sub/Login.js';

function App() {
  return (
    <div className="App">
      <Header />

      <Route exact path="/">
        <Visual />
        <Our />
        <About />
        <Count />
        <Contact />
      </Route>

      <Route path="/aboutUs" component={AboutUs}></Route>
      <Route path="/project" component={Project}></Route>
      <Route path="/gallery" component={Gallery}></Route>
      <Route path="/youtube" component={Youtube}></Route>
      <Route path="/location" component={Location}></Route>
      <Route path="/join" component={Join}></Route>

      <Footer />
    </div>
  );
}

export default App;