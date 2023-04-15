import './App.css';
import MemoryCard from "./components/MemoryCard";
import './components/MemoryCard.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Memory Game
        </h1>
        <h2 className="subtitle">Match cards to win</h2>
      </header>
      <div className="card-container">
        <div className="cell"> 
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
        <div className="cell">
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
        <div className="cell">
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
        <div className="cell">
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
          <MemoryCard />
        </div>
      </div>
    </div>
  );
}

export default App;
