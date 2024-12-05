import UserNavbar from "../Navbar/UserNavbar"
import { Wrapper, Container, QuestionText, Description, ButtonContainer, OptionButton, NavButtonContainer, NavButton, ResultContainer, ProgressBarWrapper, ProgressBar, ArrowIcon } from '../../Styles/AssessmentStyle/FirstPersonAssessmentStyle'
import { useState, useEffect } from "react";
// import { useSelector } from 'react-redux';
import Footer from "../Footer/Footer";
import axios from "axios";
import { baseURL } from "../../api/api";
import { useLocation, useNavigate } from "react-router-dom";
import arrow from '../../assets/images/arrow.svg'
import CallButton from "../CallUs/CallButton";
import WhatsappButton from "../WhatsappChat/WhatsappButton";



const questions = [
  {
    id: 1,
    text: 'Question 1',
    description:
      'Has the person been forgetting things more often?',
  },

  {
    id: 2,
    text: 'Question 2',
    description: 'Has there been a repetition of the same questions or stories in a short period?',
  },

  {
    id: 3,
    text: 'Question 3',
    description: 'Has there been noticeable changes in the persons ability to express themselves in a conversation or have trouble finding the right words during discussions?',
  },

  {
    id: 4,
    text: 'Question 4',
    description: 'Has there been trouble recognizing familiar places or people?',
  },

  {
    id: 5,
    text: 'Question 5',
    description: 'Has there been difficulty in making simple decisions or solving everyday problems, like managing finances or following a recipe?',
  },

  {
    id: 6,
    text: 'Question 6',
    description: 'Has there been a noticeable slowing down in tasks?',
  },

  {
    id: 7,
    text: 'Question 7',
    description: 'Has there been a change in their ability to manage medications on their own?',
  },

  {
    id: 8,
    text: 'Question 8',
    description: 'Has the person been facing difficulty in using familiar machines in the house?',
  },

  {
    id: 9,
    text: 'Question 9',
    description: 'Has there been less interest in carrying out social obligations or family occasions ?',
  },

  {
    id: 10,
    text: 'Question 10',
    description: 'Has he/she been exhibiting signs of irritability or sadness ?',
  },
];


const FirstPersonAssessment = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [clientId, setClientId] = useState(() => {
    return localStorage.getItem('clientId') || 'No Client ID';
  });
  console.log("Client ID:", clientId);

  const navigator = useNavigate();

  // const currentUser = useSelector((state) => state.user.user);
  // const email = currentUser.user.email;
  // const fullname = currentUser.user.fullname;

  const location = useLocation();
  // const clientId = location.state?.clientId || "No Client ID";
  



  useEffect(() => {
    const clientIdFromState = location.state?.clientId;
    if (clientIdFromState) {
      setClientId(clientIdFromState);
      localStorage.setItem('clientId', clientIdFromState);
    }
  }, [location.state]);

  



  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answer;
    setAnswers(newAnswers);
  };


  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigator('/assessment/first-person-assessment-user-details', {
        state: {
          clientId: clientId,
          score: score,
          interpretation: interpretation,
        },
      });
      // setCurrentQuestionIndex(questions.length);
      // handleSendEmail();
    }
  };


  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };


  const calculateScore = () => {
    return answers.reduce((total, answer) => (answer !== null ? total + answer : total), 0);
  };


  const progress = ((currentQuestionIndex + 1)/questions.length) * 100;
  const currentQuestion = questions[currentQuestionIndex];


  const getInterpretation = (score) => {
    if (score <= 2) return 'No cognitive impairment';
    if (score >=3 && score <=5) return 'Mild cognitive impairment';
    return 'Significant signs of cognitive impairment';
  };

  const score = calculateScore();
  const interpretation = getInterpretation(score);

  const scoreResponse = axios.post(`${baseURL}/update-first-person-assessment-score/`, {
    clientId: clientId,
    score: score,
    interpretation: interpretation,
  });
  console.log('Score updated successfully:', scoreResponse.data);


  // const handleSendEmail = async () => {
  //   try {
  //     const response = await axios.post(`${baseURL}/send-first-person-assessment-email/`, {
  //       email: email,
  //       fullname: fullname,
  //       score: score,
  //       interpretation: interpretation
  //     });
  //     console.log('Email sent successfully:', response.data);
  //   }catch (error) {
  //     console.log('Error sending email:', error);
  //   }
  // }

  return (
    <>
    <UserNavbar />
      <Wrapper>
        <Container>
          {currentQuestionIndex < questions.length ? (
            <>
              <ProgressBarWrapper>
                <ProgressBar progress={progress} />
              </ProgressBarWrapper>

              <QuestionText>{currentQuestion.text}</QuestionText>
              <Description>{currentQuestion.description}</Description>

              <ButtonContainer>
                <OptionButton
                  active={answers[currentQuestionIndex] === 1}
                  onClick={() => handleAnswer(1)}
                >
                  Yes
                </OptionButton>
                <OptionButton
                  active={answers[currentQuestionIndex] === 0}
                  onClick={() => handleAnswer(0)}
                >
                  No
                </OptionButton>
              </ButtonContainer>

              <NavButtonContainer>
                <NavButton onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
                    <ArrowIcon src={arrow} alt="Arrow Icon" rotate={180} disabled={currentQuestionIndex === 0} />
                    Previous
                </NavButton>
                <NavButton onClick={handleNext} disabled={answers[currentQuestionIndex] === null}>
                    {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
                    <ArrowIcon src={arrow} alt="Arrow Icon" disabled={answers[currentQuestionIndex] === null} />
                </NavButton>
            </NavButtonContainer>
            </>
          ) : (
            <ResultContainer>
              <h2>Your Total Score: {calculateScore()}</h2>
              <p>{getInterpretation(calculateScore())}</p>
            </ResultContainer>
          )}
        </Container>
      </Wrapper>
      <CallButton/>
      <WhatsappButton/>
      <Footer />
    </>
  )
}

export default FirstPersonAssessment