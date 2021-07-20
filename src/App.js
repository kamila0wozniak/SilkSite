import './App.css';
import PinkSilk from './components/PinkSIlk';
import WhiteSilk from './components/WhiteSilk';
import GreySilk from './components/GreySilk';
import BlueSilk from './components/BlueSilk';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
        <Header/>
        <div className="siteStructure">
            <PinkSilk/>
            <WhiteSilk/>
            <GreySilk/>
            <BlueSilk/>
        </div>

    </div>
  );
}

export default App;
