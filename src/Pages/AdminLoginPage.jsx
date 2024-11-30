import { PageWrapper, LeftSide, RightSide, InfoSection, Title, Description, Button, ArrowIcon, FormWrapper, FormTitle, Icon, Form, Label, Input, ButtonContainer, FormButton } from '../Styles/UserLogin/UserLoginStyle'
import user_icon from '../assets/images/user_icon.svg';
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { baseURL } from '../api/api'
import {setAdminAccessToken, setAdminUser} from '../Redux/AdminSlice'
import Cookies from 'js-cookie';
import arrow from '../assets/images/arrow.svg'

const AdminLoginPage = () => {
    const navigator = useNavigate();
    const dispatch = useDispatch();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');


    const changeEmail = (event) =>{
        setEmail(event.target.value);
        setEmailError('');
    };


    const changePassword = (event) =>{
        setPassword(event.target.value);
        setPasswordError('');
    };


    const handleAdminLogin = (event) =>{
        event.preventDefault();

        if(email.trim() === '' || password.trim() === ''){
            if(email.trim() === ''){
                setEmailError('Email is required');
            }
            if(password.trim() === ''){
                setPasswordError('Password is required');
            }
        }else{
            axios.post(`${baseURL}/admin-side/admin-login/`, {
                email: email,
                password: password
            })
            .then((response)=>{
                console.log('RESPONSE DATA:', response.data)
                const accessToken = response.data.access;
                const refreshToken = response.data.refresh;

                localStorage.setItem('accessToken', response.data.access);
                localStorage.setItem('refreshToken', response.data.refresh);

                Cookies.set('accessToken', accessToken, { expires: 7 });
                Cookies.set('refreshToken', refreshToken, { expires: 7 });

                dispatch(setAdminAccessToken({
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                }));
                dispatch(setAdminUser({
                    user: response.data.user
                }));
                toast.success('Admin Login Successful');
                navigator('/admin-dashboard');
            })
            .catch((error)=>{
                if(error.response && error.response.status === 401){
                    setEmailError('Invalid Email or Password')
                    setPasswordError('Invalid Email or Password')
                }else{
                    console.error('Admin Login Error:', error);
                }
            });
        }
    };

  return (
    <>
    <PageWrapper>
        <LeftSide>
            <InfoSection>
                <Title>Admin Login</Title>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Description>

                <Button>
                    Know More <ArrowIcon src={arrow} alt="Arrow Icon" />
                </Button>
            </InfoSection>
        </LeftSide>
        
        <RightSide>
            <FormWrapper>
            <FormTitle>
                Admin Login <Icon src={user_icon} alt='User-Icon' />
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
                        <FormButton type='submit' onClick={handleAdminLogin} >Login</FormButton>
                    </ButtonContainer>
                </Form>
            </FormWrapper>
        </RightSide>
    </PageWrapper>
    </>
  )
}

export default AdminLoginPage