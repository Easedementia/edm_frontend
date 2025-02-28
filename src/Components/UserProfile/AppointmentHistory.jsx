import { useNavigate } from "react-router-dom";
import UserNavbar from "../Navbar/UserNavbar"
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../../api/api";
import { toast } from "react-toastify";
import { ProfileContainer, ProfileDetails, AvatarWrapper, Avatar, UserName, UserContact, ButtonsContainer, Button, SummaryContainer ,SummaryTitle, TableContainer, Table, TableHeader, TableRow, TableData, Status, MeetingLink, EditIcon, PaginationWrapper, PaginationButton, PaginationInfo } from '../../Styles/UserProfileStyle/UserProfileStyle'
import Footer from "../Footer/Footer";
// import arrow from '../../assets/images/arrow.svg'
// import edit_icon from '../../assets/images/edit_icon.svg'
import { clearAuth } from '../../Redux/UserSlice'
import CallButton from "../CallUs/CallButton";
import WhatsappButton from "../WhatsappChat/WhatsappButton";


const AppointmentHistory = () => {
    const [userDetails, setUserDetails] = useState({});
    console.log("User Details:", userDetails);
    const [avatarPreview, setAvatarPreview] = useState(null);
    const [appointments, setAppointments] = useState([]);
    console.log("APPOINTMENTS:", appointments)
    const [currentPage, setCurrentPage] = useState(1);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userID = useSelector((state) => state.user.user.user.id);
    console.log("UserID:", userID);
    const entriesPerPage = 5;

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                if (userID) {
                    const response = await axios.get(`${baseURL}/user-details/`, {
                        params: { user_id: userID } 
                    });
                    setUserDetails(response.data);
                    setAvatarPreview(`${baseURL}${response.data.profile_picture}`);
                }
            } catch (error) {
                console.error("Error fetching user details:", error);
                toast.error("Error fetching user details");
            }
        };
    
        fetchUserDetails();
      }, [userID]);


    
      useEffect(() => {
        const fetchAppointments = async () => {
            try {
                if (userID) {
                    const response = await axios.get(`${baseURL}/appointments/`, {
                        params: { user_id: userID } 
                    });
                    setAppointments(response.data);
                }
            } catch (error) {
                console.error("Error fetching appointments:", error);
            }
        };

        fetchAppointments();
    }, [userID]);
    
    
      const handleNavigate = (path) => {
        navigate(path);
      }


      const handleLogout = () => {
        // Clear authentication data
        dispatch(clearAuth());
        // Navigate to the login page
        navigate('/login');
      };


      const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setAvatarPreview(reader.result);
          };
          reader.readAsDataURL(selectedFile);
          handleFileUpload(selectedFile);
        }
      };
    
      const handleFileUpload = async (selectedFile) => {
        const formData = new FormData();
        formData.append('profile_picture', selectedFile);
    
        try {
          await axios.patch(`${baseURL}/user-profile/update/`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              // Add authorization header if needed
            }
          });
        } catch (error) {
          console.error("Error uploading file:", error);
          toast.error("Error uploading file");
        }
      };


      const renderMeetingLink = (appointment) => {
        return appointment.meet_link ? (
            <a style={{color:'#5517A8'}} href={appointment.meet_link} target="_blank" rel="noopener noreferrer">
                Meeting Link
            </a>
        ) : (
            <span>No meeting link</span>
        );
    };


    // Pagination logic
  const totalPages = Math.ceil(appointments.length / entriesPerPage);
  const currentEntries = appointments
    .slice()
    .reverse()
    .slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };


      

  return (
    <>
    <UserNavbar/>
    <ProfileContainer>
    <ProfileDetails>
          <AvatarWrapper onClick={() => document.getElementById('fileInput').click()}>
            <Avatar
              src={avatarPreview || `${baseURL}/media/default-avatar.png`} // Fallback to a default avatar if no image is selected
              alt="User Avatar"
            />
            <EditIcon src="https://d2mzeyyrjif26w.cloudfront.net/assets/images/edit_icon.svg" alt="Edit Icon" />
          </AvatarWrapper>
          <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            onChange={handleFileChange} 
          />
          <UserName>{userDetails.fullname || 'User Name'}</UserName>
          <UserContact>
            <div>{userDetails.mobile || 'Phone Number'}</div>
            <div>{userDetails.email || 'Email Address'}</div>
          </UserContact>
          <ButtonsContainer>
            <Button selected={false} onClick={() => handleNavigate('/user-profile/assessment-history')}>
              Assessment History <img src="https://d2mzeyyrjif26w.cloudfront.net/assets/images/arrow.svg" alt="Arrow Icon" />
            </Button>
            <Button selected={true} onClick={() => handleNavigate('/user-profile/appointments-history')}>
              Appointment History <img src="https://d2mzeyyrjif26w.cloudfront.net/assets/images/arrow.svg" alt="Arrow Icon" />
            </Button>
            <Button onClick={handleLogout}>
              Log Out <img src="https://d2mzeyyrjif26w.cloudfront.net/assets/images/arrow.svg" alt="Arrow Icon" />
            </Button>
          </ButtonsContainer>
        </ProfileDetails>
        <SummaryContainer>
      <SummaryTitle>Appointment History</SummaryTitle>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <TableHeader>Consultation</TableHeader>
              <TableHeader>Date</TableHeader>
              <TableHeader>Time</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Action</TableHeader>
            </tr>
          </thead>
          <tbody>
          {currentEntries.length > 0 ? (
            currentEntries.map((appointment) => (
              <TableRow key={appointment.id}>
                <TableData>{appointment.doctor_name}</TableData>
                <TableData>
                  {new Date(appointment.time_slot_date).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                  })}
                </TableData>
                <TableData>
                  {appointment.time_slot_date && appointment.time_slot_start_time ? (
                    new Date(`${appointment.time_slot_date}T${appointment.time_slot_start_time}`).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })
                  ) : (
                    'N/A'
                  )}
                </TableData>
                <TableData>
                  <Status status={appointment.status}>{appointment.status}</Status>
                </TableData>
                <TableData>
                  <MeetingLink>{renderMeetingLink(appointment)}</MeetingLink>
                </TableData>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableData colSpan="5">No appointments found.</TableData>
            </TableRow>
          )}
        </tbody>

        </Table>
      </TableContainer>
      <PaginationWrapper>
        <PaginationButton onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </PaginationButton>
        <PaginationInfo>
          Page {currentPage} of {totalPages}
        </PaginationInfo>
        <PaginationButton onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </PaginationButton>
      </PaginationWrapper>
    </SummaryContainer>
    </ProfileContainer>
    <CallButton/>
    <WhatsappButton/>
    <Footer/>

    </>
    
  )
}

export default AppointmentHistory