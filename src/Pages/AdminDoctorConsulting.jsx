import AdminNavbar from "../Components/AdminSide/AdminNavbar"
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../api/api";


const AdminDoctorConsulting = () => {
    const [doctors, setDoctors] = useState([]);
    console.log("DOCTORS:", doctors);
    const [timeSlots, setTimeSlots] = useState([]);
    console.log("TIME SLOTS:", timeSlots);

    const navigator = useNavigate();

    const handleEditClick = (id) => {
        navigator(`/admin-dashboard/edit-doctor/${id}`);
    }

    useEffect(() => {
        const fetchDoctors = async () => {
            try{
                const response = await axios.get(`${baseURL}/admin-side/doctors-list/`);
                setDoctors(response.data);
            } catch (error) {
                console.log('There was an error fetching the doctors!', error);
            }
        };


        const fetchTimeSlots = async () => {
          try {
              const response = await axios.get(`${baseURL}/admin-side/timeslots-list/`);
              setTimeSlots(response.data);
          } catch (error) {
              console.log('There was an error fetching the time slots!', error);
          }
      };

        fetchDoctors();
        fetchTimeSlots();
    }, []);





  return (
    <>
    <AdminNavbar/>
    <h1 style={{marginTop:'100px', color:'black', fontFamily:'Poppins'}} >Doctors List</h1>
    <MDBTable align='middle' style={{ marginTop: '30px' }}>
        <MDBTableHead>
          <tr>
            <th scope='col'>Profile Picture</th>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Mobile</th>
            <th scope='col'>Specialization</th>
            <th scope='col'>Schedule</th>
            
            <th scope='col'>Consulting Fee</th>
            <th scope='col'>Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {Array.isArray(doctors) && doctors.length > 0 ? (
            doctors.map((doctor) => (
              <tr key={doctor.id}>
                <td>
                  <img
                    src={doctor.profile_picture}
                    alt={doctor.doctor_name}
                    style={{ width: '45px', height: '45px' }}
                    className='rounded-circle'
                  />
                </td>
                <td>{doctor.doctor_name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.mobile}</td>
                <td>{doctor.specialization}</td>
                <td>{doctor.schedule}</td>
                
                <td>{doctor.consulting_fee}</td>
                <td>
                  <MDBBtn color='link' rounded size='sm' onClick={() => handleEditClick(doctor.id)} >
                    Edit
                  </MDBBtn>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">No doctors available</td>
            </tr>
          )}
        </MDBTableBody>
      </MDBTable>   
    <Link to='/admin-dashboard/add-doctor' >
        <Button variant="primary">Add Doctor</Button>{' '}
    </Link>


    <h1 style={{marginTop:'100px', color:'black', fontFamily:'Poppins'}} >Time Slots</h1>
    <MDBTable align='middle' style={{ marginTop: '30px' }}>
      <MDBTableHead>
          <tr>
              <th scope='col'>Doctor Name</th>
              <th scope='col'>Day</th>
              <th scope='col'>Start Time</th>
              <th scope='col'>End Time</th>
              <th scope='col'>Is Booked</th>
          </tr>
      </MDBTableHead>
      <MDBTableBody>
          {Array.isArray(timeSlots) && timeSlots.length > 0 ? (
              timeSlots.map((slot) => (
                  <tr key={slot.id}>
                      <td>{slot.doctor_name}</td>
                      <td>{slot.day}</td>
                      <td>{new Date(`1970-01-01T${slot.start_time}Z`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</td>
                      <td>{new Date(`1970-01-01T${slot.end_time}Z`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</td>
                      <td style={{ color: slot.is_booked ? 'red' : 'green' }}>
                          {slot.is_booked ? 'Booked' : 'Available'}
                      </td>
                  </tr>
              ))
          ) : (
              <tr>
                  <td colSpan="5">No time slots available</td>
              </tr>
          )}
      </MDBTableBody>
  </MDBTable>
    <Link to='/admin-dashboard/add-timeslot' >
        <Button variant="primary">Add Timeslots</Button>{' '}
    </Link>
    
    </>
  )
} 

export default AdminDoctorConsulting