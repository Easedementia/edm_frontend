import { useState } from 'react';
import { PageWrapper, LeftSide, RightSide, InfoSection, Title, Description, Button, ArrowIcon, FormWrapper, FormTitle, Form, Label, Input, ButtonContainer, FormButton } from '../../Styles/ContactUsStyle/ContactUsBannerStyle'
// import user_icon from '../../assets/images/user_icon.svg'
// import {useNavigate} from 'react-router-dom'


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



  return (
    <>
    <PageWrapper>
        <LeftSide>
            <InfoSection>
                <Title>New Dawn for Dementia Care</Title>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Description>

                <Button>
                    Call Now <ArrowIcon>→</ArrowIcon>
                </Button>
            </InfoSection>
        </LeftSide>
        
        <RightSide>
            <FormWrapper>
                <FormTitle>
                    Send us a message
                </FormTitle>
                <Form>
                    <Label htmlFor='fullname' >Full Name</Label>
                    <Input label='Full Name' type='text' id='fullname' name='fullname' value={fullname}
                    onChange={changeFullname} className={fullnameError ? 'error' : ''} />
                    {fullnameError && <p className={'error-message'}>{fullnameError}</p>}


                    <Label htmlFor='email'>Email</Label>
                    <Input label='Email' type='email' id='email' name='email' value={email}
                    onChange={changeEmail} className={emailError ? 'error' : ''} />
                    {emailError && <p className={'error-message'}>{emailError}</p>}


                    <Label htmlFor='mobile'>Mobile</Label>
                    <Input label='Mobile' type='text' id='mobile' name='mobile' value={mobile}
                    onChange={changeMobile} className={mobileError ? 'error' : ''} />
                    {mobileError && <p className={'error-message'}>{mobileError}</p>}


                    <Label htmlFor='message'>Message</Label>
                    <Input label='Message' type='text' id='message' name='message' value={message}
                    onChange={changeMessage} className={messageError ? 'error' : ''} />
                    {messageError && <p className={'error-message'}>{messageError}</p>}



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