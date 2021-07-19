import './App.css';
import PinkSilk from './components/PinkSIlk'
import WhiteSilk from './components/WhiteSilk'
import GreySilk from './components/GreySilk'
import BlueSilk from './components/BlueSilk'


function App() {
  return (
    <div className="App">
      <header className="App-header">
          Silk Site
      </header>
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
