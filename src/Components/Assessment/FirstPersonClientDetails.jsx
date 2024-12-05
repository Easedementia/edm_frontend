import UserNavbar from "../Navbar/UserNavbar"
import { PageWrapper, FormWrapper, FormTitle, Form, Label, Input, FormButton, ErrorMessage, Asterisk } from '../../Styles/AssessmentStyle/FirstPersonClientDetailsStyle'
import { useState } from "react"
import axios from "axios";
import { baseURL } from "../../api/api";
import { toast } from "react-toastify";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import CallButton from "../CallUs/CallButton";
import WhatsappButton from "../WhatsappChat/WhatsappButton";


const FirstPersonClientDetails = () => {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();



    const validateForm = () => {
        if(name.trim() === '') {
            setNameError('Name is required');
            return false;
        } else{
            return true;
        }
    }


    const handleSubmbit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            setLoading(true);
            try {
                const response = await axios.post(`${baseURL}/first-person-client-details/`, {name});
                console.log(response.data);
                const clientId = response.data.id;
                console.log("CLIENT ID:", clientId);
                setName('');

                setTimeout(() => {
                    setLoading(false);
                    navigate('/assessment/first-person-assessment', {state: {clientId}});
                }, 3000);
            } catch (error) {
                console.log('There was an error submitting the form!', error);
                toast.error("There was an error submitting the form! Please try again");
                setLoading(false);
            }
        }
    }


    // const [fullname, setFullname] = useState('');
    // const [age, setAge] = useState('');
    // const [mobile, setMobile] = useState('');
    // const [message, setMessage] = useState('');
    
    // const [fullnameError, setFullnameError] = useState('');
    // const [ageError, setAgeError] = useState('');
    // const [mobileError, setMobileError] = useState('');
    // const [messageError, setMessageError] = useState('');
    
    // const [loading, setLoading] = useState(false);
    // const navigate = useNavigate();


    // const changeFullname = (event) =>{
    //     setFullname(event.target.value);
    //     setFullnameError('');
    // };


    // const changeAge = (event) =>{
    //     setAge(event.target.value);
    //     setAgeError('');
    // };


    // const changeMobile = (event) =>{
    //     setMobile(event.target.value);
    //     setMobileError('');
    // };


    // const changeMessage = (event) =>{
    //     setMessage(event.target.value);
    //     setMessageError('');
    // };



    // const validateForm = () => {
    //     let valid = true;

    //     if (fullname.trim() === '') {
    //         setFullnameError('Full name is required');
    //         valid = false;
    //     }

    //     if (age.trim() === ''){
    //         setAgeError("Age is required");
    //         valid = false;
    //     }

    //     if (mobile.trim() === ''){
    //         setMobileError("Mobile number is required");
    //         valid = false;
    //     }

    //     if (message.trim() === ''){
    //         setMessageError("Message is required");
    //         valid = false;
    //     }
    //     return valid;
    // };


    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     if (validateForm()) {
    //         setLoading(true);
    //         try{
    //             const response = await axios.post(`${baseURL}/first-person-client-details/`, {fullname, age, mobile, message});
    //             console.log(response.data);

    //             setFullname('');
    //             setAge('');
    //             setMobile('');
    //             setMessage('');

    //             setTimeout(() => {
    //                 setLoading(false); // Hide loader
    //                 navigate('/assessment/first-person-assessment'); // Navigate after 3 seconds
    //             }, 3000);

    //         } catch (error) {
    //             console.error('There was an error submitting the form!', error);
    //             toast.error("There was an error submitting the form! Please try again");
    //             setLoading(false);

    //         }
    //     }
    // };  
  return (
    <>
    <UserNavbar/>
    <PageWrapper>
            {loading ? (
                <HashLoader color="#5517A8" size={80} />
            ) : (
                <>
                <FormWrapper>
                    <FormTitle style={{marginTop:'1px'}}>INFORMANT INTERVIEW</FormTitle>
                    <Form onSubmit={handleSubmbit}>
                        <Label htmlFor="clientName">
                            What is the name of the client?
                            <Asterisk>*</Asterisk>
                        </Label>
                        <Input
                            id="clientName"
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                            placeholder="Enter the name"
                        />
                        {nameError && <ErrorMessage>{nameError}</ErrorMessage>}
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

export default FirstPersonClientDetails