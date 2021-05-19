import logo from './jelly-commander.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>
          Colbyashi Maruuuuu! 🚀🚀🚀.
        </p>
        <p>
          pod name: {process.env.REACT_APP_POD_NAME}
        </p>
      </header>
    </div>
  );
}

export default App;
