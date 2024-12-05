import { useState } from 'react';
import { PageWrapper, LeftSide, RightSide, InfoSection, Title, Description, Button, ArrowIcon, FormWrapper, FormTitle, Form, Label, Input, TextArea, ButtonContainer, FormButton, ErrorMessage } from '../../Styles/ContactUsStyle/ContactUsBannerStyle'
// import user_icon from '../../assets/images/user_icon.svg'
// import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import { baseURL } from '../../api/api';
import { toast } from 'react-toastify';
import arrow from '../../assets/images/arrow.svg'


const ContactUsBanner = () => {

    // const navigator = useNavigate();
    // const dispatch = useDispatch();


    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [message, setMessage] = useState('');
    const [fullnameError, setFullnameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [mobileError, setMobileError] = useState('');
    const [messageError, setMessageError] = useState('');

    const phoneNumber = "8156900195"


    const changeFullname = (event) =>{
        setFullname(event.target.value);
        setFullnameError('');
    };


    const changeEmail = (event) =>{
        setEmail(event.target.value);
        setEmailError('');
    };


    const changeMobile = (event) =>{
        setMobile(event.target.value);
        setMobileError('');
    };


    const changeMessage = (event) =>{
        setMessage(event.target.value);
        setMessageError('');
    };



    const validateForm = () => {
        let valid = true;

        if (fullname.trim() === '') {
            setFullnameError('Full name is required');
            valid = false;
        }

        if (email.trim() === ''){
            setEmailError("Email is required");
            valid = false;
        }

        if (mobile.trim() === ''){
            setMobileError("Mobile number is required");
            valid = false;
        }

        if (message.trim() === ''){
            setMessageError("Message is required");
            valid = false;
        }
        return valid;
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            try{
                const response = await axios.post(`${baseURL}/enquiries/`, {fullname, email, mobile, message});
                console.log(response.data);
                toast.success("Message Sent Successfully")

                setFullname('');
                setEmail('');
                setMobile('');
                setMessage('');

            } catch (error) {
                console.error('There was an error submitting the form!', error);
                toast.error("There was an error submitting the form! Please try again")

            }
        }
    };  



  return (
    <>
    <PageWrapper>
        <LeftSide>
            <InfoSection>
                <Title>Get in touch with us!</Title>
                <Description>
                Reach out to us for enquiries and more information.
                </Description>

                <a href={`tel:${phoneNumber}`} style={{ textDecoration: 'none' }}>
                    <Button>
                        Call Now <ArrowIcon src={arrow} alt="arrow-icon" />
                    </Button>
                </a>
            </InfoSection>
        </LeftSide>
        
        <RightSide>
            <FormWrapper>
                <FormTitle>
                    Send us a message
                </FormTitle>
                <Form onSubmit={handleSubmit} >
                <Label htmlFor='fullname'>Full Name</Label>
                    <Input label='Full Name' type='text' id='fullname' name='fullname' value={fullname}
                    onChange={changeFullname} className={fullnameError ? 'error' : ''} />
                    {fullnameError && <ErrorMessage>{fullnameError}</ErrorMessage>}

                    <Label htmlFor='email'>Email</Label>
                    <Input label='Email' type='email' id='email' name='email' value={email}
                    onChange={changeEmail} className={emailError ? 'error' : ''} />
                    {emailError && <ErrorMessage>{emailError}</ErrorMessage>}

                    <Label htmlFor='mobile'>Mobile</Label>
                    <Input label='Mobile' type='text' id='mobile' name='mobile' value={mobile}
                    onChange={changeMobile} className={mobileError ? 'error' : ''} />
                    {mobileError && <ErrorMessage>{mobileError}</ErrorMessage>}

                    <Label htmlFor='message'>Message</Label>
                    <TextArea label='Message' id='message' name='message' value={message}
                    onChange={changeMessage} className={messageError ? 'error' : ''} />
                    {messageError && <ErrorMessage>{messageError}</ErrorMessage>}


                    <ButtonContainer>
                        <FormButton type='submit'>Send</FormButton>
                    </ButtonContainer>
                </Form>
            </FormWrapper>
        </RightSide>
    </PageWrapper>
    </>
  )
}

export default ContactUsBanner