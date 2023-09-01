import ShogiBoard from 'src/components/ShogiBoard';
import './index.module.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>9x9 将棋盤</h1>
      </header>
      <ShogiBoard />
    </div>
  );
}

export default App;
