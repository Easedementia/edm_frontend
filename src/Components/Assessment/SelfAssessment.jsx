import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import cat from '../../assets/self-assessment/cat.png';
import elephant from '../../assets/self-assessment/elephant.png';
import hen from '../../assets/self-assessment/hen.png';
import car from '../../assets/self-assessment/car.png'
import bus from '../../assets/self-assessment/bus.png'
import fish from '../../assets/self-assessment/fish.png'
import cycle from '../../assets/self-assessment/cycle.png'
import clock1 from '../../assets/self-assessment/clock1.gif'
import clock2 from '../../assets/self-assessment/clock2.gif'
import clock3 from '../../assets/self-assessment/clock3.gif'
import clock4 from '../../assets/self-assessment/clock4.gif'

import {AssessmentContainer, QuestionText, InputField, OptionsContainer, StyledImageInput, ImageOption, ButtonContainer, NavigationButton } from '../../Styles/AssessmentStyle/SelfAssessmentStyle'
import UserNavbar from "../Navbar/UserNavbar";
import Footer from "../Footer/Footer";


const selfAssessmentQuestions = [
    { id: 1, type: "text", question: "What is today’s date? (dd/mm/yyyy)" },
    { id: 2, type: "instruction", question: "Please read and remember these items: TOMATO, RICE, APPLE. Repeat this list three times and keep it in mind, as you may be asked about it later." },
    { id: 3, type: "fill-in-the-blanks", question: "Write numbers backward by six:", blanks: [100, 94, "", "", "", "", ""] },
    { id: 4, type: "image", question: "Name each of these animals:", imageUrls: [cat, elephant, hen] },
    { 
      id: 5, 
      type: "multiple-choice", 
      question: "Select the item that doesn't belong to the group:", 
      options: [
        { image: car, label: "Car" },
        { image: bus, label: "Bus" },
        { image: fish, label: "Fish" }, 
        { image: cycle, label: "Bicycle" }
      ],
      correctAnswer: "Fish"
    },
    { id: 6, type: "text", question: "Recall the three items mentioned earlier." },
    { 
      id: 7, 
      type: "multiple-choice", 
      question: "Select the image of the clock which shows 8:05 PM?", 
      options: [
        { image: clock1, label: "Clock 1" },
        { image: clock2, label: "Clock 2" },
        { image: clock3, label: "Clock 3" },
        { image: clock4, label: "Clock 4" }
      ],
      correctAnswer: "Clock 4"
    },
    { 
      id: 8, 
      type: "multiple-choice", 
      question: "Below, you will see a group of numbers, mainly 8s and 9s, randomly arranged. Your task is to count how many times the number 9 appears and select the correct answer.",
      numberSequence: "88988899899889998988", 
      options: [
        { label: "5" },
        { label: "7" },
        { label: "9" },
        { label: "11" }
      ],
      correctAnswer: "9"
    },
    { id: 9, type: "text", question: "Recall the three items mentioned earlier." },
  ];

  

