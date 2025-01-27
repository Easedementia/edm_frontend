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
import doctordetailsicon4 from '../../assets/images/doctordetailsicon4.svg'
import doctordetailsicon5 from '../../assets/images/doctordetailsicon5.svg'
import doctordetailsicon6 from '../../assets/images/doctordetailsicon6.svg'
import CallButton from '../CallUs/CallButton';
import WhatsappButton from '../WhatsappChat/WhatsappButton';




const DoctorDetails = () => {
  const user = useSelector((state) => state.user.user)
  const navigate = useNavigate();
  const {id} = useParams();
  const [doctor, setDoctor] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filteredTimeSlots, setFilteredTimeSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookedTimeSlots, setBookedTimeSlots] = useState([]);
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
      if (!doctor || !doctor.id) return; // Ensure doctor and doctor.id are available
    
      const formattedDate = moment(selectedDate).format('YYYY-MM-DD');
      console.log("Doctor ID***:", doctor.id);
    
      axios
        .get(`${baseURL}/selected-slots/`, {
          params: { doctor_id: doctor.id, date: formattedDate },
        })
        .then((response) => {
          toast.success("success", response.data);
          setBookedTimeSlots(response.data.appointments);
          console.log( response.data);
          console.log("Booked:", bookedTimeSlots);
        })
        .catch((error) => {
          console.error("failed", error);
        });
    
      const dayOfWeek = moment(selectedDate).format('dddd');
      const filteredSlots = timeSlots.filter((slot) => slot.day === dayOfWeek);
      setFilteredTimeSlots(filteredSlots);
    }, [selectedDate, timeSlots, doctor, doctor?.id]); // Use optional chaining to avoid errors
    


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
        console.log("appointment response data:", response.data)
        if (response.data.status == "not available") {
          toast.error(response.data.message)
        } else {
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
        }
        
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
            <img src={doctordetailsicon4} alt="Comment Icon" />
          </Icon>
          <Icon>
            <img src={doctordetailsicon5} alt="Phone Icon" />
          </Icon>
          <Icon>
            <img src={doctordetailsicon6} alt="Video Icon" />
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
            filteredTimeSlots.map((slot) => {
              const isBooked = bookedTimeSlots.includes(slot.id); // Check if the slot is booked
              return isBooked ? (
                <TimeSlot
                  disabled
                  key={slot.id}
                  available={slot.is_booked}
                  selected={selectedSlot === slot.id}
                  onClick={() => handleSlotClick(slot)}
                >
                  {moment(slot.start_time, "HH:mm:ss").format("h:mm A")}
                </TimeSlot>
              ) : (
                <TimeSlot
                  key={slot.id}
                  available={!slot.is_booked}
                  selected={selectedSlot === slot.id}
                  onClick={() => handleSlotClick(slot)}
                >
                  {moment(slot.start_time, "HH:mm:ss").format("h:mm A")}
                </TimeSlot>
              );
            })
          ) : (
            <div
              style={{ textAlign: "center", width: "100%", marginTop: "30px" }}
            >
              No time slots available for the selected date.
            </div>
          )}
        </Hours>;

          <ButtonContainer>
            <BookButton onClick={handleBookAppointment} disabled={filteredTimeSlots.length === 0}>Book an Appointment</BookButton>
          </ButtonContainer>
      </WorkingHours>
    </Container>
    <CallButton/>
    <WhatsappButton/>
    <Footer/>
    </>
  )
}

export default DoctorDetails