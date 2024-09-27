import { useState } from 'react';
import { Container, FormWrapper, FormTitle, Icon, Form, Label, Input, ButtonContainer, Button, Message } from '../../Styles/UserProfileStyle/OTPVerificationStyle';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import email_icon from '../../assets/images/email_icon.png'
import {baseURL} from '../../api/api';
import { toast } from 'react-toastify';

const OTPVerification = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [message, setMessage] = useState('');
  const navigator = useNavigate();

  const handleOTPChange = (event) => {
    setOtp(event.target.value);
    setOtpError('');
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleVerifyOTP = (event) => {
    event.preventDefault();
    
    axios.post(`${baseURL}/verify-otp/`, { email, otp })
      .then((response) => {
        if (response.data.status === 200) {
          setMessage('OTP verified successfully. Redirecting to login...');
          setTimeout(() => navigator('/login'), 2000); // Redirect to login after 2 seconds
        } else {
          setOtpError(response.data.data);
          toast.error('An error occurred while verifying the OTP.')
        }
      })
      .catch((error) => {
        console.error('Error verifying OTP:', error);
        setOtpError('An error occurred while verifying the OTP.');
        toast.error('An error occurred while verifying the OTP.')
      });
  };

  return (
    <Container>
      <FormWrapper>
        <FormTitle>
          Verify OTP
          <Icon src={email_icon} alt="User Icon" />
        </FormTitle>
        <Form>
          <Label htmlFor="email">EMAIL</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />

          <Label htmlFor="otp">OTP</Label>
          <Input
            id="otp"
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={handleOTPChange}
            className={otpError ? 'error' : ''}
          />
          {otpError && <p className="error-message">{otpError}</p>}
          {message && <Message>{message}</Message>}

          <ButtonContainer>
            <Button type="submit" onClick={handleVerifyOTP}>
              Verify OTP
            </Button>
          </ButtonContainer>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default OTPVerification;
