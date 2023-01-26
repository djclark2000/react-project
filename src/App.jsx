import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Dustin's React Project</h1>
        <p>Hey how's it going?</p>
        <ul>
          <li>Skills</li>
          <li>Work</li>
          <li>Hobbies</li>
        </ul>
        <p>
          <code>React is so Cool!</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
