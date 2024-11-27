import { Link } from "react-router-dom";
import styled from "styled-components";



const breakpoints = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
  };

export const BannerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px;
    background-color: #f9fafb;

  /* For tablets */
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column; /* Stack items vertically */
    text-align: center; /* Center-align text for smaller screens */
    padding: 30px;
  }

  /* For larger mobiles */
  @media (max-width: ${breakpoints.mobileL}) {
    flex-direction: column; /* Ensure stacking for larger mobile screens */
    padding: 25px;
  }

  /* For medium mobiles */
  @media (max-width: ${breakpoints.mobileM}) {
    padding: 20px; /* Compact padding for medium mobile screens */
  }

  /* For smaller mobiles */
  @media (max-width: ${breakpoints.mobileS}) {
    padding: 15px; /* Minimal padding for the smallest screens */
  }
`


export const TextContainer = styled.div`
    max-width: 50%;


  /* For tablets */
  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%; /* Full width for tablets */
    margin-bottom: 20px; /* Add spacing below text */
    padding: 0 15px;
  }

  /* For larger mobiles */
  @media (max-width: ${breakpoints.mobileL}) {
    max-width: 100%; /* Full width for mobiles */
    margin-bottom: 15px;
    padding: 0 10px;
  }

  /* For medium mobiles */
  @media (max-width: ${breakpoints.mobileM}) {
    max-width: 100%;
    margin-bottom: 10px;
    padding: 0 8px;
  }

  /* For smaller mobiles */
  @media (max-width: ${breakpoints.mobileS}) {
    max-width: 100%;
    margin-bottom: 5px;
    padding: 0 5px;
  }
`


export const Title = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 48px;
    font-weight: 700;
    color: #000;
    padding-top: 30px;
    text-align: left;


    /* For tablets */
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 36px; /* Smaller font for tablet screens */
    text-align: center; /* Center-align text for better presentation on tablets */
    padding-top: 20px; /* Reduce padding for tablet screens */
  }

  /* For larger mobiles */
  @media (max-width: ${breakpoints.mobileL}) {
    font-size: 30px; /* Smaller font size for larger mobiles */
    padding-top: 15px; /* Reduce padding for better fit on smaller screens */
  }

  /* For medium mobiles */
  @media (max-width: ${breakpoints.mobileM}) {
    font-size: 26px; /* Smaller font size for medium mobile screens */
    padding-top: 10px; /* Further reduce padding */
  }

  /* For smaller mobiles */
  @media (max-width: ${breakpoints.mobileS}) {
    font-size: 22px; /* Minimal font size for the smallest screens */
    padding-top: 5px; /* Minimized padding */
    text-align: center; /* Center-align text on small mobile screens */
  }
`


export const Subtitle = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: #2f2e2e;
    margin-top: 20px;
    line-height: 1.5;
    text-align: left;


    /* For tablets */
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px; /* Slightly smaller font for tablet screens */
    text-align: center; /* Center-align text for better presentation on tablets */
    margin-top: 15px; /* Reduce margin for tablet screens */
  }

  /* For larger mobiles */
  @media (max-width: ${breakpoints.mobileL}) {
    font-size: 12px; /* Smaller font size for larger mobile screens */
    margin-top: 10px; /* Reduce margin for better fit on smaller screens */
  }

  /* For medium mobiles */
  @media (max-width: ${breakpoints.mobileM}) {
    font-size: 11px; /* Further reduce font size for medium mobile screens */
    margin-top: 8px; /* Adjust margin */
  }

  /* For smaller mobiles */
  @media (max-width: ${breakpoints.mobileS}) {
    font-size: 10px; /* Minimal font size for the smallest screens */
    margin-top: 5px; /* Minimized margin */
    text-align: center; /* Center-align text on small mobile screens */
  }
