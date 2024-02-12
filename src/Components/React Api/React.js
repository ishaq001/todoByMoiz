// The GET method is used to retrieve information from the given server using a given URI.

import React, { useEffect, useState } from "react";

function API() {
  const [users, setUser] = useState([]);
  const [error, setError] = useState(null);

  // fetch('https://jsonplaceholder.typicode  .com/posts/1')
  // .then((response) => console.log(  "result", response))
  // .then((json) => console.log(json , "json resulttt"));
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((data) => data.json())
      .then((data) => setUser(data))
      .catch((err) => {
        console.log("error occured ", { err });
        setError("some thing went wrong");
      });
  }, []);

  console.warn(users);
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div className="App">
      <h1>Get API Call </h1>
      <legend>
        <table border="3">
          <tr>
            <td>UserID</td>
            <td> ID </td>
            <td>Title </td>
            <td>Body</td>
          </tr>
          {users.map((item) => (
            <tr>
              <td>{item.userId} </td>
              <td>{item.id} </td>
              <td>{item.title} </td>
              <td>{item.body}</td>
            </tr>
          ))}
        </table>
      </legend>
    </div>
  );
}
export default API;
