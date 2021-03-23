import './App.css';
import Predictions from './components/Predictions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/logo.png" className="App-logo" alt="logo" />
      </header>
      <body className="App-body">
        <Predictions></Predictions>
      </body>
    </div>
  );
}

export default App;
