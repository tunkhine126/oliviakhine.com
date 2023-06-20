import sunflower from './assets/images/sunflowerfield.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={sunflower} className="sunflower" alt="sunflower" />
        <p>
          Olivia's sunflower field
        </p>
      </header>
    </div>
  );
}

export default App;
