import React,{useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SimpleContainer() {
  
  //นำค่ามาจาก postman ที่เป็นjson 
  const handleSubmit = event=>{
    event.preventDefault();
    //หยุดการ refresh หลังกด submit
    event.de
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "fname": fname,
      "lname": lname,
      "username": username,
      "email":email,
      "avatar":avatar
 
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    //สำหรับการสร้าง Api
    fetch("https://www.melivecode.com/api/users/create", requestOptions)
    .then(response => response.json())
     .then(result => {
    alert(result['message'])
    if(result['status'] === 'OK'){
      window.location.href= '/'
    }
  })
    .catch(error => console.log('error', error));
  

fetch("https://www.melivecode.com/api/users", requestOptions)
  //เดิมจะเป็น .text
  .then(response => response.json())
  .then(result => {
    alert(result['message'])
    if(result['status'] === 'OK'){
      window.location.href= '/'
    }
  })
  .catch(error => console.log('error', error));
  }
  const [fname,setFname] = useState('');
  const [lname,setLname] = useState('');
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [avatar,setAvatar] = useState('');

  return ( 
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{p:2}}>
        <Typography variant='h6' gutterBottom component='div'>
            CreateUser
        </Typography>
        <form onSubmit={handleSubmit} >
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <TextField id="fname" label="First Name" variant="outlined" fullWidth required 
          onChange={(e)=>setFname(e.target.value)}        
          />
          </Grid>
          <Grid item xs={12} >
          <TextField id="lname" label="Last Name" variant="outlined" fullWidth required 
          onChange={(e)=>setLname(e.target.value)}
          />
          </Grid>
          <Grid item xs={12} >
          <TextField id="email" label="Email" variant="outlined" fullWidth required 
          onChange={(e)=>setEmail(e.target.value)}
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField id="username" label="Username" variant="outlined" fullWidth required 
          onChange={(e)=>setUsername(e.target.value)}
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField id="avatar" label="Avatar" variant="outlined" fullWidth required 
          onChange={(e)=>setAvatar(e.target.value)}
          />
          </Grid>

          {/* submit */}
          <Grid item xs={12}>
            {/* ทุกๆตัวอักษรควรชิดกัน */}
            <Button  type="submit" variant="contained">Submit</Button>
          </Grid>
          
        </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
}