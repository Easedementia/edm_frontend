import { MDBTable, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseURL } from '../../api/api';
import { TableContainer, StyledTableHead, StyledTableRow, Heading, ActionButton, ActiveStatus } from '../../Styles/AdminSideStyle/UserListStyle'

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



      const handleToggleBlock = async (user) => {
        try {
          const updatedUser = { ...user, is_blocked: !user.is_blocked };
          await axios.patch(`${baseURL}/admin-side/user-update/${user.email}/`, updatedUser);
          setUsers((prevUsers) =>
            prevUsers.map((u) => (u.email === user.email ? updatedUser : u))
          );
        } catch (error) {
          console.error('Error updating user status:', error);
        }
      };


  return (
    <TableContainer>
        <Heading>User List</Heading>
        <MDBTable bordered>
        <StyledTableHead>
            <tr>
            <th scope='col'>No</th>
            <th scope='col'>Full Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Mobile</th>
            <th scope='col'>Active Status</th>
            <th scope='col'>Actions</th>
            </tr>
        </StyledTableHead>
        <MDBTableBody>
            {users.map((user, index) => (
            <StyledTableRow key={user.email} isActive={user.is_active}>
                <th scope='row'>{index + 1}</th>
                <td>{user.fullname}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>
                <ActiveStatus isActive={!user.is_blocked}>
                  {user.is_blocked ? 'Not Active' : 'Active'}
                </ActiveStatus>
              </td>
                <td>
                  <ActionButton
                    color={user.is_blocked ? 'green' : 'red'}
                    onClick={() => handleToggleBlock(user)}
                  >
                    {user.is_blocked ? 'Enable' : 'Disable'}
                  </ActionButton>
              </td>
            </StyledTableRow>
            ))}
        </MDBTableBody>
        </MDBTable>
  </TableContainer>
        
  )
}

export default UserList