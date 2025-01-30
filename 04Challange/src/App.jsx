
import './App.css'


const ProfileCard = ({ name, email }) => {
  return (
    <div className="profile__card">
      <h1>{name}</h1>
      <p>Email: {email}</p>
    </div>
  );
};

export default function App() {
  const data = [
    { id: 1, name: "Leanne Graham", email: "leannegraham@abc.com" },
    { id: 2, name: "Ervin Howell", email: "ervinhowell@abc.com" }
  ];

  return (
    <div className="App">
      {data.map(({ id, name, email }) => (
        <ProfileCard key={id} name={name} email={email} />
      ))}
    </div>
  );
}
