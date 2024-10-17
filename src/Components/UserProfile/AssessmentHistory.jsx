import { ProfileContainer, ProfileDetails, AvatarWrapper, Avatar, UserName, UserContact, ButtonsContainer, Button, SummaryContainer ,SummaryTitle, TableContainer, Table, TableHeader, TableRow, TableData, EditIcon } from '../../Styles/UserProfileStyle/UserProfileStyle'
import UserNavbar from '../Navbar/UserNavbar'
import Footer from '../Footer/Footer'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { baseURL } from '../../api/api'
import axios from 'axios'
import edit_icon from '../../assets/images/edit_icon.svg'
import arrow from '../../assets/images/arrow.svg'


const AssessmentHistory = () => {
  const [userDetails, setUserDetails] = useState('');
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [assessments, setAssessments] = useState([]);
  const navigate = useNavigate();
  const userID = useSelector((state) => state.user.user.user.id);

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


  

  return (
    <>
    <UserNavbar/>
    <ProfileContainer>
      <ProfileDetails>
        <AvatarWrapper>
          <Avatar src={avatarPreview || `${baseURL}/media/default-avatar.png`} alt="User Avatar" />
          <EditIcon src={edit_icon} alt="Edit Icon" />
        </AvatarWrapper>
        <UserName>{userDetails.fullname || 'User Name'}</UserName>
        <UserContact>
          <div>{userDetails.mobile || 'Phone Number'}</div>
          <div>{userDetails.email || 'Email Address'}</div>
        </UserContact>
        <ButtonsContainer>
          <Button selected={true} onClick={() => handleNavigate('/user-profile/assessment-history')} >
            Assessment History <img src={arrow} alt="Arrow Icon" />
          </Button>
          <Button selected={false} onClick={() => handleNavigate('/user-profile/appointments-history')} >
            Appointment History <img src={arrow} alt="Arrow Icon" />
          </Button>
          <Button selected={false} onClick={() => handleNavigate('/logout')}>
              Log Out <img src={arrow} alt="Arrow Icon" />
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
              {assessments.length > 0 ? (
                assessments
                  .slice()  // Create a shallow copy to avoid mutating the original array
                  .reverse()  // Reverse the order of the array
                  .map((assessment) => (
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
      </SummaryContainer>
    </ProfileContainer>
    <Footer/>
    </>
  )
}

export default AssessmentHistory