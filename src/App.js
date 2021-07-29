import './App.css';
import PinkSilk from './components/PinkSIlk';
import WhiteSilk from './components/WhiteSilk';
import GreySilk from './components/GreySilk';
import BlueSilk from './components/BlueSilk';
import Header from './components/Header';
import { BrowserRouter as Router,
    Link,
    Switch,
    Route} from  "react-router-dom";
import AboutPink from "./components/AboutPink";
import AboutWhite from "./components/AboutWhite";
import AboutGrey from "./components/AboutGrey";
import AboutBlue from "./components/AboutBlue";


function App() {
  return (
      <Router>
        <div className="App">
            <Header/>
                <div className="siteStructure">
                    <Switch>
                        <Route path="/" exact>
                            <div>
                                <Link to="/pink">
                                    <PinkSilk/>
                                </Link>
                                <Link to="/white">
                                    <WhiteSilk/>
                                </Link>
                                <Link to="/grey">
                                    <GreySilk/>
                                </Link>
                                <Link to="/blue">
                                    <BlueSilk/>
                                </Link>
                            </div>
                        </Route>
                        <Route path="/pink"><AboutPink/></Route>
                        <Route path="/white"><AboutWhite/></Route>
                        <Route path="/grey"><AboutGrey/></Route>
                        <Route path="/blue"><AboutBlue/></Route>
                    </Switch>
                </div>
        </div>
      </Router>
  );
}

export default App;
