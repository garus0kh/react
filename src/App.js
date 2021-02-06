import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetStock () {
  const testurl = 'https://financialmodelingprep.com/api/v3/quote/AAPL?apikey=demo'

  const [ company, setCompany ] = useState([]);

  useEffect(async () => {
    const result =  await axios.get(
      testurl
    );
    console.log("AAA", result)
    setCompany(result.data[0]);
  }, []);

  return (
    <div>
      <h1>{ company.name }</h1>
      <h1>{ company.symbol }</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      { GetStock() }
    </div>
  );
}

export default App;
