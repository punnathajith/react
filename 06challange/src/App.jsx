import { useState, useRef, useEffect } from "react";
import "./App.css"; 

function App() {
  const [name, setName] = useState(""); 
  const inputRef = useRef(null); 

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Name cannot be empty!");
      return;
    }
    console.log("Submitted Name:", name);
    setName(""); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:</label>
      <input
        type="text"
        ref={inputRef}
        value={name} 
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
