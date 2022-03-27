import './App.css';
import Track from './components/track';
import data from './components/data';

function App() {
  return (
    <div className="App">
      <h1>Track Info</h1>
      {data.map((track) => (
        <Track track={track} />
      ))}
    </div>
  );
}

export default App;
