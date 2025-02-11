import { NavbarContainer, Logo, NavItems, NavItem, UserIcon, LogoContainer} from '../../Styles/AdminSideStyle/AdminNavbarStyle'
import {Link, useNavigate} from 'react-router-dom'
import easedementia_logo from '../../assets/images/easedementia_logo.png'
import user_icon from '../../assets/images/user_icon.svg'
import {useDispatch, useSelector} from 'react-redux'
import Cookies from 'js-cookie';
import { clearAdminAuth } from '../../Redux/AdminSlice'


const AdminNavbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isAdminAuthenticated, adminUser } = useSelector(state => state.admin);
    console.log("ADMIN:", adminUser)
    console.log("IS AUTHENTICATED:", isAdminAuthenticated)

    const handleLogout = () => {
        Cookies.remove('accessToken');
        Cookies.remove('refreshToken');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        dispatch(clearAdminAuth());
        navigate('/admin-login');
    };

    return (
        <NavbarContainer>
            <LogoContainer>
                <Link to='/admin-dashboard' >
                    <Logo src= {easedementia_logo} alt='Easedementia Logo' />
                </Link>
            </LogoContainer>
            
            <NavItems>
                {isAdminAuthenticated ? (
                    <>
                        <NavItem as={Link} to="/admin-dashboard/user-list">Users</NavItem>
                        <NavItem as={Link} to="/admin-dashboard/admin-services">Services</NavItem>
                        <NavItem as={Link} to="/admin-dashboard/doctor-consulting">Doctor Consulting</NavItem>
                        <NavItem as={Link} to="/admin-dashboard/assessment-details">Assessment</NavItem>
                        <NavItem as={Link} to="/admin-dashboard/appointment-details">Appointments</NavItem>
                        <UserIcon src={user_icon} onClick={handleLogout} alt="User Icon" />
                    </>
                ) : (
                    // Optionally redirect or display a login prompt for unauthenticated users
                    <NavItem as={Link} to="/admin-login">Admin Login</NavItem>
                )}
            </NavItems>
        </NavbarContainer> 
    )
}

export default AdminNavbar