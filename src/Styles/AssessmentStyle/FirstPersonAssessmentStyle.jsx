import styled from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0;
`;


export const Container = styled.div`
    width: 60%;
    margin: 150px auto;
    background-color: #f9fafb;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    margin-right: 200px;
`;


export const QuestionText = styled.h2`
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 20px;
    font-family: 'Poppins', sans-serif;
    color: black;
`;


export const Description = styled.p`
    font-size: 17px;
    margin-bottom: 30px;
    color: black;
    font-family: 'Poppins', sans-serif;
    text-align: left;
`;


export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    gap: 15px;
`;


export const OptionButton = styled.button`
    background-color: ${(props) => (props.active ? '#5517A8' : '#eeeeee')};
    color: ${(props) => (props.active ? 'white' : '#000')};
    padding: 10px 30px;
    font-size: 18px;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    width: 60%;
    cursor: pointer;


    &:hover{
        background-color: ${(props) => (props.active ? '#5b00d0' : '#dcdcdc')};
    }
`;


export const NavButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;


export const NavButton = styled.button`
    background-color: #5517A8;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 150px;


    &:hover {
        background-color: #6d22d1;
    }


    &:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
    }

    
    span {
        margin-left: 8px;
    }
`;


export const ArrowIcon = styled.img`
    margin-left: ${(props) => (props.rotate === 180 ? '-15px' : '-2px')};
    margin-right: ${(props) => (props.rotate === 180 ? '-2px' : '-15px')};
    width: 56px;
    height: 56px; 
    transition: transform 0.2s ease;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    transform: rotate(${(props) => props.rotate || 0}deg);

    &:hover {
        transform: ${(props) => (props.disabled ? `rotate(${props.rotate || 0}deg)` : `rotate(${props.rotate || 0}deg) scale(1.2)`)};
    }
`;


export const ResultContainer = styled.div`
    margin-top: 40px;
    text-align: center;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    color: black;
    font-family: 'Poppins', sans-serif;
`;


export const ProgressBarWrapper = styled.div`
    width: 90%;
    height: auto;
    position: relative;
    margin: 0 auto;
    margin-bottom: 25px;
`;


export const ProgressBar = styled.div`
    background-color: lightgray;
    border-radius: 2px;
    width: 100%;
    height: 4px;
    position: relative;
    overflow: hidden;

    &::before{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        background-color: #5517a8;
        width: ${(props) => props.progress}%;
        transition: width 0.4s ease;
    }
`;


export const VideoContainer = styled.div`
  flex: 1;
  max-width: 400px;
  
  video {
    width: 80%;
    margin-top: 280px;
    height: auto;
    border-radius: 10px;
  }
`;

