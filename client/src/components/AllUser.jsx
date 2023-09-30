import { useEffect , useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody,styled, Button } from '@mui/material';
import { getUsers } from '../services/Apis';
import { Link } from 'react-router-dom';

//styled

const StyledTable = styled(Table)`
     width:90%;
     margin: 50px auto 0 auto;
`
const THead = styled(TableRow)`
background:#000000;
& > th {
    color :#fff;
    font-size: 20px;
}
`

const Tbody = styled(TableRow)`
   & > td {
    font-size : 20px;
   }
`;
const AllUser = () => {

   const [users , setUsers] = useState([]);
   
    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }
    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                </THead>
            </TableHead>
            <TableBody>
                 {
                    users.map( user => (
                        <Tbody key={user._id}>
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant='contained' color='primary' style={{marginRight :10}} component = {Link} to={`/edit/${user._id}`}>Edit</Button>
                                <Button variant='contained' color='secondary'>Delete</Button>
                            </TableCell>
                        </Tbody>
                    ))
                 }
            </TableBody>
        </StyledTable>
    )
}

export default AllUser;