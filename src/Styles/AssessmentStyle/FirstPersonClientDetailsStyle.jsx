// import styled from "styled-components";


// export const PageWrapper = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     min-height: 120vh;
//     background-color: #f9f9f9;
//     margin-top: 120px;
//     font-family: 'Poppins', sans-serif;
//     padding: 0 10rem; /* Add padding for responsiveness */
//     width: 100%;
//     box-sizing: border-box; /* Ensure padding is included in the width */
//     border-radius: 25px;
// `;


// export const LeftSide = styled.div`
//   flex: 1;
//   padding: 9rem;
//   padding-left: 3rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-start;
//   font-family: 'Poppins', sans-serif;
// `;

// export const RightSide = styled.div`
//   flex: 1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 50px;
//   margin-right: 20px;
// `;

// export const InfoSection = styled.div`
//     max-width: 400px;
//     text-align: left;
// `;


// export const Title = styled.h1`
//     font-size: 3rem;
//     margin-bottom: 1rem;
//     padding-bottom: 10px;
//     color: #000;
//     font-family: 'Poppins', sans-serif;
//     font-weight: 700;
// `;


// export const Subtitle = styled.p`
//   font-size: 1rem;
//   margin-bottom: 1rem;
//   line-height: 0;
//   padding-bottom: 10px;
//   color: #5517A8;
//   a {
//     color: #5517A8;
//     text-decoration: none;
//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;


// export const Description = styled.p`
//     font-size: 1rem;
//     color: #000;
//     margin-bottom: 1.5rem;
// `;


// export const Button = styled.button`
//     padding: 0.75rem 1.5rem;
//     font-size: 1rem;
//     background-color: #5517A8;
//     color: #fff;
//     border: none;
//     border-radius: 25px;
//     cursor: pointer;
//     display: flex;
//     align-items: center;

//     &:hover{
//         background-color: #5753d9;
//     }
// `;


// export const ArrowIcon = styled.span`
//     margin-left: 0.5rem;
//     display: inline-block;
//     transform: translateX(5px);
// `;


// export const FormWrapper = styled.div`
//     padding: 2rem;
//     border-radius: 25px;
//     box-shadow: 0 4px 8px rgba(0,0,0,0.3);
//     background-color: #f6eefc;
//     max-width: 400px;
//     width: 100%;
//     height: 50%;
//     text-align: center;
// `;


// export const FormTitle = styled.h2`
//     font-size: 1.2rem;
//     margin-bottom: 10px;
//     margin-top: 1px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     text-align: center;
//     color: #000;
// `;


// export const Icon = styled.img`
//     font-size: 1rem;
//     margin-right: 0.5rem;
//     color: #5517A8;
//     height: 100px;
//     width: 100px;
// `;


// export const Form = styled.form`
//     display: flex;
//     flex-direction: column;
//     text-align: left;
//     width: 100%;
// `;


// export const Label = styled.label`
//     font-size: 14px;
//     font-weight: bold;
//     color: #000;
//     margin-bottom: 0.5rem;
// `;


// export const Input = styled.input`
//     padding: 0.75rem;
//     margin-bottom: 1rem;
//     border: 1px solid #ddd;
//     border-radius: 10px;
//     font-size: 13px;
//     font-family: 'Poppins', sans-serif;

//     &:focus{
//         border-color: #5517A8;
//         outline: none;
//     }
// `;


// export const TextArea = styled.textarea`
//     padding: 0.75rem;
//     margin-bottom: 1rem;
//     border: 1px solid #ddd;
//     border-radius: 10px;
//     font-size: 13px;
//     height: 150px;
//     resize: vertical;
//     font-family: 'Poppins', sans-serif;

//     &:focus{
//         border-color: #5517A8;
//         outline: none;
//     }
// `;


// export const ButtonContainer = styled.div`
//     display: flex;
//     justify-content: center;
// `;


// export const FormButton = styled.button`
//     padding: 0.75rem;
//     font-size: 1rem;
//     background-color: #5517A8;
//     color: #fff;
//     border: none;
//     border-radius: 25px;
//     cursor: pointer;
//     width: 100px;

//     &:hover{
//         background-color: #5753d9;
//     }
// `;



// export const ErrorMessage = styled.p`
//     color: red;
//     font-size: 12px;
//     margin: -10px 0 10px 0;
// `;


// export const Asterisk = styled.span`
//     color: red;
//     margin-left: 2px;
// `;


import styled from "styled-components";


export const PageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh; 
    background-color: #f9fafb;
    margin-top: 120px;
    border-radius: 25px;


    @media (max-width: 768px) {
        margin-top: 60px;
    }

    @media (max-width: 480px) {
        margin-top: 30px;
    }
`;

export const FormWrapper = styled.div`
    padding: 2rem;
    background-color: #f9fafb;
    max-width: 400px;
    width: 100%;
    text-align: center;
    border: none; 
    margin-bottom: 120px;


    @media (max-width: 768px) {
        padding: 1.5rem;
    }

    @media (max-width: 480px) {
        padding: 1rem;
        max-width: 90%;
    }
`;

export const FormTitle = styled.h2`
    font-size: 1.5rem;
    color: #5517A8; 
    margin-bottom: 5rem;
    font-family: 'Poppins', sans-serif;


    @media (max-width: 768px) {
        font-size: 1.3rem;
        margin-bottom: 4rem;
    }

    @media (max-width: 480px) {
        font-size: 1.2rem;
        margin-bottom: 3rem;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;


    @media (max-width: 480px) {
        gap: 0.8rem;
    }
`;

export const Label = styled.label`
    font-size: 18px;
    color: #000;
    font-family: 'Poppins', sans-serif;
    text-align: center;


    @media (max-width: 768px) {
        font-size: 16px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
    }
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    &:focus {
        border-color: #5517A8;
        outline: none;
    }


    @media (max-width: 768px) {
        padding: 0.6rem;
    }

    @media (max-width: 480px) {
        padding: 0.5rem;
    }
`;

export const FormButton = styled.button`
    padding: 0.75rem 2rem;
    font-size: 1rem;
    background-color: #5517A8;
    color: #fff;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    &:hover {
        background-color: #473693;
    }


    @media (max-width: 768px) {
        padding: 0.7rem 1.8rem;
        font-size: 0.9rem;
    }

    @media (max-width: 480px) {
        padding: 0.6rem 1.5rem;
        font-size: 0.8rem;
    }
`;

export const ErrorMessage = styled.p`
    color: red;
    font-size: 12px;
    width: 100%;
    text-align: left;


    @media (max-width: 768px) {
        font-size: 11px;
    }

    @media (max-width: 480px) {
        font-size: 10px;
    }
`;

export const Asterisk = styled.span`
    color: red;
    margin-left: 2px;
`;