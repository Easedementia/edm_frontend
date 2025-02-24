import { NavbarContainer, Logo, NavItems, NavItem, UserIcon, LogoContainer, Dropdown, DropdownItem, HamburgerIcon} from '../../Styles/Navbar/UserNavbarStyles'
import {Link, useLocation, useNavigate} from 'react-router-dom'
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
    const location = useLocation();

    const { isAuthenticated } = useSelector(state => state.user);
    

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

    const isActive = (path) => location.pathname === path;

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
                <NavItem as={Link} to="/about" style={{ color: isActive('/about') ? '#5517A8' : 'black' }} >About Us</NavItem>
                <NavItem as={Link} to="/services" style={{ color: isActive('/services') ? '#5517A8' : 'black' }} >Services</NavItem>
                <NavItem as={Link} to="/assessment" style={{ color: isActive('/assessment') ? '#5517A8' : 'black' }} >Assessment</NavItem>
                {/* <NavItem as={Link} to="/doctor-consulting" style={{ color: isActive('/doctor-consulting') ? '#5517A8' : 'black' }} >Doctor Consulting</NavItem> */}
                <NavItem as={Link} to="/contact" style={{ color: isActive('/contact') ? '#5517A8' : 'black' }} >Contact Us</NavItem>

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