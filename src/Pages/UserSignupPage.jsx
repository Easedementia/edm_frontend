import { Container, LeftSide, RightSide, MainTitle, TitleSpan, Subtitle, Description, FormWrapper, FormTitle, Icon, KnowMoreButton, Form, Label, Input, ButtonContainer, Button } from '../Styles/UserSignup/UserSignupStyle'
import user_icon from '../assets/images/user_icon.svg'
import axios from 'axios' 
import {useNavigate} from 'react-router-dom'
import {baseURL} from '../api/api'
import { useState } from 'react'

const UserSignupPage = () => {
  const navigator = useNavigate();

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const [fullnameError, setFullnameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');


  const changeFullname = (event) =>{
    setFullname(event.target.value);
    console.log("----"+fullname)
    setFullnameError('');
  }

  
  const changeEmail = (event) =>{
    const emailValue = event.target.value;
    setEmail(emailValue);
    console.log("-----"+email)
    
    if (!isValidEmail(emailValue)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };


  // Email validation function
  const isValidEmail = (email) => {
    // You can use a regular expression or any other method for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };



  const changeMobile = (event) =>{
    setMobile(event.target.value);
    console.log("----"+mobile)
    setMobileError('')
  }


  const changePassword = (event) =>{
    setPassword(event.target.value);
    console.log("----"+password)
    setPasswordError('');
  };


  const changeConfirmPassword = (event) =>{
    setConfirmPassword(event.target.value);
    console.log("-----"+confirmPassword)
    setPasswordError('');
  }



  const handleSubmit = (event) => {
    event.preventDefault();

    if (fullname.trim()==='' || email.trim()==='' || mobile.trim()==='' || password.trim()==='' || confirmPassword.trim()==='') {
      if (fullname.trim() === ''){
        setFullnameError('Full name is required');
      }
      if (email.trim() === ''){
        setEmailError('Email is required');
      }
      if (mobile.trim() === ''){
        setMobileError('Mobile is required');
      }
      if (password.trim() === ''){
        setPasswordError('Password is required');
      }
      if (confirmPassword.trim() === ''){
        setConfirmPasswordError('Confirm password is required');
      }
    } else if (password != confirmPassword) {
      setConfirmPasswordError('Password do not match');
    }
    else {
      axios.post(`${baseURL}/signup/`, {
        fullname: fullname,
        email: email,
        mobile: mobile,
        password: password
      }).then((response) => {
        const usermail = response.data.email;
        localStorage.setItem('usermail', usermail)
        navigator('/login');
      }).catch((error) =>{
        if (error.code === 'ERR_BAD_REQUEST') {
          setEmailError(error.response.data.email ? error.response.data.email : '')
          setPasswordError(error.response.data.password ? error.response.data.password : '')
          setFullnameError(error.response.data.fullname ? error.response.data.fullname : '')
        }
      });
    }
  }



  return (
    <Container>
        <LeftSide>
        <MainTitle>
          <TitleSpan>Create</TitleSpan><br />
          <TitleSpan>New Account</TitleSpan>
        </MainTitle>
        <Subtitle>Already Registered? <a href="/login">Login</a></Subtitle>
        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean semper mauris.</Description>
        <KnowMoreButton>
            Know More
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </KnowMoreButton>
        </LeftSide>
        <RightSide>
        <FormWrapper>
            <FormTitle>
            Sign Up
            <Icon src={user_icon} alt="User Icon" />
            </FormTitle>
            <Form>
            <Label htmlFor="fullName">FULL NAME</Label>
            <Input label='Full Name' id="fullName" type="text" placeholder="full name" value={fullname}
            onChange={changeFullname} className={fullnameError ? 'error':''} />
            {fullnameError && <p className={'error-message'}>{fullnameError}</p>}
            

            <Label htmlFor="email">EMAIL</Label>
            <Input label='Email' id="email" type="email" placeholder="email" value={email}
            onChange={changeEmail} className={emailError ? 'error':''} />
            {emailError && <p className={'error-message'}>{emailError}</p>}
            

            <Label htmlFor="mobileNo">MOBILE NO</Label>
            <Input label='Mobile' id="mobileNo" type="text" placeholder="mobile No" value={mobile}
            onChange={changeMobile} className={mobileError ? 'error':''} />
            {mobileError && <p className={'error-message'}>{mobileError}</p>}
            

            <Label htmlFor="password">PASSWORD</Label>
            <Input label='Password' id="password" type="password" placeholder="password" value={password}
            onChange={changePassword} className={passwordError ? 'error':''} />
            {passwordError && <p className={'error-message'}>{passwordError}</p>}
            
            <Label htmlFor="confirmPassword">CONFIRM PASSWORD</Label>
            <Input label='confirmPassword' id="confirmPassword" type="password" placeholder="confirm password" value={confirmPassword}
            onChange={changeConfirmPassword} className={confirmPasswordError ? 'error':''} />

            <ButtonContainer>
              <Button type='submit' onClick={handleSubmit} >
                Sign Up
                </Button>
            </ButtonContainer>
            </Form>
        </FormWrapper>
        </RightSide>
    </Container>
  )
}

export default UserSignupPage