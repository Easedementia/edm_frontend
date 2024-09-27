import styled from "styled-components";


export const Container = styled.div`
    width: 1100px;
    background-color: #f8f9fa;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    font-family: 'Poppins', sans-serif;
    margin: 50px auto;
    margin-top: 150px;
`;


export const Title = styled.h1`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
    color: black;
    text-align: left;
`;


export const Subtitle = styled.h2`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
    text-align: left;
    color: #1a1919;
`;


export const InstructionsList = styled.ul`
    font-size: 16px;
    line-height: 1.8;
    padding-left: 20px;
    margin-bottom: 20px;
`;


export const InstructionItem = styled.li`
    margin-bottom: 10px;
    text-align: left;
    color: black;
`;


export const CheckboxWrapper = styled.div`
    margin-bottom: 20px;
    text-align: left;
`;


export const Button = styled.button`
    background-color: ${(props) => (props.disabled ? '#cccccc' : '#5517A8')};
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 30px;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        background-color: ${(props) => (props.disabled ? '#cccccc' : '#5b00d0')};
    }
`;


export const ArrowIcon = styled.span`
    margin-left: 8px;
    font-size: 16px;
`;

