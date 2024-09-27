import { NavbarContainer, Logo, NavItems, NavItem, UserIcon, LogoContainer, Dropdown, DropdownItem} from '../../Styles/Navbar/UserNavbarStyles'
import {Link, useNavigate} from 'react-router-dom'
import easedementia_logo from '../../assets/images/easedementia_logo.png'
import user_icon from '../../assets/images/user_icon.svg'
import { useState } from 'react'
import Cookies from 'js-cookie';




const UserNavbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const handleDropdownToggle = () => setDropdownOpen(prev => !prev);
    
    const handleLogout = () => {
        Cookies.remove('accessToken');
        Cookies.remove('refreshToken');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        navigate('/login');
    }
    return (
        <NavbarContainer>
            <LogoContainer>
                <Logo src= {easedementia_logo} alt='Easedementia Logo' />
            </LogoContainer>
            
            <NavItems>
                <NavItem as={Link} to="/about">About Us</NavItem>
                <NavItem as={Link} to="/services">Services</NavItem>
                <NavItem as={Link} to="/doctor-consulting">Doctor Consulting</NavItem>
                <NavItem as={Link} to="/assessment">Assessment</NavItem>
                <NavItem as={Link} to="/contact">Contact Us</NavItem>
                
                
                    <UserIcon onClick={handleDropdownToggle} src={user_icon} alt="User Icon" />
                    {dropdownOpen && (
                        <Dropdown>
                            <DropdownItem as={Link} to="/user-profile">User Profile</DropdownItem>
                            <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
                        </Dropdown>
                    )}
                
                
            </NavItems>
            
        </NavbarContainer>
    )
}

export default UserNavbar