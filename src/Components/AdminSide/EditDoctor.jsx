import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { MDBInput, MDBBtn, MDBRow, MDBCol, MDBFile } from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import AdminNavbar from './AdminNavbar';
import { baseURL } from '../../api/api';


const EditDoctor = () => {
  const { id } = useParams();
  const navigator = useNavigate();
  const [doctor, setDoctor] = useState({
    doctor_name: '',
    email: '',
    mobile: '',
    specialization: '',
    schedule: '',
    details: '',
    consulting_fee: '',
    profile_picture: null,
  });

  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
      const fetchDoctor = async () => {
        try {
          const response = await axios.get(`${baseURL}/admin-side/doctors-details/${id}/`);
          console.log('Current Value:', response.data)
          setDoctor(response.data);
        } catch (error) {
          console.error('Error fetching doctor data', error);
        }
      };
  
      fetchDoctor();
    }, [id]);
  
    const handleFileChange = (e) => {
      setProfilePicture(e.target.files[0]);
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setDoctor({ ...doctor, [name]: value });
    };
  
    

    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      Object.keys(doctor).forEach((key) => {
          formData.append(key, doctor[key]);
      });
      if (profilePicture) {
          formData.append('profile_picture', profilePicture);
      }
  
      try {
          const response = await axios.put(`${baseURL}/admin-side/doctors-details/${id}/`, formData, {
              headers: {
                  'Content-Type': 'multipart/form-data',
              },
          });
          console.log('Doctor details updated successfully', response.data);
          toast.success('Doctor details updated successfully');
          navigator('/admin-dashboard/doctor-consulting');
      } catch (error) {
          console.error('Error updating doctor data', error);
          toast.error('There was an error updating the doctor!');
      }
  };

return (
  <>
    <AdminNavbar />
    <div style={{ marginTop: '120px' }}>
      <h2>Edit Doctor</h2>
      <form onSubmit={handleSubmit}>
        <MDBRow className='mb-4'>
          <MDBCol>
            <MDBInput id='doctor-name' label='Doctor Name' name='doctor_name' value={doctor.doctor_name} onChange={handleInputChange} />
          </MDBCol>
          <MDBCol>
            <MDBInput id='specialization' label='Specialization' name='specialization' value={doctor.specialization} onChange={handleInputChange} />
          </MDBCol>
        </MDBRow>
        <MDBRow className='mb-4'>
          <MDBCol>
            <MDBInput id='email' label='Email' name='email' value={doctor.email} onChange={handleInputChange} />
          </MDBCol>
          <MDBCol>
            <MDBInput id='mobile' label='Mobile' name='mobile' value={doctor.mobile} onChange={handleInputChange} />
          </MDBCol>
        </MDBRow>
        <MDBInput wrapperClass='mb-4' id='schedule' label='Schedule' name='schedule' value={doctor.schedule} onChange={handleInputChange} />
        <MDBInput wrapperClass='mb-4' textarea id='details' rows={4} label='Details' name='details' value={doctor.details} onChange={handleInputChange} />
        <MDBInput wrapperClass='mb-4' id='consulting-fee' label='Consulting Fee' name='consulting_fee' value={doctor.consulting_fee} onChange={handleInputChange} />
        <MDBFile label='Update doctor image' id='formFileMultiple' onChange={handleFileChange} style={{ marginBottom: '20px' }} />
        <MDBBtn className='mb-4' type='submit' block>
          Submit
        </MDBBtn>
      </form>
    </div>
  </>
);
};

export default EditDoctor;