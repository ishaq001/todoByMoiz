import { ClassNames } from "@emotion/react";
import { useState } from "react";
import { useEffect } from "react";

// A POST method is used to send data to a server via API.

export default function Post() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json)
      .then((data) => setUser(data));
  }, []);
  np;

  return (
    <div className="App">
      <h1>API POST METHOD</h1>
      <table border="3">
        <tr>
          <td>ID</td>
          <td>TITLE</td>
        </tr>
        {users.map((item) => (
          <tr>
            <td>{item.Id} </td>
            <td>{item.title}</td>
            <td>{item.body}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
