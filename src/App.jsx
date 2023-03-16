import { useState } from 'react'

import './App.css'
import Powtorka from './Components/Powtorka'
import Matura from './Components/Matura'

function App() {
  const [count, setCount] = useState(0)

  const show = (type) = {
    switch (type) {
      case 'a': return (
      <Powtorka />
    );
      case 'b': return (
    <Matura /> >
    );
    default: return (<div></div>);
}
  };

return (
  <div className="App">

    <div>
      <h1>Witaj maturzysto.</h1>
      <p>Znajdziesz tu zadania, które pomogą Ci przygotować się do egzaminu maturalnego z matematyki.</p>
      <button>Zadania powtórzeniowe</button>
      <button>Zadania maturalne</button>
    </div>
  </div>
)
}

export default App
