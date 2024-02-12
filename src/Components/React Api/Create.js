// HTTP REQUEST => POST

import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Create() {
  const [firstName, setFirstname] = useState(" ");
  const [lastName, setLastname] = useState(" ");
  const [checkbox, setcheckbox] = useState();

  useEffect(() => {
    postData();
  }, []);

  const postData = () => {
    axios.post(`https://62db1f2ae56f6d82a76f60cf.mockapi.io/Crud`, {
      firstName,
      lastName,
      checkbox,
    });

    console.log(firstName);
    console.log(lastName);
    console.log(checkbox);
  };

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
              onChange={(e) => setFirstname(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>LAST NAME :</label>
            <br />
            <input
              placeholder="Last Name"
              onChange={(e) => setLastname(e.target.value)}
            />
          </Form.Field>
          <br />
          <Form.Field>
            <Checkbox
              label=": I AGREE TO TERM AND CONDITIONS"
              onChange={(e) => setcheckbox(e.target.value)}
            />
          </Form.Field>

          <Link to="/Read">
            <Button type="submit" onClick={postData}>
              Submit
            </Button>{" "}
          </Link>
        </Form>
      </legend>
    </div>
  );
}
