import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBBtn,
    MDBFile
  } from 'mdb-react-ui-kit';

import {toast} from 'react-toastify'
import { useState } from 'react';
import axios from 'axios';
import { baseURL } from '../../api/api';
import { useNavigate } from 'react-router-dom';


import AdminNavbar from './AdminNavbar';

const AddDoctor = () => {
    const navigator = useNavigate();
    const [doctorName, setDoctorName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [schedule, setSchedule] = useState('');
    const [details, setDetails] = useState('');
    const [consultingFee, setConsultingFee] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);
    const [category, setCategory] = useState('doctor');


    const [doctorNameError, setDoctorNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [mobileError, setMobileError] = useState('');
    const [specializationError, setSpecializationError] = useState('');
    const [scheduleError, setScheduleError] = useState('');
    const [detailsError, setDetailsError] = useState('');
    const [consultingFeeError, setConsultingFeeError] = useState('');
    const [profilePictureError, setProfilePictureError] = useState(null);
    const [categoryError, setCategoryError] = useState('');



    const handleFileChange = (e) => {
        setProfilePicture(e.target.files[0]);
    };


    const handleCategoryChange = (e) => {
      setCategory(e.target.value);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        setDoctorNameError('');
        setEmailError('');
        setMobileError('');
        setSpecializationError('');
        setScheduleError('');
        setDetailsError('');
        setConsultingFeeError('');
        setProfilePictureError('');
        setCategoryError('');

        let valid = true

        if (!doctorName.trim()) {
            setDoctorNameError('Doctor name is required!');
            toast.warning('Doctor name is required!');
            valid = false;
        }
        if (!email.trim()) {
            setEmailError('Email is required!');
            toast.warning('Email is required!');
            valid = false;
        }
        if (!mobile.trim()) {
            setMobileError('Mobile is required!');
            toast.warning('Mobile is required!');
            valid = false;
        }
        if (!specialization.trim()) {
        setSpecializationError('Specialization is required!');
        toast.warning('Specialization is required!');
        valid = false;
        }
        if (!schedule.trim()) {
        setScheduleError('Schedule is required!');
        toast.warning('Schedule is required!');
        valid = false;
        }
        if (!details.trim()) {
        setDetailsError('Details are required!');
        toast.warning('Details are required!');
        valid = false;
        }
        if (!consultingFee.trim()) {
        setConsultingFeeError('Consulting fee is required!');
        toast.warning('Consulting fee is required!');
        valid = false;
        }
        if (!profilePicture) {
        setProfilePictureError('Profile picture is required!');
        toast.warning('Profile picture is required!');
        valid = false;
        }
        if (!category) {
          setCategoryError('Category is required!');
          toast.warning('Category is required!');
          valid = false;
        }
    
        if (!valid) {
        return;
        }

          const formData = new FormData();
          formData.append('doctor_name', doctorName);
          formData.append('email', email);
          formData.append('mobile', mobile);
          formData.append('specialization', specialization);
          formData.append('schedule', schedule);
          formData.append('details', details);
          formData.append('consulting_fee', consultingFee);
          formData.append('category', category);
          if (profilePicture) {
            formData.append('profile_picture', profilePicture);
          }

          try {
            const response = await axios.post(`${baseURL}/admin-side/add-doctor/`, formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
            console.log('Doctor added successfully', response.data);
            toast.success('Doctor added successfully');

            setDoctorName('');
            setEmail('');
            setMobile('');
            setSpecialization('');
            setSchedule('');
            setDetails('');
            setConsultingFee('');
            setProfilePicture(null);
            setCategory('doctor');

            navigator('/admin-dashboard/doctor-consulting');

          } catch (error) {
            console.error('There was an error adding the doctor!', error);
            toast.error('There was an error adding the doctor!')
          }
    }

  return (
    <>
    <AdminNavbar/>
    <form onSubmit={handleSubmit} style={{marginTop:'120px'}} >
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='doctor-name' label='Doctor Name' value={doctorName} onChange={(e) => setDoctorName(e.target.value)}
          className={doctorNameError ? 'error' : ''} />
        </MDBCol>
        
        <MDBCol>
          <MDBInput id='specialization' label='Specialization' value={specialization} onChange={(e) => setSpecialization(e.target.value)}
          className={specializationError ? 'error' : ''} />
        </MDBCol>
      </MDBRow>


      <MDBRow className='mb-4'>
        <MDBCol>
            <MDBInput wrapperClass='mb-4' id='email' label='Email Id' value={email} onChange={(e) => setEmail(e.target.value)} className={emailError ? 'error' : ''}/>
        </MDBCol>
        
        <MDBCol>
            <MDBInput wrapperClass='mb-4' id='mobile' label='Mobile No' value={mobile} onChange={(e) => setMobile(e.target.value)} className={mobileError ? 'error' : ''}/>
        </MDBCol>
      </MDBRow>

      <MDBInput wrapperClass='mb-4' id='schedule' label='Schedule' value={schedule} onChange={(e) => setSchedule(e.target.value)} className={scheduleError ? 'error' : ''} />
      

      <MDBInput wrapperClass='mb-4' textarea id='details' rows={4} label='Details' value={details} onChange={(e) => setDetails(e.target.value)} className={detailsError ? 'error' : ''} />
      

      <MDBInput wrapperClass='mb-4' id='consulting-fee' label='Consulting fee' value={consultingFee} onChange={(e) => setConsultingFee(e.target.value)} className={consultingFeeError ? 'error' : ''} />

      <div className={`mb-4 ${categoryError ? 'error' : ''}`}>
          <label htmlFor='category'>Category</label>
          <select id='category' value={category} onChange={handleCategoryChange} className='form-select'>
              <option value='doctor'>Doctor</option>
              <option value='geriatric_counselor'>Geriatric Counselor</option>
          </select>
      </div>

      

      <MDBFile label='Add doctor image' id='formFileMultiple' onChange={handleFileChange} multiple style={{marginBottom:'20px'}} className={profilePictureError ? 'error' : ''} />
      

      <MDBBtn className='mb-4' type='submit' block>
        Submit
      </MDBBtn>
    </form>
    </>
    
  )
}

export default AddDoctor