import { useState } from 'react'
import { PageWrapper, FormWrapper, FormTitle, Form, Label, Input, FormButton, ErrorMessage, Asterisk } from '../../Styles/AssessmentStyle/FirstPersonClientDetailsStyle'
import { useLocation, useNavigate } from 'react-router-dom'
import UserNavbar from '../Navbar/UserNavbar';
import Footer from '../Footer/Footer';
import axios from 'axios';
import { baseURL } from '../../api/api';
import HashLoader from "react-spinners/HashLoader";
import CallButton from '../CallUs/CallButton';
import WhatsappButton from '../WhatsappChat/WhatsappButton';

const FirstPersonUserDetails = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const location = useLocation();
    const clientId = location.state?.clientId || "No Client ID";
    console.log("CLIENTID:", clientId);
    const score = location.state?.score || 0;
    console.log("SCORE:", score);
    const interpretation = location.state?.interpretation || '';
    console.log("INTERPRETATION:", interpretation);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let valid = true;


        
    
        // Validate name input
        if (name.trim() === '') {
            setNameError('Name is required');
            valid = false;
        } else {
            setNameError('');
        }
    
        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setEmailError('Invalid email address');
            valid = false;
        } else {
            setEmailError('');
        }
    
        if (valid) {
            setLoading(true);  // Show loader
            setTimeout(async () => {
                try {
                    // Update user details with PUT request
                    await axios.put(`${baseURL}/update-first-person-user-details/${clientId}/`, {
                        user_name: name,
                        user_email: email
                    });
    
                    // Check if the email already exists
                    const emailCheckResponse = await axios.post(`${baseURL}/check-user-email/`, {
                        email: email
                    });
    
                    setLoading(false);  // Hide loader after 3 seconds
    
                    // Navigate based on email existence
                    if (emailCheckResponse.data.exists) {
                        // Navigate to the login page, passing the necessary state
                        navigate('/login', { 
                            state: { 
                                name, 
                                email, 
                                score, 
                                interpretation,
                                clientId,
                                redirectTo: '/assessment/first-person-assessment-results' // URL to redirect to after login
                            }
                        });
                    } else {
                        navigate('/assessment/first-person-assessment-new-user', { 
                            state: { name, email, score, interpretation, clientId } 
                        });
                    }
                } catch (error) {
                    setLoading(false); 
                    console.error("Error updating user details:", error);
                }
            }, 3000); 
        }
    };


    const handleNameChange = (e) => {
        const value = e.target.value;
        const regex = /^[A-Za-z\s]+$/;

        if (value === '' || regex.test(value)){
            setName(value);
            setNameError('');
        } else {
            setNameError('Only letters are allowed');
        }
    };
    

  return (
    <>
    <UserNavbar/>
    <PageWrapper>
        {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                {/* Display HashLoader while loading is true */}
                <HashLoader color="#5517A8" loading={loading} size={80} />
            </div>
        ) : (
        <>
            <FormWrapper>
                <FormTitle>User Details</FormTitle>
                <Form onSubmit={handleSubmit}>
                    <Label htmlFor="userName">
                        What is your name? <Asterisk>*</Asterisk>
                    </Label>
                    <Input
                        id="userName"
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        required
                        placeholder="Enter your name"
                    />
                    {nameError && <ErrorMessage>{nameError}</ErrorMessage>}
                    
                    <Label htmlFor="userEmail">
                        What is your email id? <Asterisk>*</Asterisk>
                    </Label>
                    <Input
                        id="userEmail"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Enter your email"
                    />
                    {emailError && <ErrorMessage>{emailError}</ErrorMessage>}

                    <FormButton type="submit">Continue</FormButton>
                </Form>
            </FormWrapper>
        </>
        )}
    </PageWrapper>
    <CallButton/>
    <WhatsappButton/>
    <Footer/>
    </>
  )
}

export default FirstPersonUserDetails