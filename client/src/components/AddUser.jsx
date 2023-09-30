import { FormControl, styled, FormGroup, Input, InputLabel, Button, Typography } from "@mui/material";
import { useState } from "react";
import { addUser } from "../services/Apis";
import {useNavigate} from 'react-router-dom';

const Container = styled(FormGroup)`
   width:50%;
   margin:5% auto 0 auto;
   & > div {
    margin-top:20px;
   }
`;
const defaultValue = {
   name: " ",
   username: " ",
   email: " ",
   phone: " "
}

const AddUser = () => {

   const navigate = useNavigate();

   const addUserDetails = async() => {
     await addUser(user);
     navigate('/all'); 
   }
   const onValueChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
      console.log(user)
   }
   const [user, setUser] = useState(defaultValue);

   return (
      <Container>
         <Typography variant="h4">Add User</Typography>
         <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="name" />
         </FormControl>
         <FormControl>
            <InputLabel>Username</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="username" />
         </FormControl>
         <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="email" />
         </FormControl>
         <FormControl>
            <InputLabel>phone</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name="phone" />
         </FormControl>
         {/* button */}
         <FormControl>
            <Button variant="contained" onClick={() => addUserDetails()}>Add User</Button>
         </FormControl>
      </Container>

   )
}

export default AddUser;