import { Container, Header, ProfileImage, DoctorInfo, Specialization, Rating, IconGroup, Icon, Details, DetailsText, WorkingHours, WorkingHoursHeader, Hours, TimeSlot, TodayDate } from '../../Styles/DoctorDetailsStyle/DoctorDetailsStyle'
import UserNavbar from '../Navbar/UserNavbar'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import { FaCommentDots, FaPhoneAlt, FaVideo } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { baseURL } from '../../api/api';
import axios from 'axios';
import moment from 'moment';




const DoctorDetails = () => {
  const {id} = useParams();
  const [doctor, setDoctor] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filteredTimeSlots, setFilteredTimeSlots] = useState([]);
  const today = new Date();


    useEffect(() => {
      axios.get(`${baseURL}/admin-side/doctors-details/${id}/`)
        .then(response => {
          setDoctor(response.data);
          console.log('RESPONSE DATA:', response.data)
        })
        .catch(error => {
          console.error("There was an error fetching the doctor details!", error);
        });

      axios.get(`${baseURL}/doctor-time-slots/${id}/`)
      .then(response => {
        setTimeSlots(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the timeslots!", error);
      });
  

    }, [id]);


    useEffect(() => {
      const dayOfWeek = moment(selectedDate).format('dddd'); // Get day of the week (e.g., Monday)
      const filteredSlots = timeSlots.filter(slot => slot.day === dayOfWeek);
      setFilteredTimeSlots(filteredSlots);
    }, [selectedDate, timeSlots]);
    


    if (!doctor) {
      return <div>Loading...</div>;
    }

    
  return (
    <>
    <UserNavbar/>
    <Container>
      <Header>
      <ProfileImage src={doctor.profile_picture} alt="Doctor Profile" />
        <DoctorInfo>
          <h2>{doctor.doctor_name}</h2>
          <Specialization>{doctor.specialization}</Specialization>
          <Rating>4.9 <span>⭐</span> {doctor.schedule}</Rating>
        </DoctorInfo>
        <IconGroup>
          <Icon><FaCommentDots /></Icon>
          <Icon><FaPhoneAlt /></Icon>
          <Icon><FaVideo /></Icon>
        </IconGroup>
      </Header>
      <Details>
        <h3>Details</h3>
        <DetailsText>{doctor.details}</DetailsText>
      </Details>
      <WorkingHours>
      <WorkingHoursHeader>
          <h3>Working Hours</h3>
          <TodayDate>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="MMMM d, yyyy"
              minDate={today}
            />
            {/* <span>➡️</span> */}
          </TodayDate>
        </WorkingHoursHeader>
        <Hours>
            {filteredTimeSlots.length > 0 ? (
              filteredTimeSlots.map(slot => (
                <TimeSlot key={slot.id} available={!slot.is_booked}>
                  {moment(slot.start_time, 'HH:mm:ss').format('h:mm A')}
                </TimeSlot>
              ))
            ) : (
              <div style={{ textAlign: 'center', width: '100%', marginTop:'30px' }}>No time slots available for the selected date.</div>
            )}
          </Hours>
      </WorkingHours>
    </Container>
    <Footer/>
    </>
  )
}

export default DoctorDetails