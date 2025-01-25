import { useState } from 'react'

function App() {
 
  const [count,setCount] = useState(0);

  return (
    <>
     <h1>Hello world</h1>
     <h2>Count: {count} </h2>
     <button onClick={()=>setCount(count+1)}>Add</button> { }
     <button onClick={()=>setCount(count-1)}>Substract</button>
    </>
  )
}

export default App
