import styled from 'styled-components'


const breakpoints = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
  };


export const NavbarContainer = styled.nav`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: white;
    box-shadow: 0 4px 2px -2px #f9fafb;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
    height: 95px;

    @media (max-width: ${breakpoints.laptop}) {
    padding: 15px 30px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 20px;
    height: auto;
  }

  @media (max-width: ${breakpoints.mobileL}) {
    padding: 10px 15px;
  }
`


export const LogoContainer = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: ${breakpoints.tablet}) {
    height: 50px;
  }

  @media (max-width: ${breakpoints.mobileL}) {
    height: 45px;
  }

`


export const Logo = styled.img`
    height: 60px;
    margin-left: 25px;
    cursor: pointer;

    @media (max-width: ${breakpoints.tablet}) {
    display: block;
    z-index: 1500;
  }

  img {
    height: 30px;
    width: 30px;
  }
`;


export const HamburgerIcon = styled.div`
    display: none;
    cursor: pointer;
    
    @media (max-width: ${breakpoints.tablet}) {
    display: block;
    flex-direction: column;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    position: relative;
    top: 100%;
    left: 0;
    padding: 30px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;

    &.active {
      display: flex;
    }
  }

  img {
    width: 30px;
    height: 30px;
    background: none;
    padding: 0;
    margin: 0;
  }

  @media (max-width: ${breakpoints.mobileL}) {
    gap: 15px;
    padding: 15px;
  }
`;


export const NavItems = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    flex-wrap: nowrap;

    @media (max-width: 768px) {
        display: none; 
        flex-direction: column;
        width: 100%;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 20px;
        position: absolute; 
        top: 100%; 
        left: 0;
        background-color: white; 
        padding: 50px; 
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 

        &.active {
            display: flex;
        }
    }

    @media (max-width: 480px) {
        gap: 10px;
        margin-top: 10px;
        padding: 15px;
    }
`;




export const NavItem = styled.a`
    text-decoration: none;
    color: black;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.5px;
    cursor: pointer;
    &:hover{
        color: #5517A8;
    }

    @media (max-width: ${breakpoints.laptop}) {
    font-size: 15px;
    display: block;
  }

  @media (max-width: ${breakpoints.mobileL}) {
    display: block;
    padding: 10px 0;
    text-align: center;
    font-size: 14px;
  }
`;


export const UserIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: purple;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: ${breakpoints.mobileL}) {
    height: 35px;
    width: 35px;
  }
`;

export const UserIcon = styled.img`
  height: 75px;
  width: 75px;
  margin-right: 5px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
        transform: scale(1.2); 
    }

    @media (max-width: ${breakpoints.mobileL}) {
    height: 20px;
    width: 20px;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 2000;
  width: 150px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;


  @media (max-width: ${breakpoints.tablet}) {
    width: 120px;
    right: -10px;
  }

  @media (max-width: ${breakpoints.mobileL}) {
    width: 100px;
    right: -5px;
  }
`;

export const DropdownItem = styled.a`
  padding: 10px 15px;
  text-decoration: none;
  color: black;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
    color: #5517A8;
  }
  &:last-child {
    border-top: 1px solid #ddd;
  }


  @media (max-width: ${breakpoints.tablet}) {
    padding: 8px 12px;
    font-size: 13px;
  }

  @media (max-width: ${breakpoints.mobileL}) {
    padding: 6px 10px;
    font-size: 12px;
  }
`;