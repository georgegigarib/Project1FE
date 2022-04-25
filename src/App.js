
import {useState, useEffect} from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Quotebox from'./components/quote-box.component.jsx'
//https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json

const App = () => {

  let [Allquotes, setQuotes] = useState([]);
  let [newQuote, setQuote] = useState({});
   var myNumber = 1;

  useEffect(() => {
    const myQuotes =  fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(response => response.json())
    .then(data => {
      setQuotes(data)}
      );
  }, []);

async function getQuote() {
    let myQuotes = await Allquotes.quotes;
    let index = Math.floor(Math.random() * (102/*max*/ - 1/*min*/) + 1/*min*/);
    setQuote(myQuotes[index]);
}

useEffect(() => {
    getQuote();
}, );

  return (
    <div className="App">
    <h1>Random Quote Machine</h1>
      <header className="App-header">
        <Quotebox quotes = {newQuote} getQuote = {getQuote}/>
      </header>
    </div>
  );
}

export default App;
