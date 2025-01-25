import axios from "axios";
import { useEffect, useState } from "react"
import { toast } from "react-toastify";
import PropTypes from 'prop-types';
import { baseURL } from "../../api/api";
import { refreshAccessToken } from '../../utils/authUtils'
import { ModalWrapper, ModalContent, Form, Label, Input, ButtonContainer, SaveButton, CancelButton } from '../../Styles/UserProfileStyle/EditProfileModalStyle'


const EditProfileModal = ({ isOpen, onClose, userDetails, setUserDetails }) => {
    const [formData, setFormData] = useState({
        fullname: '',
        mobile: '',
      });


      useEffect(() => {
        if (userDetails) {
          setFormData({
            fullname: userDetails.fullname || '',
            mobile: userDetails.mobile || '',
          });
        }
      }, [userDetails]);


      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };


      const handleSubmit = async () => {
        try {
            let token = localStorage.getItem('accessToken');
            console.log('Access Token:', token); // Debugging log
            
            const response = await axios.patch(`${baseURL}/update-user-details/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`, // Add Authorization header
                },
            });
    
            if (response.status === 200) {
                toast.success('Profile updated successfully');
                setUserDetails((prev) => ({
                    ...prev,
                    fullname: formData.fullname,
                    mobile: formData.mobile,
                }));
                onClose(); // Close modal
            }
        } catch (error) {
            // Check if the error is due to an invalid or expired token
            if (
                error.response &&
                error.response.data &&
                error.response.data.code === 'token_not_valid'
            ) {
                console.warn('Access token expired. Attempting to refresh...');
                const newToken = await refreshAccessToken();
                
                if (newToken) {
                    // Retry the request with the new access token
                    try {
                        const retryResponse = await axios.patch(`${baseURL}/update-user-details/`, formData, {
                            headers: {
                                'Content-Type': 'multipart/form-data',
                                Authorization: `Bearer ${newToken}`,
                            },
                        });
    
                        if (retryResponse.status === 200) {
                            toast.success('Profile updated successfully');
                            setUserDetails((prev) => ({
                                ...prev,
                                fullname: formData.fullname,
                                mobile: formData.mobile,
                            }));
                            onClose(); // Close modal
                        }
                    } catch (retryError) {
                        console.error('Retry failed:', retryError);
                        toast.error('Error updating profile details after refreshing token.');
                    }
                } else {
                    console.error('Token refresh failed. User needs to log in again.');
                    toast.error('Session expired. Please log in again.');
                }
            } else {
                // Handle other errors
                console.error('Error updating profile details:', error);
                toast.error('Error updating profile details.');
            }
        }
    };
      

      if (!isOpen) return null;

  return (
    <ModalWrapper>
      <ModalContent>
        <h2>Edit Profile</h2>
        <Form>
          <Label>Full Name</Label>
          <Input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
          />
          <Label>Mobile Number</Label>
          <Input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          <Label>Email</Label>
          <Input
            type="email"
            value={userDetails.email}
            disabled
          />
          <ButtonContainer>
            <SaveButton onClick={handleSubmit}>Save</SaveButton>
            <CancelButton onClick={onClose}>Cancel</CancelButton>
          </ButtonContainer>
        </Form>
      </ModalContent>
    </ModalWrapper>
  )
}


EditProfileModal.propTypes = {
    isOpen: PropTypes.bool.isRequired, // Modal open state
    onClose: PropTypes.func.isRequired, // Function to close the modal
    userDetails: PropTypes.shape({
      fullname: PropTypes.string.isRequired,
      mobile: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired, // User details object
    setUserDetails: PropTypes.func.isRequired, // Function to update user details
  };

export default EditProfileModal