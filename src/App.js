import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header bg-green-900">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <br></br>
        <a className="bg-white text-black font-bold uppercase p-2 rounded-lg hover:bg-blue-400 hover:text-white" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"
        > Learn React </a>
        <br></br>
        <div className="bg-white text-black py-2 px-2 rounded">
            <p>Demo React +  tailwindcss</p>
        </div>
      </header>
    </div>
  );
}

export default App;
