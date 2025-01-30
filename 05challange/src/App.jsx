import { useState, useEffect } from "react";
import axios from "axios";
import './App.css';


const ProfileCard = ({ user }) => {
  return (
    <div className="profile__card">
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};

function App() {
  const [count, setCount] = useState(1);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${count}`
        );
        setUser(response.data);
      } catch (err) {
        setError("Failed to load user data.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [count]); 

  return (
    <div className="App">
      <h1>{count}</h1>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {user && <ProfileCard user={user} />}

      <button onClick={() => setCount((prev) => Math.max(1, prev - 1))}>-</button>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
}

export default App;
