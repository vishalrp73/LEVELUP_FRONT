import './App.css';
import Header from './components/head-foot/header';
import Footer from './components/head-foot/footer';
import CoreBanner from './components/core/coreBanner/coreBanner';
import CoreSlides from './components/core/coreSlides/coreSlides';
import CorePanel from './components/core/corePanel/corePanel';
import InfoSelect from './components/core/infoSelect/infoSelect';
import Entry from './components/core/entry/entry';


function App() {
  return (
    <div className="App">
      <Header />
      <CoreBanner />
      <CoreSlides />
      <CorePanel />
      <InfoSelect />
      <Entry />
      <Footer />
    </div>
  );
}

export default App;
