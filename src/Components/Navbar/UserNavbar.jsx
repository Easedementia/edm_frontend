import { NavbarContainer, Logo, NavItems, NavItem, UserIcon, LogoContainer, Dropdown, DropdownItem, HamburgerIcon} from '../../Styles/Navbar/UserNavbarStyles'
import {Link, useNavigate} from 'react-router-dom'
import easedementia_logo from '../../assets/images/easedementia_logo.png'
import user_icon from '../../assets/images/user_icon.svg'
import { useState } from 'react'
import Cookies from 'js-cookie';
import {useDispatch, useSelector} from 'react-redux'
import { clearAuth } from '../../Redux/UserSlice'
import menu from '../../assets/images/menu.png'




const UserNavbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false); // Hamburger menu state
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isAuthenticated, user } = useSelector(state => state.user);
    console.log("***User***", user);

    const handleDropdownToggle = () => setDropdownOpen(prev => !prev);

    const handleLogout = () => {
        Cookies.remove('accessToken');
        Cookies.remove('refreshToken');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        dispatch(clearAuth());
        navigate('/login');
    };

    const handleUserIconClick = () => {
        if (isAuthenticated) {
            handleDropdownToggle();
        } else {
            navigate('/login');
        }
    };

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen); // Toggle mobile navigation
    };

    return (
        <NavbarContainer>
            <LogoContainer>
                <Link to='/'>
                    <Logo src={easedementia_logo} alt="Easedementia Logo" />
                </Link>
            </LogoContainer>

            {/* Hamburger icon for mobile */}
            <HamburgerIcon onClick={toggleNav}>
                <img src={isNavOpen ? menu : menu} alt="Menu" />
            </HamburgerIcon>

            {/* Conditional rendering of NavItems based on isNavOpen */}
            <NavItems className={isNavOpen ? 'active' : ''}>
                <NavItem as={Link} to="/about">About Us</NavItem>
                <NavItem as={Link} to="/services">Services</NavItem>
                <NavItem as={Link} to="/doctor-consulting">Doctor Consulting</NavItem>
                <NavItem as={Link} to="/assessment">Assessment</NavItem>
                <NavItem as={Link} to="/contact">Contact Us</NavItem>

                <UserIcon onClick={handleUserIconClick} src={user_icon} alt="User Icon" />
                {isAuthenticated && dropdownOpen && (
                    <Dropdown>
                        <DropdownItem as={Link} to="/user-profile">User Profile</DropdownItem>
                        <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
                    </Dropdown>
                )}
            </NavItems>
        </NavbarContainer>
    );
};

export default UserNavbar;