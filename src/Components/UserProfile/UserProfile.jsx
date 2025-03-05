import UserNavbar from "../Navbar/UserNavbar"
import { ProfileContainer, ProfileDetails, AvatarWrapper, Avatar, UserName, UserContact, EditProfileButton, ButtonsContainer, Button, SummaryContainer, SummaryImage, EditIcon} from '../../Styles/UserProfileStyle/UserProfileStyle'
// import user_profile_right_side from '../../assets/images/user_profile_right_side.svg'
// import arrow from '../../assets/images/arrow.svg'
// import edit_icon from '../../assets/images/edit_icon.svg'

// import user_profile from '../../assets/images/user_profile.svg'
// import { FiArrowRight } from 'react-icons/fi';
// import user_profile1 from '../../assets/images/user_profile1.png'

import Footer from "../Footer/Footer"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { baseURL } from "../../api/api"
import { useSelector, useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { clearAuth } from '../../Redux/UserSlice'
import CallButton from "../CallUs/CallButton"
import WhatsappButton from "../WhatsappChat/WhatsappButton"
import EditProfileModal from "./EditProfileModal"


const UserProfile = () => {
  const [userDetails, setUserDetails] = useState({});
  console.log("User Details:", userDetails);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userID = useSelector((state) => state.user.user.user.id);
  console.log("UserID:", userID);

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
      const response = await axios.patch(`${baseURL}/user-profile/${userID}/update/`, formData, {
          headers: {
              'Content-Type': 'multipart/form-data',
          }
      });

        if (response.status === 200) {
            console.log("Profile picture uploaded successfully");
            toast.success("Profile picture uploaded successfully")
            // Handle success, such as updating UI
        }
    } catch (error) {
        console.error("Error uploading file:", error);
        toast.error("Error uploading file");
    }
};



  return (
    <>
      <UserNavbar />
      <ProfileContainer>
        <ProfileDetails>
        <AvatarWrapper onClick={() => document.getElementById('fileInput').click()}>
            <Avatar
              src={avatarPreview || `${baseURL}/media/default-avatar.png`} // Fallback to a default avatar if no image is selected
              alt="User Avatar"
            />
            <EditIcon src="https://d2mzeyyrjif26w.cloudfront.net/assets/images/edit_icon_compressed.png" alt="Edit Icon" />
          </AvatarWrapper>
          <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            accept="image/*" // Ensure only image files can be selected
            onChange={handleFileChange} // Handle file selection
          />
          <UserName>{userDetails.fullname || 'User Name'}</UserName>
          <UserContact>
            <div>{userDetails.mobile || 'Phone Number'}</div>
            <div>{userDetails.email || 'Email Address'}</div>
          </UserContact>
          <EditProfileButton onClick={() => setIsModalOpen(true)}>Edit Profile</EditProfileButton>
          <EditProfileModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            userDetails={userDetails}
            setUserDetails={setUserDetails}
          />
          <ButtonsContainer>
            <Button onClick={() => handleNavigate('/user-profile/assessment-history')}>
              Assessment History <img style={{width:'32px', height:'32px'}} src="https://d2mzeyyrjif26w.cloudfront.net/assets/images/arrow_compressed.png" alt="Arrow Icon" />
            </Button>
            <Button onClick={() => handleNavigate('/user-profile/appointments-history')}>
              Appointment History <img style={{width:'32px', height:'32px'}} src="https://d2mzeyyrjif26w.cloudfront.net/assets/images/arrow_compressed.png" alt="Arrow Icon" />
            </Button>
            <Button onClick={handleLogout}>
              Log Out <img style={{width:'32px', height:'32px'}} src="https://d2mzeyyrjif26w.cloudfront.net/assets/images/arrow_compressed.png" alt="Arrow Icon" />
            </Button>
          </ButtonsContainer>

        </ProfileDetails>

        <SummaryContainer>
          <SummaryImage src="https://d2mzeyyrjif26w.cloudfront.net/assets/images/user_profile_right_side_compressed.png" alt="Profile Summary" />
        </SummaryContainer>
      </ProfileContainer>
      <CallButton/>
      <WhatsappButton/>
      <Footer />
    </>
  )
}

export default UserProfile