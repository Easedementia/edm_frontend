import { NavbarContainer, Logo, NavItems, NavItem, UserIcon, LogoContainer} from '../../Styles/AdminSideStyle/AdminNavbarStyle'
import {Link} from 'react-router-dom'
import easedementia_logo from '../../assets/images/easedementia_logo.png'
import user_icon from '../../assets/images/user_icon.svg'



const AdminNavbar = () => {
    return (
        <NavbarContainer>
            <LogoContainer>
                <Logo src= {easedementia_logo} alt='Easedementia Logo' />
            </LogoContainer>
            
            <NavItems>
                <NavItem as={Link} to="/admin-dashboard/user-list">Users</NavItem>
                <NavItem as={Link} to="/admin-dashboard/admin-services">Services</NavItem>
                <NavItem as={Link} to="/admin-dashboard/doctor-consulting">Doctor Consulting</NavItem>
                <NavItem as={Link} to="/admin-assessment">Assessment</NavItem>
                <UserIcon src={user_icon} alt="User Icon" />
            </NavItems>
        </NavbarContainer>
    )
}

export default AdminNavbar