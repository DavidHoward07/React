import React, { useState } from 'react';
import './App.css';

function App() {
const [state, setState] = useState(0)

const counter = state

const increment = () => {
  setState(counter + 1)
}

  return(
    <div>
      <p>{counter}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default App;
