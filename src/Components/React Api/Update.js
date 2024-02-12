// HTTP REQUEST => PUT/PATCH

import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Update() {
  const [firstName, setFirstname] = useState(" ");
  const [lastName, setLastname] = useState(" ");
  const [isChecked, setcheckbox] = useState(true);

  let { id } = useParams()

  console.log(id);

  const UpdateApi = () => {
    axios.put(`https://62db1f2ae56f6d82a76f60cf.mockapi.io/Crud/${id}`, {
      firstName,
      lastName,
      isChecked
    });
  };


  
  useEffect(() => {
    axios
      .get(` https://62db1f2ae56f6d82a76f60cf.mockapi.io/Crud/${id}`)
      .then((response) => {
        console.log(response.data);
        setFirstname(response.data.firstName);
        setLastname(response.data.lastName);
        setcheckbox(response.data.isChecked) 
      });
  }, []);


  // const [id, setID] = useState(null);
  
  // useEffect(() => {
    // setFirstname(localStorage.getItem("First Name"));
    // setLastname(localStorage.getItem("Last Name"));
    // setcheckbox(localStorage.getItem("Check box"));
  // }, []);

  return (
    <div>
      <legend>
        <Form className="create-form">
          <Form.Field>
            {" "}
            <br />
            <label>FIRST NAME :</label>
            <br />
            <input
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>LAST NAME :</label>
            <br />
            <input
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastname(e.target.value)}
            />
          </Form.Field>
          <br />
          <Form.Field>
            <Checkbox
              label=": I AGREE TO TERM AND CONDITIONS"
              checked={isChecked}
              onChange={() => setcheckbox(!isChecked)}
            />
          </Form.Field>
          <Button type="submit" onClick={UpdateApi}>
            Update
          </Button>{" "}
        </Form>
      </legend>
    </div>
  );
}
