import bkgnd from "./assets/background.jpeg"
import './App.css';

function App() {
  return (
    <div style={{backgroundImage: `url(${bkgnd})`,backgroundSize:"cover"
  }} className="App">
    <div className="list">
      <h1>Regalos:</h1>
      <ul>
        <li>Reloj</li>
        <li>Tablet</li>
        <li>Pelota</li>
      </ul>
    </div>
      
    </div>
  );
}

export default App;
