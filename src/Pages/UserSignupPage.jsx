import { Container, LeftSide, RightSide, MainTitle, TitleSpan, Subtitle, Description, FormWrapper, FormTitle, Icon, KnowMoreButton, Form, Label, Input, ButtonContainer, Button, ArrowIcon } from '../Styles/UserSignup/UserSignupStyle'
// import user_icon from '../assets/images/user_icon.svg'
import axios from 'axios' 
import {useNavigate} from 'react-router-dom'
import {baseURL} from '../api/api'
import { useState } from 'react'
// import arrow from '../assets/images/arrow.svg'
import UserNavbar from '../Components/Navbar/UserNavbar'
import { toast } from 'react-toastify'
import { Helmet } from 'react-helmet-async'

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
        toast.error('Full name is required')
      }
      if (email.trim() === ''){
        setEmailError('Email is required');
        toast.error('Email is required')
      }
      if (mobile.trim() === ''){
        setMobileError('Mobile is required');
        toast.error('Mobile is required')
      }
      if (password.trim() === ''){
        setPasswordError('Password is required');
        toast.error('Password is required')
      }
      if (confirmPassword.trim() === ''){
        setConfirmPasswordError('Confirm password is required');
        toast.error('Please confirm the password')
      }
    } else if (password != confirmPassword) {
      setConfirmPasswordError('Password do not match');
      toast.error('Password do not match!')
    }
    else {
      axios.post(`${baseURL}/signup/`, {
        fullname: fullname,
        email: email,
        mobile: mobile,
        password: password,
      }).then((response) => {
        const usermail = response.data.email;
        localStorage.setItem('usermail', usermail)
        navigator('/verify-otp');
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
    <>
    <Helmet>
      <title>Sign Up | Join Ease Dementia for Personalized Care</title>
      <meta name="description" content="Create a new account with Ease Dementia and access personalized dementia care solutions. Sign up today for innovative healthcare support."/>
      <meta name="keywords" content="Sign up, Ease Dementia register, dementia care account, healthcare login, caregiver support, dementia solutions"/>
      <meta name="author" content="Ease Dementia Technologies Pvt Ltd"/>
      <meta name="robots" content="index, follow"/>

      
      <meta property="og:title" content="Sign Up | Join Ease Dementia for Personalized Care"/>
      <meta property="og:description" content="Join Ease Dementia today for access to personalized dementia care and support. Sign up now for innovative healthcare solutions."/>
      <meta property="og:image" content="https://d2mzeyyrjif26w.cloudfront.net/assets/images/user_icon_compressed.png"/>
      <meta property="og:url" content="https://easedementia.com/signup"/>
      <meta property="og:type" content="website"/>

      
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content="Sign Up | Join Ease Dementia for Personalized Care"/>
      <meta name="twitter:description" content="Create a new account with Ease Dementia and gain access to dementia care resources, caregiver support, and healthcare solutions."/>
      <meta name="twitter:image" content="https://d2mzeyyrjif26w.cloudfront.net/assets/images/user_icon_compressed.png"/>
      <meta name="twitter:url" content="https://easedementia.com/signup"/>

      
      <link rel="canonical" href="https://easedementia.com/signup"/>
      <link rel="icon" href="https://d2mzeyyrjif26w.cloudfront.net/assets/images/favicon.png" type="image/png" />
    </Helmet>
    <UserNavbar/>
    <Container>
        <LeftSide>
        <MainTitle>
          <TitleSpan>Create</TitleSpan><br />
          <TitleSpan>New Account</TitleSpan>
        </MainTitle>
        <Subtitle>Already Registered? <a href="/login">Login</a></Subtitle>
        <Description>Join us today to access personalized care and innovative solutions designed to support your journey toward better well-being!</Description>
        <KnowMoreButton>
            Know More
            <ArrowIcon src="https://d2mzeyyrjif26w.cloudfront.net/assets/compressed-images/arrow_compressed-min.png" alt="Arrow Icon" />
        </KnowMoreButton>
        </LeftSide>
        <RightSide>
        <FormWrapper>
            <FormTitle>
            Sign Up
            <Icon src="https://d2mzeyyrjif26w.cloudfront.net/assets/compressed-images/user_icon_compressed-min.png" alt="User Icon" />
            </FormTitle>
            <Form>
            <Label htmlFor="fullName">FULL NAME</Label>
            <Input label='Full Name' id="fullName" type="text" placeholder="full name" value={fullname}
            onChange={changeFullname} className={fullnameError ? 'error':''} />
            

            <Label htmlFor="email">EMAIL</Label>
            <Input label='Email' id="email" type="email" placeholder="email" value={email}
            onChange={changeEmail} className={emailError ? 'error':''} />
            

            <Label htmlFor="mobileNo">MOBILE NO</Label>
            <Input label='Mobile' id="mobileNo" type="text" placeholder="mobile No" value={mobile}
            onChange={changeMobile} className={mobileError ? 'error':''} />
            

            <Label htmlFor="password">PASSWORD</Label>
            <Input label='Password' id="password" type="password" placeholder="password" value={password}
            onChange={changePassword} className={passwordError ? 'error':''} />
            
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
    </>
  )
}

export default UserSignupPage