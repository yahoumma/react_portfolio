import './css/style.css';
import {Route} from 'react-router-dom';

//import common component
import Header from './components/common/Header.js';
import Footer from './components/common/Footer.js';

//import main component
import Visual from './components/main/Visual.js';
import Info from './components/main/Info.js';

//import sub component
import Department from './components/sub/Department.js';
import Community from './components/sub/Community.js';
import Gallery from './components/sub/Gallery.js';
import Youtube from './components/sub/Youtube.js';
import Location from './components/sub/Location.js';
import Join from './components/sub/Join.js';

function App() {
  return (
    <div className="App">    
      <Header />

      <Route exact path="/">
        <Visual />
        <Info />
      </Route>      

      <Route path="/department" component={Department}></Route>
      <Route path="/community" component={Community}></Route>
      <Route path="/gallery" component={Gallery}></Route>
      <Route path="/youtube" component={Youtube}></Route>
      <Route path="/location" component={Location}></Route>
      <Route path="/join" component={Join}></Route>      

      <Footer />  
    </div>
  );
}

export default App;