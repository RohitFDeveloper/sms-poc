import React, { Component } from 'react'
import RegisterForm from '../../components/registerForm';
// import Axios from 'axios'
// import StudentService from '../../services/StudentService';
import {
  Card,
  Box,
  CardContent,
  // Button
} from '@mui/material';
import { Link } from "react-router-dom";

const card = (
  <React.Fragment>
    <CardContent>
      <RegisterForm />
      <Link to="/">Home</Link>
    </CardContent>
  </React.Fragment>
);

// const getData = () => {
//   Axios.get("https://catfact.ninja/facts").then((response) => {
//     console.log("working success");
//     console.log(response);
//   }).catch( (error) => {
//     console.log("working error");
//     console.log(error);
//   })
// }
// const postData = () => {
//   Axios.post('https://crudcrud.com/api/58e6afb48a7740cabd83fc52025c774d/unicorns', {
//     name:"Rocky", age:2, colour:"Grey", email:"student@gmail.com"
//   })
//   .then((response) => {
//     console.log("working success");
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log("working error");
//     console.log(error);
//   });
// }
// const deleteData = () => {
//   const id = "62b436306f047803e8ae9dd5";
//   Axios.delete('https://crudcrud.com/api/58e6afb48a7740cabd83fc52025c774d/unicorns/'+ id)
//   .then((response) => {
//     console.log("working success");
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log("working error");
//     console.log(error);
//   });
// }
// const updateData = () => {
//   const id = "62b4392a6f047803e8ae9ddb"
//   Axios.put('https://crudcrud.com/api/58e6afb48a7740cabd83fc52025c774d/unicorns/'+ id,{
//     name:"DheeruBhai", age:22, colour:"Orange"
//   })
//   .then((response) => {
//     console.log("working success");
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log("working error");
//     console.log(error);
//   });
// }

export default class Register extends Component {
  render() {
    return (
      <div style={{position:"relative"}}>
        <Box sx={{ minWidth: 400, maxWidth:400 }} style={centerBox}>
          <Card variant="outlined">{card}</Card>
        </Box>
        {/* <Box sx={{ minWidth: 400, maxWidth:400 }} style={centerBox}>
          <Button onClick={getData}>Get Data</Button>
          <Button onClick={deleteData}>Delete Data</Button>
          <Button onClick={updateData}>Update Data</Button>
        </Box> */}
      </div>
    )
  }
}

const centerBox = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, 10%)"
}