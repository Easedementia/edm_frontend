import { NavbarContainer, Logo, NavItems, NavItem, UserIcon, LogoContainer, UserIconContainer } from '../../Styles/Navbar/UserNavbarStyles'
import {Link} from 'react-router-dom'
import easedementia_logo from '../../assets/images/easedementia_logo.png'
import user_icon from '../../assets/images/user_icon.png'



const UserNavbar = () => {
    return (
        <NavbarContainer>
            <LogoContainer>
                <Logo src= {easedementia_logo} alt='Easedementia Logo' />
            </LogoContainer>
            
            <NavItems>
                <NavItem as={Link} to="/about">About Us</NavItem>
                <NavItem as={Link} to="/services">Services</NavItem>
                <NavItem as={Link} to="/assessment">Assessment</NavItem>
                <NavItem as={Link} to="/contact">Contact Us</NavItem>
                <UserIconContainer>
                    <UserIcon src={user_icon} alt="User Icon" />
                </UserIconContainer>
            </NavItems>
            
        </NavbarContainer>
    )
}

export default UserNavbar