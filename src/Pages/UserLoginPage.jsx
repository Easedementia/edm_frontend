import { PageWrapper, LeftSide, RightSide, InfoSection, Title, Subtitle, Description, Button, ArrowIcon, FormWrapper, FormTitle, Icon, Form, Label, Input, ButtonContainer, FormButton } from '../Styles/UserLogin/UserLoginStyle'
import user_icon from '../assets/images/user_icon.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { jwtDecode } from 'jwt-decode'
import { useDispatch } from 'react-redux'
import { setAccessToken, setUser } from '../Redux/UserSlice'
import { baseURL } from '../api/api'
import { useState } from 'react';


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
                localStorage.setItem('accessToken', response.data.access);
                localStorage.setItem('refreshToken', response.data.refresh);
                dispatch(setAccessToken({accessToken:response.data.access, refreshToken:response.data.refresh}));
                dispatch(setUser(response.data.user));
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
  )
}
