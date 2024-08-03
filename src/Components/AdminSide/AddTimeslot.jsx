import { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { baseURL } from '../../api/api';
import { toast } from 'react-toastify';
import AdminNavbar from './AdminNavbar';

const AddTimeslot = () => {
    const [doctors, setDoctors] = useState([]);
    const [doctor, setDoctor] = useState('');
    const [day, setDay] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');


    const [doctorError, setDoctorError] = useState('');
    const [dayError, setDayError] = useState('');
    const [startTimeError, setStartTimeError] = useState('');
    const [endTimeError, setEndTimeError] = useState('');



    const handleSubmit = async (e) => {
        e.preventDefault();

        setDoctorError('');
        setDayError('');
        setStartTimeError('');
        setEndTimeError('');


        let valid = true;

        if (!doctor.trim()) {
            setDoctorError('Doctor is required!');
            toast.warning('Doctor is required!');
            valid=false;
        }

        if (!day.trim()) {
            setDayError('Day is required!');
            toast.warning('Day is required!');
            valid=false;
        }

        if (!startTime.trim()) {
            setStartTimeError('Start time is required!');
            toast.warning('Start time is required!');
            valid=false;
        }

        if (!endTime.trim()) {
            setEndTimeError('End time is required!');
            toast.warning('End time is required!');
            valid=false;
        }

        if (!valid) {
            return;
        }

        const formData = new FormData();
        formData.append('doctor', doctor);
        formData.append('day', day);
        formData.append('start_time', startTime);
        formData.append('end_time', endTime);


        try {
            const response = await axios.post(`${baseURL}/admin-side/add-timeslots/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                  },
            });
            console.log('Time slot added successfully', response.data);
            toast.success('Time slot added successfully');

            setDoctor('');
            setDay('');
            setStartTime('');
            setEndTime('');
        } catch (error) {
            console.error('There was an error adding the time slot!', error);
            toast.error('There was an error adding the time slot!')
        }
    }
    


    useEffect(() => {
        axios.get(`${baseURL}/admin-side/doctors-list/`)
          .then(response => {
            setDoctors(response.data)
            console.log('***RESPONSE DATA***', response.data)
          })
          .catch(error => {
            console.error("There was an error fetching the doctors!", error);
            toast.error("There was an error fetching the doctors!");
          });
      }, []);



      

  return (
    <>
        <AdminNavbar/>
        <Container>
            <h1 className="mb-4" style={{color:'black'}} >Add Time Slot</h1>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formDoctor">
                        <Form.Label style={{color:'black'}} >Doctor</Form.Label>
                        <Form.Control
                            as="select"
                            name="doctor"
                            value={doctor}
                            onChange={(e) => setDoctor(e.target.value)}
                            required
                            className={doctorError ? 'error' : ''}
                        >
                            <option value="">Select a doctor</option>
                            {doctors.map(doctor => (
                                <option key={doctor.id} value={doctor.id}>{doctor.doctor_name}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formDay">
                        <Form.Label style={{color:'black'}}>Day</Form.Label>
                        <Form.Control
                            as="select"
                            name="day"
                            value={day}
                            onChange={(e) => setDay(e.target.value)}
                            required
                            className={dayError ? 'error' : ''}
                        >
                            <option value="">Select a day</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                            <option value="Sunday">Sunday</option>
                        </Form.Control>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formStartTime">
                        <Form.Label style={{color:'black'}}>Start Time</Form.Label>
                        <Form.Control
                            type="time"
                            name="start_time"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                            required
                            className={startTimeError ? 'error' : ''}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formEndTime">
                        <Form.Label style={{color:'black'}}>End Time</Form.Label>
                        <Form.Control
                            type="time"
                            name="end_time"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                            required
                            className={endTimeError ? 'error' : ''}
                        />
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit" className="mt-3">
                    Add Time Slot
                </Button>
            </Form>
        </Container>
    </>
    
  )
}

export default AddTimeslot