import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
     <div className="w-full h-screen flex flex-col justify-end" style={{backgroundColor: color}}>
      <div className="flex justify-center gap-5 pb-5">
        <button onClick={()=> setColor('red')}
        className="bg-red-600 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Red</button>
        <button onClick={()=> setColor('blue')}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Blue</button>
        <button onClick={()=> setColor('green')}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Green</button>
        <button onClick={()=> setColor('yellow')}
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">Yellow</button>
        <button onClick={()=> setColor('purple')}
        className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">Purple</button>
      </div>
    </div>
    </>
  )
}

export default App
