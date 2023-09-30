
import {Table,TableHead,TableRow,TableCell, TableBody,TableBody} from '@mui/material'
import { getUsers } from '../services/Apis';

const AllUser = () =>
{
    return (
       <Table>
        <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>

        </TableBody>
       </Table>
    )
}

export default AllUser;