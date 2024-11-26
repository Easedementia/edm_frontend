import { Container, Header, ProfileImage, DoctorInfo, Specialization, Rating, IconGroup, Icon, Details, DetailsText, WorkingHours, WorkingHoursHeader, Hours, TimeSlot, TodayDate, ButtonContainer, BookButton } from '../../Styles/DoctorDetailsStyle/DoctorDetailsStyle'
import UserNavbar from '../Navbar/UserNavbar'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import { baseURL } from '../../api/api';
import axios from 'axios';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import doctordetailsicon1 from '../../assets/images/doctordetailsicon1.svg'
import doctordetailsicon2 from '../../assets/images/doctordetailsicon2.svg'
import doctordetailsicon3 from '../../assets/images/doctordetailsicon3.svg'




const DoctorDetails = () => {
  const user = useSelector((state) => state.user.user)
  const navigate = useNavigate();
  const {id} = useParams();
  const [doctor, setDoctor] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filteredTimeSlots, setFilteredTimeSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const today = new Date();
  const userID = user.user.id;
  const user_name = user.user.fullname;
  const user_email = user.user.email;

 



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
      const dayOfWeek = moment(selectedDate).format('dddd'); 
      const filteredSlots = timeSlots.filter(slot => slot.day === dayOfWeek);
      setFilteredTimeSlots(filteredSlots);
    }, [selectedDate, timeSlots]);


    const handleSlotClick = (slot) => {
      if (slot.is_booked) return;
      if (selectedSlot === slot.id) {
        setSelectedSlot(null);
      } else {
        setSelectedSlot(slot.id);
      }
    };  
    


    if (!doctor) {
      return <div>Loading...</div>;
    }


    const handleBookAppointment = () => {
      if (!selectedSlot) {
        toast.warning("Please select a time slot before booking!");
        return; 
      }

      if (!selectedDate) {
        toast.warning("Please select a date before booking!");
        return
      }


      const appointmentData = {
        user: userID,
        user_name: user_name,
        user_email: user_email,
        doctor: doctor.id,
        doctor_name: doctor.doctor_name,
        consulting_fee: doctor.consulting_fee,
        date: moment(selectedDate).format('YYYY-MM-DD'),
        time_slot: selectedSlot,
        is_booked: false,
      };


      axios.post(`${baseURL}/create-appointment/`, appointmentData)
      .then(response => {
        const { appointment_id, details } = response.data;
        navigate('/doctor-consulting/booking-confirmation/', {
          state: {
            appointmentId: appointment_id,
            username: user.fullname,
            email: user.email,
            phone: user.mobile,
            doctor_id: doctor.id,
            doctorName: doctor.doctor_name,
            consultingFee: doctor.consulting_fee,
            selectedDate: moment(selectedDate).format('MMMM D, YYYY'),
            selectedSlot: filteredTimeSlots.find(slot => slot.id === selectedSlot),
            ...details
          }
        });
      })
      .catch(error => {
        console.error("There was an error booking the appointment!", error);
        toast.error("Failed to book the appointment. Please try again.");
      });
  };


    

    
  return (
    <>
    <UserNavbar/>
    <Container>
      <Header>
      <ProfileImage src={doctor.profile_picture} alt="Doctor Profile" />
        <DoctorInfo>
          <h2>{doctor.doctor_name}</h2>
          <Specialization>{doctor.specialization}</Specialization>
          <Rating>4.9⭐<span>{doctor.schedule}</span> </Rating>
        </DoctorInfo>
        <IconGroup>
          <Icon>
            <img src={doctordetailsicon1} alt="Comment Icon" />
          </Icon>
          <Icon>
            <img src={doctordetailsicon2} alt="Phone Icon" />
          </Icon>
          <Icon>
            <img src={doctordetailsicon3} alt="Video Icon" />
          </Icon>
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
            <div className='calendar-icon' />
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="MMMM d, yyyy"
              minDate={today}
              onKeyDown={(e) => e.preventDefault()}
            />
          </TodayDate>
        </WorkingHoursHeader>
        <Hours>
            {filteredTimeSlots.length > 0 ? (
              filteredTimeSlots.map(slot => (
                <TimeSlot key={slot.id} available={!slot.is_booked} selected={selectedSlot === slot.id} onClick={()=>handleSlotClick(slot)} >
                  {moment(slot.start_time, 'HH:mm:ss').format('h:mm A')}
                </TimeSlot>
              ))
            ) : (
              <div style={{ textAlign: 'center', width: '100%', marginTop:'30px' }}>No time slots available for the selected date.</div>
            )}
          </Hours>
          <ButtonContainer>
            <BookButton onClick={handleBookAppointment} disabled={filteredTimeSlots.length === 0}>Book an Appointment</BookButton>
          </ButtonContainer>
      </WorkingHours>
    </Container>
    <Footer/>
    </>
  )
}

export default DoctorDetails