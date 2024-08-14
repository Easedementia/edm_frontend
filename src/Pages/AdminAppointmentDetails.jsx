import AdminNavbar from "../Components/AdminSide/AdminNavbar"
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useState, useEffect } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import { baseURL } from "../api/api";


const AdminAppointmentDetails = () => {
    const [appointments, setAppointments] = useState([]);
    console.log("Appointments:", appointments);

    useEffect(() => {
        const fetchAppointments = async () => {
            try{
                const response = await axios.get(`${baseURL}/admin-side/appointments-list/`);
                setAppointments(response.data);
            } catch (error) {
                console.log('There was an error fetching the appointments!', error);
                toast.error('There was an error fetching the appointments!');
            }
        };
        fetchAppointments();
    },[]);



    const handleStatusChange = async (id, newStatus) => {
        try{
            await axios.put(`${baseURL}/admin-side/update-appointment-status/${id}`, {
                status: newStatus,
            });
            setAppointments(preAppointments =>
                preAppointments.map(appointment =>
                    appointment.id === id ? {...appointment, status: newStatus} : appointment
                )
            );
        } catch (error) {
            console.log('There was an error in updating the status!', error);
        }
    };



    const getStatusStyle = (status) => {
        switch (status) {
            case 'Pending':
                return {color: 'orange'};
            
            case 'Completed':
                return {color: 'green'};

            case 'Cancelled':
                return {color: 'red'};

            default:
                return {};
        }
    };


    function convertTo12HourFormat(timeString) {
        let [hours, minutes] = timeString.split(':');
        hours = parseInt(hours, 10);
    
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert 0 to 12 for midnight case
        return `${hours}:${minutes} ${ampm}`;
    }


    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() returns month from 0-11
        const year = date.getFullYear();
        
        return `${day}/${month}/${year}`;
    }
    
    

  return (
    <>
    <AdminNavbar/>
    <h1 style={{marginTop:'135px', color:'black', fontFamily:'Poppins'}} >Appointment Details</h1>
    <MDBTable align='middle' style={{ marginTop: '30px' }}>
        <MDBTableHead>
            <tr>
                <th scope='col' style={{color:'#232121'}}>User Name</th>
                <th scope='col' style={{color:'#232121'}}>User Email</th>
                <th scope='col' style={{color:'#232121'}}>Doctor Name</th>
                <th scope='col' style={{color:'#232121'}}>Order Date</th>
                <th scope='col' style={{color:'#232121'}}>Time Slot Date</th>
                <th scope='col' style={{color:'#232121'}}>Start Time</th>
                <th scope='col' style={{color:'#232121'}}>Payment Status</th>
                <th scope='col' style={{color:'#232121'}}>Status</th>
            </tr>
        </MDBTableHead>
        <MDBTableBody>
            {Array.isArray(appointments) && appointments.length > 0 ? (
                appointments.slice().reverse().map((appointment) => (
                    <tr key={appointment.id}>
                        <td>{appointment.user_name}</td>
                        <td>{appointment.user_email}</td>
                        <td>{appointment.doctor_name}</td>
                        <td>{formatDate(appointment.order_date)}</td>
                        <td>{formatDate(appointment.time_slot_date)}</td>
                        <td>{convertTo12HourFormat(appointment.time_slot_start_time)}</td>
                        <td style={{color: appointment.isPaid ? 'green' : 'red'}} >{appointment.isPaid ? 'Paid' : 'Not Paid'}</td>
                        <td>
                            <select
                                value={appointment.status}
                                onChange={(e) => handleStatusChange(appointment.id, e.target.value)}
                                style={getStatusStyle(appointment.status)}
                            >
                                <option value="Pending" style={{ color: 'orange' }}>Pending</option>
                                <option value="Completed" style={{ color: 'green' }}>Completed</option>
                                <option value="Cancelled" style={{ color: 'red' }}>Cancelled</option>
                            </select>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan="8">No appointments available</td>
                </tr>
            )}
        </MDBTableBody>
    </MDBTable>
    </>
  )
}

export default AdminAppointmentDetails