import { useState } from 'react';
import React, { Component } from 'react';


export default function Aform() {

  const [name, setname] = useState('');
  const [age, setage] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmpss, setconfirmpss] = useState('');

  const handlechange = (e) => {
    setname(e.target.value);

  }

  const handleagechange = (e) => {
    setage(e.target.value);
  }

  const handleemailchange = (e) => {
    setemail(e.target.value);
  }

  const handlepasswordchange = (e) => {
    setpassword(e.target.value);
  }

  const handleconfirmpss = (e) => {
    setconfirmpss(e.target.value);
  }

  const handlesubmit = (e) => {
    if (password != confirmpss) {
      alert('Password do not match');
    }

    else {
      alert('A form was submitted with Name: ' + name + ' , ' + 'Age: ' + age + ' , ' + 'Email: ' + email)
    }
    e.preventDefault();
  }


  return (

    <div className="App">
      <header className="App-header">
        <form onSubmit={(e) => { handlesubmit(e) }}>
          <h2>SIGN UP FORM</h2>
          <label>
            Name :
          </label> <br />
          <input type="text" value={name} required onChange={(e) => { handlechange(e) }} />
          <br />
          <label>
            Age :
          </label> <br />
          <input type="text" value={age} required onChange={(e) => { handleagechange(e) }} />
          <br />

          <label>
            Emil :
          </label> <br />
          <input type="email" value={email} required onChange={(e) => { handleemailchange(e) }} />
          <br />
          <label>
            Password :
          </label> <br />
          <input type="text" value={password} required onChange={(e) => { handlepasswordchange(e) }} />
          <br />

          <label>
            Confirm password:
          </label>
          <br />
          <input type="password" value={confirmpss} required onChange={(e) => { handleconfirmpss(e) }} /><br />
          <br />
          <input type="submit" value="Submit" />
        </form>

      </header>
    </div>

  );
}


