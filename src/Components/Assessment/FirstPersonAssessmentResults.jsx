import { useLocation, useNavigate } from 'react-router-dom';
import { Container, ResultContainer } from '../../Styles/AssessmentStyle/FirstPersonAssessmentStyle';
import Footer from '../Footer/Footer';
import UserNavbar from '../Navbar/UserNavbar';
import styled from 'styled-components';


export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`;


export const StyledButton = styled.button`
    background-color: #5517A8;
    color: white;
    padding: 10px 40px;
    font-size: 18px;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.3s ease;

    &:hover{
        background-color: #5c0cb5;
    }

    &:active{
        transform: scale(0.98);
    }
`;

const FirstPersonAssessmentResults = () => {
    const location = useLocation();
    const clientId = location.state?.clientId || "No Client ID";
    console.log("CLIENTID:", clientId);
    const score = location.state?.score || 0;
    console.log("SCORE:", score);
    const interpretation = location.state?.interpretation || '';
    console.log("INTERPRETATION:", interpretation);

    const navigate = useNavigate();

    const handleConsultationClick = () => {
        navigate('/doctor-consulting');
    }
  return (
    <>
    <UserNavbar/>
    <Container>
      <ResultContainer>
      <h2>Your Total Score: {score}</h2>
      <p>{interpretation}</p>
      <ButtonWrapper>
            <StyledButton onClick={handleConsultationClick}>
            Go to Doctor Consultation
            </StyledButton>
        </ButtonWrapper>
      </ResultContainer>
    </Container>
    <Footer/>
    </>
  );
};

export default FirstPersonAssessmentResults;  // Make sure to export the component as default
