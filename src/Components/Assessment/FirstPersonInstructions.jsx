import { useState } from 'react'
import { Container, Title, Subtitle, InstructionsList, InstructionItem, CheckboxWrapper, Button, ArrowIcon } from '../../Styles/AssessmentStyle/FirstPersonInstructionsStyle'
import UserNavbar from '../Navbar/UserNavbar';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
// import arrow from '../../assets/images/arrow.svg'
import CallButton from '../CallUs/CallButton';
import WhatsappButton from '../WhatsappChat/WhatsappButton';

const FirstPersonInstructions = () => {
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate();

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const handleProceedClick = () => {
        if (isChecked){
            navigate('/assessment/first-person-assessment-client-details');
        }
    };


  return (
    <>
    <UserNavbar/>
    <Container>
        <Title>Informant Interview</Title>
        <Subtitle>Instructions</Subtitle>
        <InstructionsList>
        <InstructionItem>
        Provide accurate and detailed responses based on direct, firsthand observations of the client.
        </InstructionItem>
        <InstructionItem>
        Maintain confidentiality and do not discuss your responses with the client during or after the interview.
        </InstructionItem>
        <InstructionItem>
        Stick to factual observations rather than personal opinions or interpretations.
        </InstructionItem>
        <InstructionItem>
        Ensure the interview is conducted in a private, uninterrupted setting to foster candid feedback.
        </InstructionItem>
        <InstructionItem>
        Make sure the assessment is completed within the allotted time, ensuring all questions are answered properly.
        </InstructionItem>
        </InstructionsList>

        <CheckboxWrapper>
        <label>
            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} /> I agree to
            the terms and conditions
        </label>
        </CheckboxWrapper>

        <Button disabled={!isChecked} onClick={handleProceedClick}>
        Proceed
        <ArrowIcon src="https://d2mzeyyrjif26w.cloudfront.net/assets/images/arrow.svg" alt="arrow icon" disabled={!isChecked} />
        </Button>
    </Container>
    <CallButton/>
    <WhatsappButton/>
    <Footer/>
    </>
    
  )
}

export default FirstPersonInstructions