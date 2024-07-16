import styled from 'styled-components'


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
    box-shadow: 0 4px 2px -2px gray;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        padding: 10px 20px;
    }

    @media (max-width: 480px) {
        padding: 10px 15px;
    }
`


export const LogoContainer = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        margin-bottom: 10px;
    }

`


export const Logo = styled.img`
    height: 55px;

    @media (max-width: 480px) {
        height: 45px;
    }
`


export const NavItems = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;

    @media (max-width: 768px) {
        width: 100%;
        justify-content: space-between;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        gap: 20px;
        align-items: flex-start;
    }
`


export const NavItem = styled.a`
    text-decoration: none;
    color: black;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    &:hover{
        color: purple;
    }

    @media (max-width: 480px) {
        font-size: 14px;
    }
`;


export const UserIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: purple;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  overflow: hidden;

  @media (max-width: 480px) {
        height: 35px;
        width: 35px;
    }
`;

export const UserIcon = styled.img`
  height: 75px;
  width: 75px;
  margin-right: 65px;
  margin-left: 0;
  cursor: pointer;

  @media (max-width: 480px) {
        height: 20px;
        width: 20px;
    }
`;