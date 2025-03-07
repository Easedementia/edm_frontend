import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import cat from '../../assets/self-assessment/cat.png';
// import elephant from '../../assets/self-assessment/elephant.png';
// import hen from '../../assets/self-assessment/hen.png';
// import car from '../../assets/self-assessment/car.png'
// import bus from '../../assets/self-assessment/bus.png'
// import fish from '../../assets/self-assessment/fish.png'
// import cycle from '../../assets/self-assessment/cycle.png'
// import apple from '../../assets/self-assessment/apple.png'
// import banana from '../../assets/self-assessment/banana.png'
// import chair from '../../assets/self-assessment/chair.png'
// import orange from '../../assets/self-assessment/orange.png'
// import clock1 from '../../assets/self-assessment/clock1.gif'
// import clock2 from '../../assets/self-assessment/clock2.gif'
// import clock3 from '../../assets/self-assessment/clock3.gif'
// import clock4 from '../../assets/self-assessment/clock4.gif'
// import appletree from '../../assets/self-assessment/appletree.svg'
// import dog_puzzle from '../../assets/self-assessment/dog_puzzle.png'
// import puzzle1 from '../../assets/self-assessment/puzzle1.png'
// import puzzle2 from '../../assets/self-assessment/puzzle2.png'
// import puzzle3 from '../../assets/self-assessment/puzzle3.png'
// import puzzle4 from '../../assets/self-assessment/puzzle4.png'

import {AssessmentContainer, QuestionText, InputField, OptionsContainer, StyledImageInput, ImageOption, ButtonContainer, NavigationButton } from '../../Styles/AssessmentStyle/SelfAssessmentStyle'
import UserNavbar from "../Navbar/UserNavbar";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
// import axios from "axios";
import { baseURL } from "../../api/api";


