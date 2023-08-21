import React,{useState,useEffect, lazy} from 'react';
//ใช้ในการดึง id
import { useParams } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function UserUpdate() {
    

  // Update Function
  //ดึงค่าภายในID แสดงอยู่ใน Promt
    const {id} = useParams();
    useEffect(()=>{
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://www.melivecode.com/api/users/"+id, requestOptions)
        .then(response => response.json())
        .then(result => {
          //ทำการเรียกข้อมูบมาตรวจเช็คและทำการเก็บค่าจาก Value ={}
          if (result['status']==="ok"){
            setFname(result['user']['fname'])
            setLname(result['user']['lname'])
            setUsername(result['user']['username'])
            setEmail(result['user']['email'])
            setAvatar(result['user']['avatar'])

          }
        })
        .catch(error => console.log('error', error));
    },[id])
    

  //นำค่ามาจาก postman ที่เป็นjsonเพื่อดำเนินการevent
  const handleSubmit = event=>{
    
    event.preventDefault();
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "id": id,
      "fname": fname,
      "lname": lname,
      "username": username,
      "email":email,
      "avatar":avatar
 
    });

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    }; 
    //สำหรับการสร้าง Api
    fetch("https://www.melivecode.com/api/users/update", requestOptions)
    .then(response => response.json())
     .then(result => {
    alert(result['message'])
    if(result['status'] === 'OK'){
      //ทำการเปลี่ยน Path ปลาทาง
      window.location.href= '/'
    }
  })
    .catch(error => console.log('error', error));
  


//ทำการดึงและเปรียบเทียบข้อมูล
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
  //Function สำหรับรับค่า ค่าจะรับไว้ใน setFunction และนำไปใช้จริงคือ variableที่อยู่ด้านหน้า
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
        {/* สร้าง formสำหรับการรับข้อมูลที่ Typeเข้ามา */}
        <form onSubmit={handleSubmit} >
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <TextField id="fname" label="First Name" variant="outlined" fullWidth required 
          onChange={(e)=>setFname(e.target.value)} value={fname}    
          />
          </Grid>
          <Grid item xs={12} >
          <TextField id="lname" label="Last Name" variant="outlined" fullWidth required 
          onChange={(e)=>setLname(e.target.value)} value={lname}
          />
          </Grid>
          <Grid item xs={12} >
          <TextField id="email" label="Email" variant="outlined" fullWidth required 
          onChange={(e)=>setEmail(e.target.value)} value={email}
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField id="username" label="Username" variant="outlined" fullWidth required 
          onChange={(e)=>setUsername(e.target.value)} value={username}
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField id="avatar" label="Avatar" variant="outlined" fullWidth required 
          onChange={(e)=>setAvatar(e.target.value)} value={avatar}
          />
          </Grid>

          {/* submit */}
          <Grid item xs={12}>
            {/* ทุกๆตัวอักษรควรชิดกัน */}
            <Button  type="submit" variant="contained">Update</Button>
          </Grid>
          
        </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
}