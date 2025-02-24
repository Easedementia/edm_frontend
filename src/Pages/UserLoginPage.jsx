import { PageWrapper, LeftSide, RightSide, InfoSection, Title, Subtitle, Description, Button, ArrowIcon, FormWrapper, FormTitle, Icon, Form, Label, Input, ButtonContainer, FormButton } from '../Styles/UserLogin/UserLoginStyle'
import user_icon from '../assets/images/user_icon.svg';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'
import { useDispatch } from 'react-redux'
import { setAccessToken, setUser } from '../Redux/UserSlice'
import { baseURL } from '../api/api'
import { useState } from 'react';
import { toast } from 'react-toastify';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import arrow from '../assets/images/arrow.svg'
import UserNavbar from '../Components/Navbar/UserNavbar';



export const UserLoginPage = () => {
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const from = location.state?.from || '/';


    const redirectTo = location.state?.redirectTo || '/';  // Default redirect if none specified
    const name = location.state?.name || '';
    const score = location.state?.score || 0;
    const interpretation = location.state?.interpretation || '';
    const clientId = location.state?.clientId || '';

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
        // console.log("Email:", email);
        // console.log("Password:", password);

        if (email.trim() === '' || password.trim() === '') {
            if (email.trim() === '') {
                setEmailError('Email is required');
                toast.error('Email is required!')
            }
            if (password.trim() === '') {
                setPasswordError('Password is required');
                toast.error('Password is required')
            }
        } else {
            axios.post(`${baseURL}/login/`, {
                email: email,
                password: password,
            }, { withCredentials: true })
            .then((response) => {
                // console.log('RESPONSE DATA:', response.data);

                const accessToken = response.data.data.access;
                const refreshToken = response.data.data.refresh;

                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('refreshToken', refreshToken);

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
                // navigator(from, { replace: true }); // Redirect to the previous page or home

                if (redirectTo === '/assessment/first-person-assessment-results') {
                    navigator(redirectTo, { state: { name, email, score, interpretation, clientId }, replace: true });
                } else if (from === '/doctor-consulting') {
                    navigator(from, {replace:true});
                } else {
                    navigator(redirectTo, { replace: true }); // Default navigation
                }

                const pendingScore = localStorage.getItem("pendingScore");
                // console.log("Score:", pendingScore)
                if (pendingScore) {
                    // console.log("///Score///:", pendingScore)
                    
                    navigator('/assessment/self-assessment', { state: { pendingScore: Number(pendingScore) }, replace: true });
                } else {
                    navigator(redirectTo, { replace: true }); // Default navigation
                }
                
            })
            .catch((error) => {
                if (error.response && error.response.status === 401) {
                    setEmailError('Invalid email!');
                    setPasswordError('Invalid password!');
                    toast.error("Invalid email or password!")
                } else {
                    console.error('Login error', error);
                    toast.error("Please check your email & password!")
                }
            });
        }
    };

  return (
    <>
    <UserNavbar/>
    <PageWrapper>
        <LeftSide>
            <InfoSection>
                <Title>Login</Title>
                <Subtitle>
                    Not Registered yet? <Link to="/signup">Sign Up</Link>
                </Subtitle>
                <Description>
                Welcome to Easedementia, where we combine compassionate care and innovation to enhance well-being and quality of life.
                </Description>

                <Button>
                    Know More <ArrowIcon src={arrow} alt="Arrow Icon" />
                </Button>
            </InfoSection>
                <GoogleOAuthProvider clientId="983196844931-f4h8h0ckn48vrmn01adl89k0csqmrrv1.apps.googleusercontent.com">
                    <div style={{marginTop:'30px'}} >
                    <GoogleLogin
                                onSuccess={credentialResponse => {
                                    const decoded = jwtDecode(credentialResponse.credential);
                                    // console.log(decoded);
                                    const fullname = decoded.name;
                                    // console.log("Fullname:", fullname)
                                    const spaceIndex = fullname.indexOf(' ');
                                    
                                    let firstName, lastName;
                                    
                                    if (spaceIndex !== -1) {
                                    firstName = fullname.substring(0, spaceIndex);
                                    lastName = fullname.substring(spaceIndex + 1);
                                    } else {
                                    firstName = fullname;
                                    lastName = ''; 
                                    }

                                    axios
                    .post(`${baseURL}/user-google-auth/`, {
                        email: decoded.email,
                        fullname: decoded.name,
                        first_name: firstName,
                        last_name: lastName,
                    }, { withCredentials: true })
                    .then((response) => {
                        localStorage.setItem('accessToken', response.data.access);
                        localStorage.setItem('refreshToken', response.data.refresh);
                        // console.log("response.data", response.data);
                        // console.log("RESPONSE DATA USER:", response.data.user);
                        dispatch(setAccessToken(response.data.data));
                        dispatch(setUser({
                            user: response.data.user
                        }));
                        

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

                    </div>
                        </GoogleOAuthProvider>     
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


                    <Label htmlFor='password'>Password</Label>
                    <Input label='Password' type='password' id='password' name='password' value={password}
                    onChange={changePassword} className={passwordError ? 'error' : ''} />
                    <ButtonContainer>
                        <FormButton type='submit' onClick={handleLogin} >Login</FormButton>
                    </ButtonContainer>
                </Form>
            </FormWrapper>
        </RightSide>
    </PageWrapper>
    </>
    
    
  )
}