const selfAssessmentQuestions = [
    { id: 1, type: "text", question: "What is today’s date? (dd/mm/yyyy)" },
    {
      id: 2,
      type: "instruction",
      question: (
        <>
          Please read and remember these items:{" "}
          <strong>TOMATO, RICE, APPLE</strong>. Repeat this list three times and keep it in mind, as you may be asked about it later.
        </>
      ),
    },
    
    { id: 3, type: "fill-in-the-blanks", question: "Write numbers backward by six:", blanks: [100, 94, "", "", "", "", ""] },
    { id: 4, type: "image", question: "Name each of these animals:", imageUrls: ["https://d2mzeyyrjif26w.cloudfront.net/assets/self-assessment/cat.png", "https://d2mzeyyrjif26w.cloudfront.net/assets/self-assessment/elephant.png", "https://d2mzeyyrjif26w.cloudfront.net/assets/self-assessment/hen.png"] },
    { 
      id: 5, 
      type: "multiple-choice", 
      question: "Select the item that doesn't belong to the group:", 
      options: [
        { image: "https://d2mzeyyrjif26w.cloudfront.net/assets/self-assessment/car.png", label: "Car" },
        { image: "https://d2mzeyyrjif26w.cloudfront.net/assets/self-assessment/bus.png", label: "Bus" },
        { image: "https://d2mzeyyrjif26w.cloudfront.net/assets/self-assessment/fish.png", label: "Fish" }, 
        { image: "https://d2mzeyyrjif26w.cloudfront.net/assets/self-assessment/cycle.png", label: "Bicycle" }
      ],
      correctAnswer: "Fish"
    },
    { id: 6, type: "text", question: "Recall the three items mentioned earlier." },
    { 
      id: 7, 
      type: "multiple-choice", 
      question: "Select the image of the clock which shows 8:05 PM?", 
      options: [
        { image: "https://d2mzeyyrjif26w.cloudfront.net/assets/self-assessment/clock1.gif", label: "Clock 1" },
        { image: "https://d2mzeyyrjif26w.cloudfront.net/assets/self-assessment/clock2.gif", label: "Clock 2" },
        { image: "https://d2mzeyyrjif26w.cloudfront.net/assets/self-assessment/clock3.gif", label: "Clock 3" },
        { image: "https://d2mzeyyrjif26w.cloudfront.net/assets/self-assessment/clock4.gif", label: "Clock 4" }
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
    { 
      id: 9, 
      type: "multiple-choice", 
      question: "Can you count how many apples are in the picture?", 
      image: "https://d2mzeyyrjif26w.cloudfront.net/assets/self-assessment/appletree_compressed.png",
      options: [
        { label: "12" },
        { label: "19" },
        { label: "22" },
        { label: "17" }
      ],
      correctAnswer: "19"
    },
    {
      id: 10,
      type: "multiple-choice",
      question: "Mittu is a dog, but he has lost one piece of his puzzle. Can you find the missing piece from the options below?",
      puzzleImage: "https://d2mzeyyrjif26w.cloudfront.net/assets/self-assessment/dog_puzzle.png",
      options: [
        { image: "https://d2mzeyyrjif26w.cloudfront.net/assets/self-assessment/puzzle1.png", label: "Puzzle 1" },
        { image: "https://d2mzeyyrjif26w.cloudfront.net/assets/self-assessment/puzzle2.png", label: "Puzzle 2" },
        { image: "https://d2mzeyyrjif26w.cloudfront.net/assets/self-assessment/puzzle3.png", label: "Puzzle 3" },
        { image: "https://d2mzeyyrjif26w.cloudfront.net/assets/self-assessment/puzzle4.png", label: "Puzzle 4" }
      ],
      correctAnswer: "Puzzle 2" // puzzle2 is the correct answer
    },   
    { 
      id: 11, 
      type: "multiple-choice", 
      question: "Select the item that doesn't belong to the group:", 
      options: [
        { image: "https://d2mzeyyrjif26w.cloudfront.net/assets/self-assessment/chair.png", label: "Chair" },
        { image: "https://d2mzeyyrjif26w.cloudfront.net/assets/self-assessment/apple.png", label: "Apple" },
        { image: "https://d2mzeyyrjif26w.cloudfront.net/assets/self-assessment/banana.png", label: "Banana" }, 
        { image: "https://d2mzeyyrjif26w.cloudfront.net/assets/self-assessment/orange.png", label: "Orange" }
      ],
      correctAnswer: "Chair"
    },
  ];

  

const SelfAssessment = () => {
    const user = useSelector((state) => state.user);
    // console.log("::USER::", user)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(0);
    const [isAssessmentComplete, setIsAssessmentComplete] = useState(false);
    // console.log("SCORE:", score);
    const [selectedOption, setSelectedOption] = useState(null);
    const navigate = useNavigate();


    


  
    useEffect(() => {
      const pendingScore = localStorage.getItem("pendingScore");
      if (user && pendingScore) {
        setScore(Number(pendingScore));
        setIsAssessmentComplete(true); // Now show the results after login
        localStorage.removeItem("pendingScore");
      }
    }, [user]);
    
  



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
            // console.log("correct answer:", userAnswer)
            setScore((prevScore) => prevScore + 1);
          } else{
            // console.log("Wrong answer:", userAnswer);
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
          // console.log("Correct answer", isCorrect);
          setScore((prevScore) => prevScore + 1);
        } else {
          // console.log("Wrong answer", userSequence);
        }
      }
      
      


      //Question No:4
      if (currentQuestion.id === 4) {
        const correctAnswers = ["CAT", "ELEPHANT", "HEN"];
        const userAnswers = (answers[currentQuestionIndex] || []).map(ans => ans.trim().toUpperCase());
      
        const isCorrect = userAnswers.length === correctAnswers.length &&
                          userAnswers.every((ans, index) => ans === correctAnswers[index]);
      
        if (isCorrect) {
          // console.log("Correct", userAnswers);
          setScore((prevScore) => prevScore + 1);
        } else{
          // console.log("Wrong", userAnswers);
        }
      }



      //Question No: 5, 7, 8
      if ([5, 7, 8, 9, 11].includes(currentQuestion.id)) {
        const selectedAnswer = answers[currentQuestionIndex];  
        if (selectedAnswer === currentQuestion.correctAnswer) {
            // console.log("Correct", selectedAnswer);
            setScore((prevScore) => prevScore + 1);  
        } else {
            // console.log("Wrong answer", selectedAnswer);
        }
      }
      
      

      //Question No: 10
      if (currentQuestion.id === 10) {
        const selectedAnswer = answers[currentQuestionIndex];
        if (selectedAnswer === currentQuestion.correctAnswer) {
          // console.log("Correct");
          setScore((prevScore) => prevScore + 1); // Increment the score if correct
        } else {
          // console.log("Wrong answer", selectedAnswer);
        }
      }      
    };




  //   const handleConsultationClick = () => {
  //     navigate('/doctor-consulting');
  // }
    


  useEffect(() => {
    const storedScore = localStorage.getItem("pendingScore");
    
    if (storedScore) {
      setScore(Number(storedScore));
      setIsAssessmentComplete(true);
      localStorage.removeItem("pendingScore"); // Clear it after using
    }
  }, []);



  // const saveAssessmentDetails = async () => {
  //   if (!user || !user.user) {
  //     console.error("User details are missing");
  //     return;
  //   }

  //   const assessmentData = {
  //     fullname: user.user.user.fullname,
  //     email: user.user.user.email,
  //     mobile: user.user.user.mobile,
  //     user_id: user.user.user.id,
  //     date: new Date().toISOString(), 
  //     score: score,
  //   };
  //   console.log("assessment data:", assessmentData)
  
  //   try {
  //     const response = await fetch(`${baseURL}/save-assessment/`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(assessmentData),
  //     });
  
  //     const data = await response.json();
  //     if (response.ok) {
  //       console.log("Assessment saved:", data.message);
  //     } else {
  //       console.error("Error saving assessment:", data.error);
  //     }
  //   } catch (error) {
  //     console.error("Network error:", error);
  //   }
  // };




  const saveAssessmentDetails = async () => {
    if (!user || !user.user) {
      console.error("User details are missing");
      return;
    }

    const userData = user.user.user;  // Extract user data

    const assessmentData = {
      fullname: userData.fullname || userData.name || "Unknown",
      email: userData.email,
      mobile: userData.mobile !== "None" ? userData.mobile : "Not Provided",
      user_id: userData.id,
      date: new Date().toISOString(), 
      score: score,
    };
    
    console.log("Assessment Data:", assessmentData);

    try {
      const response = await fetch(`${baseURL}/save-assessment/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(assessmentData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Assessment saved:", data.message);
      } else {
        console.error("Error saving assessment:", data.error);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
};

  
  
  

  const handleNext = async () => {
    if (answers[currentQuestionIndex] !== undefined || selfAssessmentQuestions[currentQuestionIndex].type === "instruction") {
      validateAnswer();
      if (currentQuestionIndex < selfAssessmentQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        // If the user is not logged in, store score and navigate to login
        if (!user || !user.isAuthenticated) {
          console.log("Pending score:", score)
          localStorage.setItem("pendingScore", score);
          navigate("/login");
          
        } else {
          await saveAssessmentDetails();
          setIsAssessmentComplete(true);
        }
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
    <UserNavbar />
    <h2 style={{ marginTop: "80px" }}>Self-Assessment</h2>

    {/* Check if assessment is completed */}
    {isAssessmentComplete ? (
        user ? (
          <AssessmentContainer>
            <QuestionText>Assessment Completed</QuestionText>
            <p>Your Score: <strong>{score} / 10</strong></p>

            {score >= 8 ? (
              <p style={{ color: "green", fontWeight: "bold" }}>
                You seem to have normal cognitive function. No signs of cognitive decline detected.
              </p>
            ) : (
              <p style={{ color: "red", fontWeight: "bold" }}>
                There may be a chance of cognitive decline. We recommend consulting a doctor.
                <ButtonContainer>
                  {/* <NavigationButton style={{marginLeft:'125px'}} onClick={handleConsultationClick}>
                    Doctor Consultation
                  </NavigationButton> */}
                </ButtonContainer>
              </p>
            )}

            <ButtonContainer>
              <NavigationButton style={{marginLeft:'170px'}} onClick={() => window.location.reload()}>
                Retake Assessment
              </NavigationButton>
            </ButtonContainer>
          </AssessmentContainer>
        ) : null
      ) : (
      // Render the current question
      <AssessmentContainer>
        <QuestionText>{currentQuestion.question}</QuestionText>

        {/* Render input based on type */}
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
            {currentQuestion.blanks.map((num, index) =>
              num !== "" ? (
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
                  style={{ width: "70px", height:'40px', margin: "5px", textAlign: "center", border: "2px solid #5517A8", borderRadius:'5px', backgroundColor: "#ffffff", outline: "none" }}
                />
              )
            )}
          </div>
        )}

        {/* Image Naming Question */}
        {currentQuestion.id === 4 && (
          <OptionsContainer>
            {currentQuestion.imageUrls.map((imageUrl, index) => (
              <StyledImageInput key={index}>
                <img src={imageUrl} alt={`Animal ${index + 1}`} />
                <InputField
                  type="text"
                  value={answers[currentQuestionIndex]?.[index] || ""}
                  onChange={(e) => {
                    const updatedAnswers = answers[currentQuestionIndex] ? [...answers[currentQuestionIndex]] : ["", "", ""];
                    updatedAnswers[index] = e.target.value;
                    setAnswers({ ...answers, [currentQuestionIndex]: updatedAnswers });
                  }}
                  placeholder="answer"
                />
              </StyledImageInput>
            ))}
          </OptionsContainer>
        )}

        {/* Multiple Choice Questions */}
        {(currentQuestion.id === 5 || currentQuestion.id === 7 || currentQuestion.id === 11) && (
          <OptionsContainer>
            {currentQuestion.options.map((option, index) => (
              <ImageOption
                key={index}
                src={option.image}
                alt={option.label}
                isSelected={selectedOption === option.label}
                onClick={() => handleOptionSelect(option.label)}
                style={{width:'130px'}}
              />
            ))}
          </OptionsContainer>
        )}

        {/* Number Counting Question */}
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

        {/* Apple Counting Question */}
        {currentQuestion.id === 9 && (
          <div style={{ textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px", marginTop: '-70px' }}>
              <img 
                src={currentQuestion.image} 
                alt="Count the apples" 
                style={{ width: "200px", height: "auto", marginTop:'55px' }} 
              />
            </div>
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

        {/* Puzzle Question */}
        {currentQuestion.id === 10 && (
          <div style={{ textAlign: "center" }}>
            <div style={{ marginBottom: "20px" }}>
              <img 
                src={currentQuestion.puzzleImage} 
                alt="Dog puzzle" 
                style={{ width: "450px", height: "auto", border: "2px solid #ccc", borderRadius: "10px", marginLeft:'50px' }} 
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
              {currentQuestion.options.map((option, index) => (
                <div key={index} style={{ textAlign: "center" }}>
                  <img 
                    src={option.image} 
                    alt={option.label} 
                    style={{
                      width: "200px",
                      height: "150px",
                      objectFit: "cover",
                      cursor: "pointer",
                      border: selectedOption === option.label ? "3px solid #5517A8" : "1px solid #ccc",
                      borderRadius: "8px",
                      transition: "border 0.3s ease"
                    }}
                    onClick={() => handleOptionSelect(option.label)}
                  />
                  <p>{option.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <ButtonContainer>
          <NavigationButton onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
            Previous
          </NavigationButton>
          <NavigationButton onClick={handleNext}>
            {currentQuestionIndex === selfAssessmentQuestions.length - 1 ? "Finish" : "Next"}
          </NavigationButton>
        </ButtonContainer>
      </AssessmentContainer>
    )}
    <Footer />
  </>
  );
}

export default SelfAssessment