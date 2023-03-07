import { useState } from 'react';
import React, { Component } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import TextField from '@mui/material/TextField';



export default function Account() {


    const [name, setname] = useState('');
    const [Lname, setLname] = useState('');
    const [age, setage] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmpss, setconfirmpss] = useState('');
    const [address, setaddress] = useState('');
    const [city, setcity] = useState('');


    const handlechange = (e) => {
        setname(e.target.value);

    }

    const handleLnamechange = (e) => {
        setLname(e.target.value);
    }

    const handlecitychange = (e) => {
        setcity(e.target.value);
    }
    const handleaddresschange = (e) => {
        setaddress(e.target.value);

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
            alert('A form was submitted with Name: ' + name + ' , ' + 'Age: ' + age + ' , ' + 'Email: ' + email + ',' + 'Address:' + address)
        }
        e.preventDefault();
    }


    return (

        <Box>
            <form onSubmit={(e) => { handlesubmit(e) }}>
                <h2>Personal Detail</h2>

                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 2, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="standard-basic" label="EMAIL ADD.: " variant="standard" value={email} onChange={(e) => { handleemailchange(e) }} /> <br />
                    <TextField id="standard-basic" label="PASSWORDE: " variant="standard" value={password} onChange={(e) => { handlepasswordchange(e) }} />
                    <TextField id="standard-basic" label="CONFIRM PASS: " variant="standard" value={confirmpss} onChange={(e) => { handleconfirmpss(e) }} /><br />

                    <TextField id="standard-basic" label="FIRST NAME: " variant="standard" value={name} onChange={(e) => { handlechange(e) }} />
                    <TextField id="standard-basic" label="LAST  NAME: " variant="standard" value={Lname} onChange={(e) => { handleLnamechange(e) }} /><br />

                    <Box sx={{ minWidth: 100, m:2,    }}>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 425 }}>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                SEND TO
                            </InputLabel>
                            <NativeSelect
                                defaultValue={30}
                                inputProps={{
                                    name: 'age',
                                    id: 'uncontrolled-native',
                                }}
                            >
                                <option value={10}>Pakistan</option>
                                <option value={20}>India</option>
                                <option value={30}>Dubai</option>
                            </NativeSelect>
                        </FormControl>
                    </Box>
                    <TextField id="standard-basic" label="AGE:" variant="standard" value={age} onChange={(e) => { handleagechange(e) }} /><br />

                    <TextField id="standard-basic" label="ADDRESS: " variant="standard" value={address} onChange={(e) => { handleaddresschange(e) }} />
                    <TextField id="standard-basic" label="ADDRESS 2: " variant="standard" value={address} onChange={(e) => { handleaddresschange(e) }} /><br />


                    <TextField id="standard-basic" label="CITY/TOWN: " variant="standard" value={city} onChange={(e) => { handlecitychange(e) }} />
                    <TextField id="standard-basic" label="POSTCODE/ZIP: " variant="standard" value={city} onChange={(e) => { handlecitychange(e) }} /><br />

                    <TextField id="standard-basic" label="STATE/PROVINCE: " variant="standard" value={city} onChange={(e) => { handlecitychange(e) }} />
                    <TextField id="standard-basic" label="TELE-PHONE: " variant="standard" value={city} onChange={(e) => { handlecitychange(e) }} /><br />



                    <br />
                    <input type="submit" value="CREATE ACCOUNT" />
                </Box>
            </form>


        </Box>
    );
}