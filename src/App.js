import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://g9hc7scfph.execute-api.eu-north-1.amazonaws.com/dev/media")
      .then(res => {
        console.log(res.data)
        setUsers(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []); // empty dependency array to run effect only once

  return (
    <div className="App">
      {
        users.map((user, index) => (
          <div key={index}>
            <h1>{user.name}</h1>
            <ul>
              {user.users.map((nestedUser, nestedIndex) => (
                <li key={nestedIndex}>{nestedUser.name}</li>
              ))}
            </ul>
          </div>
        ))
      }
    </div>
  );
}

export default App;