`


export const ContactButton = styled(Link)`
    display: flex; 
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px; /* Adjust padding */
    background-color: #5517A8;
    color: white;
    border: none;
    border-radius: 50px;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    text-decoration: none;
    transition: background-color 0.3s ease;
    height: 40px; 
    width: 165px; 
    align-self: flex-start;
    margin-top: 15px;
    margin-right: 375px;
    white-space: nowrap; 

    &:hover {
        background-color: #6d22d1;
        color: #fff;
    }


    /* For tablets */
  @media (max-width: ${breakpoints.tablet}) {
    width: 140px; /* Adjust width for tablets */
    font-size: 14px; /* Smaller font size for tablets */
    padding: 10px 14px; /* Adjust padding for tablets */
    margin-top: 12px; /* Reduce top margin */
    margin-right: 0; /* Remove right margin to fit better on smaller screens */
    align-self: center; /* Center-align the button */
  }

  /* For larger mobiles */
  @media (max-width: ${breakpoints.mobileL}) {
    width: 120px; /* Adjust width for larger mobile screens */
    font-size: 13px; /* Further reduce font size for larger mobiles */
    padding: 8px 12px; /* Adjust padding for mobile screens */
    margin-top: 10px; /* Adjust margin for mobile screens */
  }

  /* For medium mobiles */
  @media (max-width: ${breakpoints.mobileM}) {
    width: 110px; /* Adjust width for medium mobile screens */
    font-size: 12px; /* Reduce font size */
    padding: 6px 10px; /* Adjust padding */
    margin-top: 8px; /* Adjust margin */
  }

  /* For smaller mobiles */
  @media (max-width: ${breakpoints.mobileS}) {
    width: 100px; /* Adjust width for small mobile screens */
    font-size: 11px; /* Further reduce font size */
    padding: 5px 8px; /* Reduce padding */
    margin-top: 5px; /* Reduce margin */
    align-self: center; /* Center-align button for small screens */
  }
`;



export const ArrowIcon = styled.img`
    margin-left: 10px;
    width: 65px;
    height: 65px; 
    transition: transform 0.2s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.2); 
    }


    /* For tablets */
  @media (max-width: ${breakpoints.tablet}) {
    width: 50px; /* Adjust width for tablet screens */
    height: 50px; /* Adjust height for tablet screens */
    margin-left: 8px; /* Adjust left margin for better alignment */
  }

  /* For larger mobiles */
  @media (max-width: ${breakpoints.mobileL}) {
    width: 45px; /* Adjust width for larger mobile screens */
    height: 45px; /* Adjust height for larger mobile screens */
    margin-left: 6px; /* Adjust left margin for better alignment */
  }

  /* For medium mobiles */
  @media (max-width: ${breakpoints.mobileM}) {
    width: 40px; /* Adjust width for medium mobile screens */
    height: 40px; /* Adjust height for medium mobile screens */
    margin-left: 5px; /* Adjust left margin */
  }

  /* For smaller mobiles */
  @media (max-width: ${breakpoints.mobileS}) {
    width: 35px; /* Adjust width for small mobile screens */
    height: 35px; /* Adjust height for small mobile screens */
    margin-left: 4px; /* Adjust left margin */
  }
`;




export const ImageContainer = styled.div`
    max-width: 50%;

    /* For tablets */
  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%; /* Ensure it takes full width on tablet screens */
  }

  /* For larger mobiles */
  @media (max-width: ${breakpoints.mobileL}) {
    max-width: 100%; /* Ensure it takes full width on larger mobile screens */
  }

  /* For medium mobiles */
  @media (max-width: ${breakpoints.mobileM}) {
    max-width: 100%; /* Ensure it takes full width on medium mobile screens */
  }

  /* For smaller mobiles */
  @media (max-width: ${breakpoints.mobileS}) {
    max-width: 100%; /* Ensure it takes full width on smaller mobile screens */
  }
`


export const BannerImage = styled.img`
    max-width: 100%;
    height: auto;


    /* For tablet screens */
  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;  /* Ensure image takes full width on tablet screens */
    height: auto;     /* Maintain aspect ratio */
  }

  /* For large mobile screens */
  @media (max-width: ${breakpoints.mobileL}) {
    max-width: 100%;  /* Ensure image takes full width on larger mobile screens */
    height: auto;     /* Maintain aspect ratio */
  }

  /* For medium mobile screens */
  @media (max-width: ${breakpoints.mobileM}) {
    max-width: 100%;  /* Ensure image takes full width on medium mobile screens */
    height: auto;     /* Maintain aspect ratio */
  }

  /* For small mobile screens */
  @media (max-width: ${breakpoints.mobileS}) {
    max-width: 100%;  /* Ensure image takes full width on smaller mobile screens */
    height: auto;     /* Maintain aspect ratio */
  }
`;

