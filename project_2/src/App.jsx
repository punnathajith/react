import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  const user = {
    name: "Alice",
    age: 25,
    city: "New York",
  };

  return (
    <>
      <Card userData={user}/>
    </>
  )
}

export default App
