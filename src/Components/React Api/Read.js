// HTTP REQUEST => GET

import React from "react";
import { Button, Table } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Read() {
  const [users, setUser] = useState([]);
  const [firstName, setFirstname] = useState(" ");
  const [lastName, setLastname] = useState(" ");
  const [isChecked, setcheckbox] = useState(true);

  // const setData = (item) =>  {
  //   console.log(item);
  // }

  const onDelete = (id) => {
    axios
      .delete(`https://62db1f2ae56f6d82a76f60cf.mockapi.io/Crud/${id}`)
      .then(() => {
        Getdata();
      });
  };

  const setData = (item) => {
    let { id, firstName, lastName, isChecked } = item;
    localStorage.setItem("ID", id);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("Checkbox val", isChecked);
  };

  const colors = ["black"];

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts/")
  //     .then((data) => data.json())
  //     .then((data) => setUser(data))
  //     .catch((err) => {
  //       console.log("error occured ", { err });
  //       setError("some thing went wrong");
  //     });
  // }, []);

  const Getdata = () => {
    axios
      .get(` https://62db1f2ae56f6d82a76f60cf.mockapi.io/Crud`)
      .then((response) => {
        setUser(response.data);
      });
  };

  useEffect(() => {
    Getdata();
  }, []);

  console.log(users);

  return (
    <div>
      <br />
      {/* {colors.map((color) => ( */}
      <Table className="table-contanier" inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>id</Table.HeaderCell>
            <Table.HeaderCell>FirstName</Table.HeaderCell>
            <Table.HeaderCell>LastName</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {users.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>{item.firstName}</Table.Cell>
              <Table.Cell>{item.lastName}</Table.Cell>
              <Table.Cell>
                {item.isChecked ? "checked" : "Unchecked"}
              </Table.Cell>

              <Link to={`/Update/${item.id}`}>
                <Table.Cell>
                  <Button onClick={() => setData(item)}>Update</Button>
                </Table.Cell>{" "}
              </Link>

              <Table.Cell>
                {" "}
                <Button onClick={() => onDelete(item.id)}> Delete</Button>{" "}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {/* ))} */}
    </div>
  );
}
