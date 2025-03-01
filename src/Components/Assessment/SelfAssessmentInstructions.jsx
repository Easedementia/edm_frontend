import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Title, Subtitle, InstructionsList, InstructionItem, CheckboxWrapper, Button, ArrowIcon } from '../../Styles/AssessmentStyle/FirstPersonInstructionsStyle'
import UserNavbar from '../Navbar/UserNavbar';
import Footer from '../Footer/Footer';
// import arrow from '../../assets/images/arrow.svg'
import CallButton from '../CallUs/CallButton';
import WhatsappButton from '../WhatsappChat/WhatsappButton';


const SelfAssessmentInstructions = () => {
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate();

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const handleProceedClick = () => {
        if (isChecked){
            navigate('/assessment/self-assessment');
        }
    };
  return (
    <>
    <UserNavbar/>
    <Container>
        <Title>Self Assessment</Title>
        <Subtitle>Instructions</Subtitle>
        <InstructionsList>
        <InstructionItem>
        Complete the assessment independently, without any external assistance or guidance.
        </InstructionItem>
        <InstructionItem>
        Respond to each item truthfully, reflecting your current abilities and experiences.
        </InstructionItem>
        <InstructionItem>
        Stick to factual observations rather than personal opinions or interpretations.
        </InstructionItem>
        <InstructionItem>
        Conduct the assessment in a quiet, and distraction free environment.
        </InstructionItem>
        <InstructionItem>
        Refrain from discussing the questions with others or seeking clarification during the process.
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

export default SelfAssessmentInstructions