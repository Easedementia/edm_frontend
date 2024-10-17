import { Container, LeftSide, RightSide, MainTitle, TitleSpan, Subtitle, Description, FormWrapper, FormTitle, Icon, KnowMoreButton, Form, Label, Input, ButtonContainer, Button } from '../Styles/UserSignup/UserSignupStyle'
import user_icon from '../assets/images/user_icon.svg'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {baseURL} from '../api/api'
import { useState } from 'react'
import styled from 'styled-components'

const DoctorSignupPage = () => {
    const navigator = useNavigate();
  
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [schedule, setSchedule] = useState('');
    const [details, setDetails] = useState('');
    const [consultingFee, setConsultingFee] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);
    const [category, setCategory] = useState('doctor'); // default category
  
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const [fullnameError, setFullnameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [mobileError, setMobileError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [consultingFeeError, setConsultingFeeError] = useState('');
    const [profilePictureError, setProfilePictureError] = useState('');
  
    const changeFullname = (event) => {
      setFullname(event.target.value);
      setFullnameError('');
    };
  
    const changeEmail = (event) => {
      const emailValue = event.target.value;
      setEmail(emailValue);
      if (!isValidEmail(emailValue)) {
        setEmailError('Please enter a valid email address');
      } else {
        setEmailError('');
      }
    };
  
    const changeMobile = (event) => {
      setMobile(event.target.value);
      setMobileError('');
    };
  
    const changeSpecialization = (event) => {
      setSpecialization(event.target.value);
    };
  
    const changeSchedule = (event) => {
      setSchedule(event.target.value);
    };
  
    const changeDetails = (event) => {
      setDetails(event.target.value);
    };
  
    const changeConsultingFee = (event) => {
      setConsultingFee(event.target.value);
    };
  
    const changeProfilePicture = (event) => {
      setProfilePicture(event.target.files[0]);
    };
  
    const changePassword = (event) => {
      setPassword(event.target.value);
      setPasswordError('');
    };
  
    const changeConfirmPassword = (event) => {
      setConfirmPassword(event.target.value);
      setConfirmPasswordError('');
    };
  
    // Email validation function
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (fullname.trim() === '' || email.trim() === '' || mobile.trim() === '' || specialization.trim() === '' || schedule.trim() === '' || details.trim() === '' || consultingFee.trim() === '' || !profilePicture || password.trim() === '' || confirmPassword.trim() === '') {
        if (fullname.trim() === '') setFullnameError('Full name is required');
        if (email.trim() === '') setEmailError('Email is required');
        if (mobile.trim() === '') setMobileError('Mobile is required');
        if (specialization.trim() === '') setFullnameError('Specialization is required');
        if (schedule.trim() === '') setFullnameError('Schedule is required');
        if (details.trim() === '') setFullnameError('Details are required');
        if (consultingFee.trim() === '') setConsultingFeeError('Consulting fee is required');
        if (!profilePicture) setProfilePictureError('Profile picture is required');
        if (password.trim() === '') setPasswordError('Password is required');
        if (confirmPassword.trim() === '') setConfirmPasswordError('Confirm password is required');
      } else if (password !== confirmPassword) {
        setConfirmPasswordError('Passwords do not match');
      } else {
        const formData = new FormData();
        formData.append('fullname', fullname);
        formData.append('email', email);
        formData.append('mobile', mobile);
        formData.append('specialization', specialization);
        formData.append('schedule', schedule);
        formData.append('details', details);
        formData.append('consulting_fee', consultingFee);
        formData.append('profile_picture', profilePicture);
        formData.append('category', category); // either 'doctor' or 'geriatric_counselor'
        formData.append('password', password);
  
        axios.post(`${baseURL}/doctor-signup/`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((response) => {
          const doctorEmail = response.data.email;
          localStorage.setItem('doctorEmail', doctorEmail);
          navigator('/verify-otp');
        })
        .catch((error) => {
          if (error.code === 'ERR_BAD_REQUEST') {
            setEmailError(error.response.data.email ? error.response.data.email : '');
            setPasswordError(error.response.data.password ? error.response.data.password : '');
            setFullnameError(error.response.data.fullname ? error.response.data.fullname : '');
          }
        });
      }
    };

    const Select = styled.select`
        width: 100%;
        padding: 12px 16px;
        margin: 8px 0;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #f9f9f9;
        outline: none;
        transition: border-color 0.3s ease;

        &:focus {
            border-color: #007bff;
        }
        `;

        const TextArea = styled.textarea`
        width: 100%;
        height: 120px;
        padding: 12px 16px;
        margin: 8px 0;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #f9f9f9;
        outline: none;
        transition: border-color 0.3s ease;
        resize: vertical;

        &:focus {
            border-color: #007bff;
        }
        `;
  
    return (
      <Container>
        <LeftSide>
          <MainTitle>
            <TitleSpan>Create</TitleSpan><br />
            <TitleSpan>Doctor Account</TitleSpan>
          </MainTitle>
          <Subtitle>Already Registered? <a href="/doctor-login">Login</a></Subtitle>
          <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean semper mauris.</Description>
          <KnowMoreButton>
            Know More
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </KnowMoreButton>
        </LeftSide>
        <RightSide>
          <FormWrapper>
            <FormTitle>
              Sign Up
              <Icon src={user_icon} alt="User Icon" />
            </FormTitle>
            <Form onSubmit={handleSubmit}>
              <Label htmlFor="fullName">FULL NAME</Label>
              <Input label='Full Name' id="fullName" type="text" placeholder="Full Name" value={fullname} onChange={changeFullname} className={fullnameError ? 'error' : ''} />
              {fullnameError && <p className={'error-message'}>{fullnameError}</p>}
  
              <Label htmlFor="email">EMAIL</Label>
              <Input label='Email' id="email" type="email" placeholder="Email" value={email} onChange={changeEmail} className={emailError ? 'error' : ''} />
              {emailError && <p className={'error-message'}>{emailError}</p>}
  
              <Label htmlFor="mobile">MOBILE NO</Label>
              <Input label='Mobile' id="mobile" type="text" placeholder="Mobile No" value={mobile} onChange={changeMobile} className={mobileError ? 'error' : ''} />
              {mobileError && <p className={'error-message'}>{mobileError}</p>}
  
              <Label htmlFor="specialization">SPECIALIZATION</Label>
              <Input label='Specialization' id="specialization" type="text" placeholder="Specialization" value={specialization} onChange={changeSpecialization} />
  
              <Label htmlFor="schedule">SCHEDULE</Label>
              <Input label='Schedule' id="schedule" type="text" placeholder="Schedule" value={schedule} onChange={changeSchedule} />
  
              <Label htmlFor="details">DETAILS</Label>
              <TextArea label='Details' id="details" placeholder="Details" value={details} onChange={changeDetails} />
  
              <Label htmlFor="consultingFee">CONSULTING FEE</Label>
              <Input label='Consulting Fee' id="consultingFee" type="number" placeholder="Consulting Fee" value={consultingFee} onChange={changeConsultingFee} className={consultingFeeError ? 'error' : ''} />
              {consultingFeeError && <p className={'error-message'}>{consultingFeeError}</p>}
  
              <Label htmlFor="profilePicture">PROFILE PICTURE</Label>
              <Input label='Profile Picture' id="profilePicture" type="file" onChange={changeProfilePicture} className={profilePictureError ? 'error' : ''} />
              {profilePictureError && <p className={'error-message'}>{profilePictureError}</p>}
  
              <Label htmlFor="category">CATEGORY</Label>
              <Select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="doctor">Doctor</option>
                <option value="geriatric_counselor">Geriatric Counselor</option>
              </Select>
  
              <Label htmlFor="password">PASSWORD</Label>
              <Input label='Password' id="password" type="password" placeholder="Password" value={password} onChange={changePassword} className={passwordError ? 'error' : ''} />
              {passwordError && <p className={'error-message'}>{passwordError}</p>}
  
              <Label htmlFor="confirmPassword">CONFIRM PASSWORD</Label>
              <Input label='Confirm Password' id="confirmPassword" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={changeConfirmPassword} className={confirmPasswordError ? 'error' : ''} />
              {confirmPasswordError && <p className={'error-message'}>{confirmPasswordError}</p>}
  
              <ButtonContainer>
              <Button type='submit' onClick={handleSubmit} >
                Sign Up
                </Button>
            </ButtonContainer>
            </Form>
          </FormWrapper>
        </RightSide>
      </Container>
    );
  };
  
  export default DoctorSignupPage;
  