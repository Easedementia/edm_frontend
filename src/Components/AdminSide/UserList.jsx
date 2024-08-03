import { MDBTable, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseURL } from '../../api/api';
import { TableContainer, StyledTableHead, StyledTableRow, Heading } from '../../Styles/AdminSideStyle/UserListStyle'

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await axios.get(`${baseURL}/admin-side/user-list/`);
            console.log(response.data)
            setUsers(response.data);
          } catch (error) {
            console.error('Error fetching users:', error);
          }
        };
    
        fetchUsers();
      }, []);


  return (
    <TableContainer>
        <Heading>User List</Heading>
        <MDBTable bordered>
        <StyledTableHead>
            <tr>
            <th scope='col'>#</th>
            <th scope='col'>Full Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Mobile</th>
            <th scope='col'>Active Status</th>
            </tr>
        </StyledTableHead>
        <MDBTableBody>
            {users.map((user, index) => (
            <StyledTableRow key={user.email} isActive={user.is_active}>
                <th scope='row'>{index + 1}</th>
                <td>{user.fullname}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>{user.is_active ? 'Active' : 'Not Active'}</td>
            </StyledTableRow>
            ))}
        </MDBTableBody>
        </MDBTable>
  </TableContainer>
        
  )
}

export default UserList