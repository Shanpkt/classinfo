import React, { useState } from 'react';
import "./form.scss"
import { TextField, Button, Grid, Typography, Select, MenuItem } from '@mui/material';
import axios from "axios"
import CircularIndeterminate from './loading';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    mobileNumber: '',
    email: '',
    reactProficiency: '',
    javascriptProficiency: ''
  });
  const [status,setststus]=useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
    setststus(true)
     axios.post("https://classbackendxsx.onrender.com/formData",formData).then((e)=>{setststus(false);console.log(e)})
     // Handle form submission logic here
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <Typography variant="h5" gutterBottom>
        PLEASE FILL THE FORM FOR WORKSHOP
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="First Name"
            variant="outlined"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Last Name"
            variant="outlined"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Age"
            variant="outlined"
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Mobile Number"
            variant="outlined"
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" gutterBottom>
            React Proficiency (1 to 6)
          </Typography>
          <Select
            label="Rate YourSelf in React"
            variant="outlined"
            name="reactProficiency"
            value={formData.reactProficiency}
            onChange={handleChange}
            fullWidth
          >
            {[1, 2, 3, 4, 5, 6].map((value) => (
              <MenuItem key={value} value={value}>{value}</MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" gutterBottom>
            JavaScript Proficiency (1 to 6)
          </Typography>
          <Select
            label="Rate YourSelf in JavaScript "
            variant="outlined"
            name="javascriptProficiency"
            value={formData.javascriptProficiency}
            onChange={handleChange}
            fullWidth
          >
            {[1, 2, 3, 4, 5, 6].map((value) => (
              <MenuItem key={value} value={value}>{value}</MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>
      <div   className='butn'>
      <Button type="submit" variant="contained" color="primary">
      {status && <CircularIndeterminate/>}
        Submit
      </Button>
      
      </div>
    </form>
  );
};

export default FormComponent;
