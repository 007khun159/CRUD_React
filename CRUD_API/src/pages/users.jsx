import React,{useState,useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
// import ตัวของตาราง
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
//เรียกใช้ตัวของ Avatar ที่เป็น link
import Avatar from '@mui/material/Avatar';
// Link import
import Link from '@mui/material/Link';







export default function SimpleContainer() {

  //การดึงข้อมูลของ API

  const [items, setItem] = useState([]);
  
  useEffect(()=>{
      fetch("https://www.melivecode.com/api/users")
      .then(res=>res.json())
      .then(
        (result =>{
          setItem(result)
        })
      )
    },[])
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{p:2}}>
       <Paper sx={{p:2}}>
          <Box  display="flex">
              <Box sx={{flexGrow:1}}>
              <Typography variant="h6" gutterBottom>
                User
              </Typography>
            </Box>
            <Link href="create">
              <Button variant="contained">Create</Button>
            </Link>
          </Box>
          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="center">Avatar</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="center">Last Name</TableCell>
            <TableCell align="right">EW</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">
                <Box display="flex" justifyContent="center">
                  <Avatar alt="Avatar" src={row.avatar} />
                </Box>
              </TableCell>
              <TableCell align="right">{row.fname}</TableCell>
              <TableCell align="center">{row.lname}</TableCell>
              <TableCell align="right">{row.username}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Paper>
      </Container>
    </React.Fragment>
  );
}