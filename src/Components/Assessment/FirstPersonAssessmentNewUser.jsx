import Footer from "../Footer/Footer"
import UserNavbar from "../Navbar/UserNavbar"
import { PageWrapper, FormWrapper, FormTitle, Form, Label, Input, FormButton, ErrorMessage, Asterisk } from '../../Styles/AssessmentStyle/FirstPersonClientDetailsStyle'
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import axios from "axios"
import { baseURL } from "../../api/api"
import HashLoader from "react-spinners/HashLoader"



const FirstPersonAssessmentNewUser = () => {
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');

    const [mobileError, setMobileError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const {name, email, score, interpretation} = location.state;

    const validateForm = () => {
        let valid = true;

        if(!/^[0-9]{10}$/.test(mobile)){
            setMobileError('Please enter a valid 10-digit mobile number');
            toast.error('Please enter a valid 10-digit mobile number');
            valid=false;
        } else {
            setMobileError('');
        }

        if (password.trim() === '' || password.length < 6) {
            setPasswordError('Password must be at least 6 characters long');
            valid=false;
        } else {
            setPasswordError('');
        }
        return valid;
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            setLoading(true);
            try {
                await axios.post(`${baseURL}/register-new-user/`, {
                    fullname: name,
                    email: email,
                    mobile: mobile,
                    password: password
                });
                setLoading(false);
                navigate('/assessment/first-person-assessment-results', {
                    state: {name, email, score, interpretation}
                });
            } catch (error) {
                console.error("Error registering the user:", error);
                toast.error("Error registering the user");
                setLoading(false);
            }
        }
    };

  return (
    <>
    <UserNavbar/>
    <PageWrapper>
        {loading ? (
            <HashLoader color="#5517A8" size={80} />
        ) : (
        <>
            <FormWrapper>
                <FormTitle>Create Account</FormTitle>
                <Form onSubmit={handleSubmit}>
                    <Label htmlFor="mobile">
                        Enter your mobile number <Asterisk>*</Asterisk>
                    </Label>
                    <Input
                        id="mobile"
                        type="text"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="Enter your mobile number"
                        required
                    />
                    {mobileError && <ErrorMessage>{mobileError}</ErrorMessage>}

                    <Label htmlFor="password">
                        Create a password <Asterisk>*</Asterisk>
                    </Label>
                    <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                    {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}

                    <FormButton type="submit">Continue</FormButton>
                </Form>
            </FormWrapper>
        </>
        )}
    </PageWrapper>
    <Footer/>
    </>
  )
}

export default FirstPersonAssessmentNewUser