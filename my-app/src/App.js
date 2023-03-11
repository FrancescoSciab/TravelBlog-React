import './App.css';
import Navbar from './components/navbar';
import CitySection from './components/content';
import data from './data'

function App() {
  const cards = data.map(item => {
    return (
      <CitySection 
        key = {item.key}
        item = {item}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
        {cards}
    </div>
  );
}

export default App;
