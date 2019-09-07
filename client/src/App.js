import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const getApi = async () => {
    let token = 'ETH';
    let res = await fetch(`https://api.binance.com/api/v3/avgPrice?${token}`);
    let json = await res.json();
    console.log(json);
  }

  useEffect(() => {
    getApi();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
