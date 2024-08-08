import UserNavbar from "../Navbar/UserNavbar"
import { Container, Header, Detail, DetailLabel, DetailValue, ButtonContainer, ConfirmButton } from '../../Styles/DoctorDetailsStyle/BookingConfirmationStyle'
import { useLocation } from "react-router-dom"
import axios from 'axios';
import moment from 'moment';
import { useSelector } from "react-redux";
import { baseURL } from "../../api/api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



const BookingConfirmation = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const user = useSelector((state) => state.user.user);
    const user_name = user.user.fullname;
    const user_email = user.user.email;
    const user_mobile = user.user.mobile;
    const user_id = user.user.id;
    console.log("USER ID:", user_id);
    console.log("user_name:", user_name);
    console.log("user_email:", user_email);
    console.log("user_mobile:", user_mobile);
    
    const { appointmentId, doctor_id, doctorName, selectedDate, selectedSlot, consultingFee } = state;
    console.log("Appointment ID:", appointmentId)
    console.log("Consulting fee:", consultingFee)
    console.log("Doctor ID:", doctor_id)
    

    
    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      };
    }, []);


  
    if (!user) {
      return <div>Loading...</div>;
    }
    console.log("USER:", user)


    


    const showRazorpay = async () => {
      try {
        const formattedDate = moment(selectedDate, 'MMMM DD, YYYY').format('YYYY-MM-DD');


        const bodyData = {
          user_id,
          user_name,
          user_email,
          user_mobile,
          doctor_id,
          consulting_fee: consultingFee,
          doctor_name: doctorName,
          selected_date: formattedDate,
          selected_day: selectedSlot.day,
          selected_start_time: selectedSlot.start_time,
          selected_end_time: selectedSlot.end_time,
        };
  
        
        const response = await axios.post(
          `${baseURL}/pay/${appointmentId}/`,
          bodyData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log('***RESPONSE***',response.data);

  
  
        const options = {
          key: 'rzp_test_ZQL2ChZEK9SL7A', 
          key_secret: 'qiIPMJQP7dND0mDggXkRa3Xr',
          amount: response.data.payment.amount,
          currency: "INR",
          name: "Professional Booking",
          description: `Payment for Easedementia: ${consultingFee} INR`,
          image: "", // Add image URL
          handler: function (response) {
            handlePaymentSuccess(response); 
  
          },
          prefill: {
            name: "User's name",
            contact: "User's phone",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#5517A8",
          },
          order_id: response.data.payment.id,
        };
  
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      } catch (error) {
        console.log(error);
      }
    };


    const handlePaymentSuccess = async (response) => {
      const order_id = response.razorpay_payment_id; // Use razorpay_payment_id as the order ID
      console.log(order_id);
      
      try {
        const bodyData = {
          response: JSON.stringify(response),
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
        };
    
        // Check if 'response.data' is defined before accessing 'response.data.payment'
        if (response.data && response.data.payment) {
          bodyData.payment = JSON.stringify(response.data.payment);
        }
    
        await axios.post(`${baseURL}/payment/success/`, bodyData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        navigate("/success", {
          state: {
            id: appointmentId,
            order_user: user_name,
            order_doctor: doctorName,
            order_amount: consultingFee,
            order_payment_id: order_id, 
          },
        });
      } catch (error) {
        console.log(error);
      }
    };
    



  return (
    <>
    <UserNavbar/>
    <Container>
      <Header>Booking Confirmation</Header>
      <Detail>
        <DetailLabel>Name:</DetailLabel>
        <DetailValue>{user_name}</DetailValue>
      </Detail>
      <Detail>
        <DetailLabel>Email:</DetailLabel>
        <DetailValue>{user_email}</DetailValue>
      </Detail>
      <Detail>
        <DetailLabel>Phone:</DetailLabel>
        <DetailValue>{user_mobile}</DetailValue>
      </Detail>
      <Detail>
        <DetailLabel>Doctor:</DetailLabel>
        <DetailValue>{doctorName}</DetailValue>
      </Detail>
      <Detail>
        <DetailLabel>Date:</DetailLabel>
        <DetailValue>{selectedDate}</DetailValue>
      </Detail>
      <Detail>
        <DetailLabel>Time Slot:</DetailLabel>
        <DetailValue>{moment(selectedSlot.start_time, 'HH:mm:ss').format('h:mm A')}</DetailValue>
      </Detail>
      <ButtonContainer>
        <ConfirmButton onClick={showRazorpay}>MAKE PAYMENT</ConfirmButton>
      </ButtonContainer>
    </Container>
    </>
    
  )
}

export default BookingConfirmation