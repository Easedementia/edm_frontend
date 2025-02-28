import { ProfileContainer, ProfileDetails, AvatarWrapper, Avatar, UserName, UserContact, ButtonsContainer, Button, SummaryContainer ,SummaryTitle, TableContainer, Table, TableHeader, TableRow, TableData, EditIcon, PaginationWrapper, PaginationButton, PaginationInfo } from '../../Styles/UserProfileStyle/UserProfileStyle'
import UserNavbar from '../Navbar/UserNavbar'
import Footer from '../Footer/Footer'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { baseURL } from '../../api/api'
import axios from 'axios'
// import edit_icon from '../../assets/images/edit_icon.svg'
// import arrow from '../../assets/images/arrow.svg'
import { clearAuth } from '../../Redux/UserSlice'
import CallButton from '../CallUs/CallButton'
import WhatsappButton from '../WhatsappChat/WhatsappButton'


const AssessmentHistory = () => {
  const [userDetails, setUserDetails] = useState('');
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [assessments, setAssessments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userID = useSelector((state) => state.user.user.user.id);
  const entriesPerPage = 6;

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
    const fetchAssessments = async () => {
      try{
        if (userID) {
          const response = await axios.get(`${baseURL}/assessments/`, {
            params: {user_id : userID}
          });
          setAssessments(response.data);
        }
      } catch (error) {
        console.error("Error fetching assessment history");
        toast.error("Error fetching assessment history");
      }
    };
    fetchAssessments();
  }, [userID]);


  const handleNavigate = (path) => {
    navigate(path);
  };


  const handleLogout = () => {
    // Clear authentication data
    dispatch(clearAuth());
    // Navigate to the login page
    navigate('/login');
  };


  // Pagination logic
  const totalPages = Math.ceil(assessments.length / entriesPerPage);
  const currentEntries = assessments
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
        <AvatarWrapper>
          <Avatar src={avatarPreview || `${baseURL}/media/default-avatar.png`} alt="User Avatar" />
          <EditIcon src="https://d2mzeyyrjif26w.cloudfront.net/assets/images/edit_icon.svg" alt="Edit Icon" />
        </AvatarWrapper>
        <UserName>{userDetails.fullname || 'User Name'}</UserName>
        <UserContact>
          <div>{userDetails.mobile || 'Phone Number'}</div>
          <div>{userDetails.email || 'Email Address'}</div>
        </UserContact>
        <ButtonsContainer>
          <Button selected={true} onClick={() => handleNavigate('/user-profile/assessment-history')} >
            Assessment History <img src="https://d2mzeyyrjif26w.cloudfront.net/assets/images/arrow.svg" alt="Arrow Icon" />
          </Button>
          <Button selected={false} onClick={() => handleNavigate('/user-profile/appointments-history')} >
            Appointment History <img src="https://d2mzeyyrjif26w.cloudfront.net/assets/images/arrow.svg" alt="Arrow Icon" />
          </Button>
          <Button onClick={handleLogout}>
              Log Out <img src="https://d2mzeyyrjif26w.cloudfront.net/assets/images/arrow.svg" alt="Arrow Icon" />
            </Button>
        </ButtonsContainer>
      </ProfileDetails>

      <SummaryContainer>
        <SummaryTitle>Assessment History</SummaryTitle>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <TableHeader>Client Name</TableHeader>
                <TableHeader>Date</TableHeader>
                <TableHeader>Score</TableHeader>
                <TableHeader>Interpretation</TableHeader>
              </tr>
            </thead>
            <tbody>
                {currentEntries.length > 0 ? (
                  currentEntries.map((assessment) => (
                    <TableRow key={assessment.id}>
                      <TableData>{assessment.fullname}</TableData>
                      <TableData>
                        {new Date(assessment.assessment_date).toLocaleDateString('en-GB', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric',
                        })}
                      </TableData>
                      <TableData>{assessment.assessment_score}</TableData>
                      <TableData>{assessment.interpretation || 'N/A'}</TableData>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableData colSpan="4">No assessments found</TableData>
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

export default AssessmentHistory