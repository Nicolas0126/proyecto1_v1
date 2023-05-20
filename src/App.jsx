import { useState } from 'react';
import './App.css'
import dbQuotes from "./db/quote.json"
import getRandom from './utils/random';
import QuoteBox from './components/QuoteBox';

const bgImages = ['bg1', 'bg2', 'bg3', 'bg4']

function App() {
  const [quote, setQuote] = useState(getRandom(dbQuotes))
  const [bgImage, setBgImage] = useState(getRandom(bgImages)) 

  console.log(quote);

  const handleChangeQuote = () => {
    setQuote(getRandom(dbQuotes))
    setBgImage(getRandom(bgImages))
  }
  return (
    <main className={`App ${bgImage}`}>
     <section className='App__container'>
      <h1>Fortune Cookies</h1>
     
    <QuoteBox phrase= {quote.phrase} handleChangeQuote = {handleChangeQuote}/>
      <footer>
        <h2>Author: {quote.author} </h2>
      </footer>

     </section>
    </main>
  )
}

export default App
