import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const getApi = async () => {
    try {
      let res = await fetch(`https://testnet-dex.binance.org/api/v1/markets`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        
      });
      console.log(res)
      let json = await res.json();
      console.log(json);
    } catch (err) {
      console.log(err)
    }
    
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