const SelfAssessment = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(0);
    console.log("SCORE:", score);
    const [selectedOption, setSelectedOption] = useState(null);
    const navigate = useNavigate();

    const handleAnswerChange = (value) => {
        setAnswers({ ...answers, [currentQuestionIndex]: value });
    };

    const handleOptionSelect = (selectedLabel) => {
      setSelectedOption(selectedLabel);  // Update selected option on click
      answers[currentQuestionIndex] = selectedLabel; // Store selected answer in answers array
    };
    




    const validateAnswer = () => {
      const currentQuestion = selfAssessmentQuestions[currentQuestionIndex];
      
      //Question No:1
      if (currentQuestion.type === "text") {
        if (currentQuestion.id === 1) {
          // Validate today's date
          const today = new Date();
          const formattedDate = today.toLocaleDateString("en-GB"); // dd/mm/yyyy
          if (answers[currentQuestionIndex] === formattedDate) {
            setScore((prevScore) => prevScore + 1);
          }
        } else if (currentQuestion.id === 6) {
          // Validate recall question (regardless of order or case)
          const correctItems = ["TOMATO", "RICE", "APPLE"];
          const userAnswer = answers[currentQuestionIndex]
            ?.toUpperCase()
            .split(",")
            .map(item => item.trim());
    
          const isCorrect = correctItems.every(item => userAnswer.includes(item)) && userAnswer.length === correctItems.length;
          
          if (isCorrect) {
            console.log("correct answer:", userAnswer)
            setScore((prevScore) => prevScore + 1);
          } else{
            console.log("Wrong answer:", userAnswer);
          }
        }
      }
      

      //Question No: 3
      if (currentQuestion.id === 3) {
        const correctSequence = ["88", "82", "76", "70", "64"];
        
        // Filter out empty inputs from the user's answer
        const userSequence = (answers[currentQuestionIndex] || []).filter(val => val !== "");
      
        const isCorrect = userSequence.length === correctSequence.length && 
                          userSequence.every((num, idx) => num === correctSequence[idx]);
      
        if (isCorrect) {
          console.log("Correct answer", isCorrect);
          setScore((prevScore) => prevScore + 1);
        } else {
          console.log("Wrong answer", userSequence);
        }
      }
      
      


      //Question No:4
      if (currentQuestion.id === 4) {
        const correctAnswers = ["CAT", "ELEPHANT", "HEN"];
        const userAnswers = (answers[currentQuestionIndex] || []).map(ans => ans.trim().toUpperCase());
      
        const isCorrect = userAnswers.length === correctAnswers.length &&
                          userAnswers.every((ans, index) => ans === correctAnswers[index]);
      
        if (isCorrect) {
          console.log("Correct", userAnswers);
          setScore((prevScore) => prevScore + 1);
        } else{
          console.log("Wrong", userAnswers);
        }
      }



      //Question No: 5, 7, 8
      if (currentQuestion.id === 5 || currentQuestion.id === 7 || currentQuestion.id === 8) {
        const selectedAnswer = answers[currentQuestionIndex];  
        if (selectedAnswer === currentQuestion.correctAnswer) {
            console.log("Correct", selectedAnswer);
            setScore((prevScore) => prevScore + 1);  
        } else {
            console.log("Wrong answer", selectedAnswer);
        }
      }    
    };


    
    



    const handleNext = () => {
        if (answers[currentQuestionIndex] !== undefined || selfAssessmentQuestions[currentQuestionIndex].type === "instruction") {
          validateAnswer();
        if (currentQuestionIndex < selfAssessmentQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            navigate("/assessment/self-assessment-results", { state: { answers } });
        }
        } else {
        toast.warning("Please answer the question before proceeding.");
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const currentQuestion = selfAssessmentQuestions[currentQuestionIndex];

    


  return (
    <>
    <UserNavbar/>
    <h2 style={{marginTop:'80px'}} >Self-Assessment</h2>
    <AssessmentContainer>
      <QuestionText>{currentQuestion.question}</QuestionText>

      {/* Render Input Based on Type */}
      {currentQuestion.type === "text" && (
        <InputField
          type="text"
          value={answers[currentQuestionIndex] || ""}
          onChange={(e) => handleAnswerChange(e.target.value)}
          placeholder={currentQuestion.id === 1 ? "dd/mm/yyyy" : "Enter your answer"}
        />
      )}


      {currentQuestion.type === "fill-in-the-blanks" && (
        <div>
          {currentQuestion.blanks.map((num, index) => (
            num !== "" ? ( // If the number is given (like 100, 94), display it as static text
              <span key={index} style={{ margin: "5px", fontWeight: "bold" }}>{num}</span>
            ) : (
              <input
                key={index}
                type="text"
                value={answers[currentQuestionIndex]?.[index] || ""}
                onChange={(e) => {
                  const updatedAnswers = answers[currentQuestionIndex] ? [...answers[currentQuestionIndex]] : ["", "", "", "", ""];
                  updatedAnswers[index] = e.target.value;
                  setAnswers({ ...answers, [currentQuestionIndex]: updatedAnswers });
                }}
                style={{ width: "50px", margin: "5px", textAlign: "center" }}
              />
            )
          ))}
        </div>
      )}



{currentQuestion.id === 4 && (
        <OptionsContainer>
          {currentQuestion.imageUrls.map((imageUrl, index) => (
            <StyledImageInput key={index}>
              <img src={imageUrl} alt={`Animal ${index + 1}`} />
              <InputField
                type="text"
                value={answers[currentQuestionIndex]?.[index] || ""}
                onChange={(e) => {
                  const updatedAnswers = answers[currentQuestionIndex]
                    ? [...answers[currentQuestionIndex]]
                    : ["", "", ""];
                  updatedAnswers[index] = e.target.value;
                  setAnswers({ ...answers, [currentQuestionIndex]: updatedAnswers });
                }}
                placeholder="answer"
              />
            </StyledImageInput>
          ))}
        </OptionsContainer>
      )}



      
      


    {(currentQuestion.id === 5 || currentQuestion.id === 7) && (
      <OptionsContainer>
      {currentQuestion.options.map((option, index) => (
        <ImageOption
          key={index}
          src={option.image}
          alt={option.label}
          isSelected={selectedOption === option.label}
          onClick={() => handleOptionSelect(option.label)}
        />
      ))}
    </OptionsContainer>
    )}



    {currentQuestion.id === 8 && (
      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>{currentQuestion.numberSequence}</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "10px" }}>
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              style={{
                padding: "10px 20px",
                border: selectedOption === option.label ? "3px solid #5517A8" : "1px solid #ccc",
                borderRadius: "8px",
                background: selectedOption === option.label ? "#e0d4f7" : "#fff",
                cursor: "pointer",
                fontSize: "16px"
              }}
              onClick={() => handleOptionSelect(option.label)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    )}




      <ButtonContainer>
        <NavigationButton onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
          Previous
        </NavigationButton>
        <NavigationButton onClick={handleNext}>
          {currentQuestionIndex === selfAssessmentQuestions.length - 1 ? "Finish" : "Next"}
        </NavigationButton>
      </ButtonContainer>

    </AssessmentContainer>
    <Footer/>
    </>
    
  );
}

export default SelfAssessment