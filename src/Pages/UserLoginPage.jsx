import { PageWrapper, LeftSide, RightSide, InfoSection, Title, Subtitle, Description, Button, ArrowIcon, FormWrapper, FormTitle, Icon, Form, Label, Input, ButtonContainer, FormButton } from '../Styles/UserLogin/UserLoginStyle'
import user_icon from '../assets/images/user_icon.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'
import { useDispatch } from 'react-redux'
import { setAccessToken, setUser } from '../Redux/UserSlice'
import { baseURL } from '../api/api'
import { useState } from 'react';
import { toast } from 'react-toastify';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import Cookies from 'js-cookie';


export const UserLoginPage = () => {
    const navigator = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');


    const changeEmail = (event) => {
        setEmail(event.target.value);
        setEmailError('');
    };


    const changePassword = (event) => {
        setPassword(event.target.value);
        setPasswordError('');
    };


    const handleLogin = (event) => {
        event.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password)

        if (email.trim() === '' || password.trim() === '') {
            if (email.trim() === '') {
                setEmailError('Email is required');
            }
            if (password.trim() === '') {
                setPasswordError('Password is required');
            }
        } else{
            axios.post(`${baseURL}/login/`, {
                email: email,
                password: password,
            }, {withCredentials: true})
            .then((response) => {
                console.log('RESPONSE DATA:', response.data)
                
                const accessToken = response.data.data.access;
                const refreshToken = response.data.data.refresh;

                localStorage.setItem('accessToken', response.data.access);
                localStorage.setItem('refreshToken', response.data.refresh);

                Cookies.set('accessToken', accessToken, { expires: 7 });
                Cookies.set('refreshToken', refreshToken, { expires: 7 });


                dispatch(setAccessToken({
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                }));
                dispatch(setUser({
                    user: response.data.user
                }));
                toast.success('Login Successful');
                navigator('/');
            })
            .catch((error) => {
                if (error.response && error.response.status === 401) {
                    setEmailError('Invalid email!');
                    setPasswordError('Invalid password!');
                } else{
                    console.error('Login error', error);
                }
            });
        }
    };

  return (
    <>
    <PageWrapper>
        <LeftSide>
            <InfoSection>
                <Title>Login</Title>
                <Subtitle>Not Registered yet? <a href='#'>Sign Up</a></Subtitle>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Description>

                <Button>
                    Know More <ArrowIcon>→</ArrowIcon>
                </Button>
            </InfoSection>
        </LeftSide>
        
        <RightSide>
            <FormWrapper>
                <FormTitle>
                    Login <Icon src={user_icon} alt='User-Icon' />
                </FormTitle>
                <Form>
                    <Label htmlFor='email' >Email Id</Label>
                    <Input label='Email Address' type='email' id='email' name='email' value={email}
                    onChange={changeEmail} className={emailError ? 'error' : ''} />
                    {emailError && <p className={'error-message'}>{emailError}</p>}


                    <Label htmlFor='password'>Password</Label>
                    <Input label='Password' type='password' id='password' name='password' value={password}
                    onChange={changePassword} className={passwordError ? 'error' : ''} />
                    {passwordError && <p className={'error-message'}>{passwordError}</p>}
                    <ButtonContainer>
                        <FormButton type='submit' onClick={handleLogin} >Login</FormButton>
                    </ButtonContainer>
                </Form>
            </FormWrapper>
        </RightSide>
    </PageWrapper>
    <GoogleOAuthProvider clientId="983196844931-f4h8h0ckn48vrmn01adl89k0csqmrrv1.apps.googleusercontent.com">
            <GoogleLogin
                onSuccess={credentialResponse => {
                    const decoded = jwtDecode(credentialResponse.credential);
                    console.log(decoded);
                    const fullName = decoded.name;
                    const spaceIndex = fullName.indexOf(' ');
                    
                    let firstName, lastName;
                    
                    if (spaceIndex !== -1) {
                    firstName = fullName.substring(0, spaceIndex);
                    lastName = fullName.substring(spaceIndex + 1);
                    } else {
                    firstName = fullName;
                    lastName = ''; 
                    }

                    axios
    .post(`${baseURL}/user-google-auth/`, {
        email: decoded.email,
        first_name: firstName,
        last_name: lastName,
    }, { withCredentials: true })
    .then((response) => {
        localStorage.setItem('accessToken', response.data.access);
        localStorage.setItem('refreshToken', response.data.refresh);
        console.log("response.data", response.data);
        console.log(response.data);
        dispatch(setAccessToken(response.data.data));
        dispatch(setUser(response.data.user));
        

        // Redirect to the desired page after successful login
        toast.success('Login Successful');
        navigator('/');
    })
    .catch((error) => {
        if (error.response && error.response.status === 401) {
        // Unauthorized: Invalid credentials
        setEmailError('Invalid email or password');
        setPasswordError('Invalid email or password');
        } else {
        // Other errors
        console.error('Login error:', error);
        }
    });
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
                />
        </GoogleOAuthProvider>
    </>
    
    
  )
}